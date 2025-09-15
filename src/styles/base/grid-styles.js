import { css } from 'lit';

export const gridStyles = css`
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: -0.5rem;
        margin-right: -0.5rem;
        align-items: stretch;
    }
    .col {
        flex: 1 0 0%;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        flex-direction: column;
    }
    .col > * {
        flex: 1 1 auto;
        height: 100%;
    }

    /* Columnas por defecto (12 columnas) */
    .col-1  { flex: 0 0 8.3333%;  max-width: 8.3333%; }
    .col-2  { flex: 0 0 16.6667%; max-width: 16.6667%; }
    .col-3  { flex: 0 0 25%;      max-width: 25%; }
    .col-4  { flex: 0 0 33.3333%; max-width: 33.3333%; }
    .col-5  { flex: 0 0 41.6667%; max-width: 41.6667%; }
    .col-6  { flex: 0 0 50%;      max-width: 50%; }
    .col-7  { flex: 0 0 58.3333%; max-width: 58.3333%; }
    .col-8  { flex: 0 0 66.6667%; max-width: 66.6667%; }
    .col-9  { flex: 0 0 75%;      max-width: 75%; }
    .col-10 { flex: 0 0 83.3333%; max-width: 83.3333%; }
    .col-11 { flex: 0 0 91.6667%; max-width: 91.6667%; }
    .col-12 { flex: 0 0 100%;     max-width: 100%; }

    /* Responsive: col-sm-* (≥576px) */
    @media (min-width: 576px) {
        .col-sm-1  { flex: 0 0 8.3333%;  max-width: 8.3333%; }
        .col-sm-2  { flex: 0 0 16.6667%; max-width: 16.6667%; }
        .col-sm-3  { flex: 0 0 25%;      max-width: 25%; }
        .col-sm-4  { flex: 0 0 33.3333%; max-width: 33.3333%; }
        .col-sm-5  { flex: 0 0 41.6667%; max-width: 41.6667%; }
        .col-sm-6  { flex: 0 0 50%;      max-width: 50%; }
        .col-sm-7  { flex: 0 0 58.3333%; max-width: 58.3333%; }
        .col-sm-8  { flex: 0 0 66.6667%; max-width: 66.6667%; }
        .col-sm-9  { flex: 0 0 75%;      max-width: 75%; }
        .col-sm-10 { flex: 0 0 83.3333%; max-width: 83.3333%; }
        .col-sm-11 { flex: 0 0 91.6667%; max-width: 91.6667%; }
        .col-sm-12 { flex: 0 0 100%;     max-width: 100%; }
    }

    /* Responsive: col-md-* (≥768px) */
    @media (min-width: 768px) {
        .col-md-1  { flex: 0 0 8.3333%;  max-width: 8.3333%; }
        .col-md-2  { flex: 0 0 16.6667%; max-width: 16.6667%; }
        .col-md-3  { flex: 0 0 25%;      max-width: 25%; }
        .col-md-4  { flex: 0 0 33.3333%; max-width: 33.3333%; }
        .col-md-5  { flex: 0 0 41.6667%; max-width: 41.6667%; }
        .col-md-6  { flex: 0 0 50%;      max-width: 50%; }
        .col-md-7  { flex: 0 0 58.3333%; max-width: 58.3333%; }
        .col-md-8  { flex: 0 0 66.6667%; max-width: 66.6667%; }
        .col-md-9  { flex: 0 0 75%;      max-width: 75%; }
        .col-md-10 { flex: 0 0 83.3333%; max-width: 83.3333%; }
        .col-md-11 { flex: 0 0 91.6667%; max-width: 91.6667%; }
        .col-md-12 { flex: 0 0 100%;     max-width: 100%; }
    }

    /* Responsive: col-lg-* (≥992px) */
    @media (min-width: 992px) {
        .col-lg-1  { flex: 0 0 8.3333%;  max-width: 8.3333%; }
        .col-lg-2  { flex: 0 0 16.6667%; max-width: 16.6667%; }
        .col-lg-3  { flex: 0 0 25%;      max-width: 25%; }
        .col-lg-4  { flex: 0 0 33.3333%; max-width: 33.3333%; }
        .col-lg-5  { flex: 0 0 41.6667%; max-width: 41.6667%; }
        .col-lg-6  { flex: 0 0 50%;      max-width: 50%; }
        .col-lg-7  { flex: 0 0 58.3333%; max-width: 58.3333%; }
        .col-lg-8  { flex: 0 0 66.6667%; max-width: 66.6667%; }
        .col-lg-9  { flex: 0 0 75%;      max-width: 75%; }
        .col-lg-10 { flex: 0 0 83.3333%; max-width: 83.3333%; }
        .col-lg-11 { flex: 0 0 91.6667%; max-width: 91.6667%; }
        .col-lg-12 { flex: 0 0 100%;     max-width: 100%; }
    }

    /* Justify */
    .justify-start   { justify-content: flex-start; }
    .justify-center  { justify-content: center; }
    .justify-end     { justify-content: flex-end; }
    .justify-between { justify-content: space-between; }
    .justify-around  { justify-content: space-around; }

    /* Align */
    .align-start   { align-items: flex-start; }
    .align-center  { align-items: center; }
    .align-end     { align-items: flex-end; }
`;