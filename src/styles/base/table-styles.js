import { css } from 'lit';

export const tableStyles = css`
    table {
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        color: var(--text);
        border: 3px solid var(--border);
        overflow: hidden;
        box-shadow: var(--shadow-1);
        margin-bottom: var(--space-5);
    }

    thead {
        background: var(--surface-2);
    }

    th, td {
        padding: var(--space-2) var(--space-3);
        border-bottom: 1px solid var(--border);
        text-align: left;
    }

    th {
        font-weight: 600;
        color: var(--surface-2);
        background: var(--border);
        letter-spacing: 0.03em;
        font-size: 1rem;
        border-bottom: 2px solid var(--surface-2);
    }

    tr:last-child td {
        border-bottom: none;
    }

    tbody tr {
        transition: background 0.15s;
    }

    tbody tr:hover {
        background: color-mix(in oklab, var(--primary) 7%, var(--surface-2));
    }

    td {
        font-size: 0.98rem;
    }

    table caption {
        caption-side: bottom;
        color: var(--text-muted);
        font-size: 0.92rem;
        padding: var(--space-2);
    }
`;