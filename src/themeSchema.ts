import { createTheme, darkThemePrimitives, lightThemePrimitives } from 'baseui';

export const LightTheme = createTheme(
    { ...lightThemePrimitives, primaryFontFamily: 'Inter' },
    {
        colors: {
            buttonPrimaryFill: '#0071DB',
            buttonPrimaryText: 'rgba(255,255,255,0.88)',
        },
        borders: {
            buttonBorderRadius: '6px',
        },
    },
);

export const DarkTheme = createTheme(
    {
        ...darkThemePrimitives,
        primaryFontFamily: 'Inter',
        primary: '#0071DB',
    },
    {
        colors: {
            buttonPrimaryFill: '#0071DB',
            buttonPrimaryText: 'rgba(0,0,0,0.88)',
        },
        borders: {
            buttonBorderRadius: '6px',
        },
    },
);
