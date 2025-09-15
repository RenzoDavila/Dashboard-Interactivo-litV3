import { css } from 'lit';

export const baseControlsStyles = css`
    .container {
        max-width: 1100px;
        margin-inline: auto;
        padding: 0 var(--space-4);
    }
    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        box-shadow: var(--shadow-1);
    }
    .hr {
        border: 0;
        border-top: 1px solid var(--border);
    }

    /* elementos de interfaces */
    button, input, select, textarea {
        font: inherit;
        color: inherit;
    }
    button {
        padding: 8px 12px;
        background: var(--surface-2);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 8px;
        cursor: pointer;
    }
    button:hover {
        cursor: pointer;
        background: color-mix(in oklab, var(--primary) 8%, var(--surface-2));
        border-color: color-mix(in oklab, var(--primary) 30%, var(--border));
    }
    button:focus-visible {
        outline: none;
        box-shadow: var(--ring);
    }
    button.primary {
        background: var(--primary);
        color: #0b0f14;
        border-color: transparent;
        font-weight: 600;
    }
    button.primary:hover {
        background: color-mix(in oklab, var(--primary) 90%, var(--surface-2));
    }

    img, svg, video {
        max-width: 100%;
        display: block;
    }
    a {
        color: var(--primary);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    ::selection {
        background: color-mix(in oklab, var(--primary) 35%,
        transparent); color: var(--text);
    }
    /* elementos de interfaces */
`;

