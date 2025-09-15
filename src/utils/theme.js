export const getCurrentTheme = () =>
    document.body.dataset.theme === 'light' ? 'light' : 'dark';

export function applyTheme(theme) {
    const value = theme === 'light' ? 'light' : 'dark';
    document.body.dataset.theme = value;
    // sincroniza con UA (formularios/scrollbar)
    document.documentElement.style.colorScheme = value;

    // opcional: meta theme-color (Chrome Android)
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', value === 'light' ? '#f6f7fb' : '#0b0f14');
}

export function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = saved || system;
    applyTheme(theme);

    // Si no hay preferencia del usuario, escucha cambios del sistema
    if (!saved) {
        const mq = matchMedia('(prefers-color-scheme: dark)');
        const handler = e => applyTheme(e.matches ? 'dark' : 'light');
        mq.addEventListener ? mq.addEventListener('change', handler)
                            : mq.addListener(handler); // fallback
    }
}

export function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
}

export function toggleTheme() {
    const next = getCurrentTheme() === 'light' ? 'dark' : 'light';
    setTheme(next);
    return next;
}

export function clearThemePreference() {
    localStorage.removeItem(THEME_KEY);
    initTheme();
}