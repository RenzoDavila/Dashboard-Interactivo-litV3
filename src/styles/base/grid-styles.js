import { css } from 'lit';

export const gridStyles = css`
    $breakpoints: (
        sm: 576px,
        md: 768px,
        lg: 992px,
        xl: 1200px,
    );

    $columns: 12;

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: -0.5rem;
        margin-right: -0.5rem;
    }

    .col {
        flex: 1 0 0%;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    // Generador de clases para .col-*, .col-sm-*, .col-md-*, etc.
    @for $i from 1 through $columns {
        .col-#{$i} {
            flex: 0 0 percentage($i / $columns);
            max-width: percentage($i / $columns);
        }
    }

    @each $break, $size in $breakpoints {
        @media (min-width: #{$size}) {
            @for $i from 1 through $columns {
                .col-#{$break}-#{$i} {
                    flex: 0 0 percentage($i / $columns);
                    max-width: percentage($i / $columns);
                }
            }
        }
    }

    // Alineación horizontal
    .justify-start   { justify-content: flex-start; }
    .justify-center  { justify-content: center; }
    .justify-end     { justify-content: flex-end; }
    .justify-between { justify-content: space-between; }
    .justify-around  { justify-content: space-around; }

    // Alineación vertical
    .align-start   { align-items: flex-start; }
    .align-center  { align-items: center; }
    .align-end     { align-items: flex-end; }
`;