import { createTheme } from '@mui/material';

export const shades = {
    primary: {
        500: '#a8c39c',
    },
    secondary: {
        500: '#3a5a40',
    },
    neutral: {
        100: '#fffefc',
        200: '#fffdf9',
        300: '#fffdf6',
        400: '#fffcf3',
        500: '#fffbf0',
        600: '#ccc9c0',
        700: '#999790',
        800: '#666460',
        900: '#333230',
    },
};

export const theme = createTheme({
    palette: {
        primary: {
            main: shades.primary[500],
        },
        secondary: {
            main: shades.secondary[500],
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100],
        },
    },
});
