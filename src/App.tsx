import React, { useEffect, useState } from 'react';
import { Button } from 'baseui/button';
import ShareModal from './ShareModal';
import { styled, ThemeProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { DarkTheme, LightTheme } from './themeSchema';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const engine = new Styletron();
    const Centered = styled('div', {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    });
    enum THEME {
        light = 'light',
        dark = 'dark',
    }
    const [theme, setTheme] = useState(THEME.light);
    const handleClickEvent = () => {
        setTheme(theme === THEME.light ? THEME.dark : THEME.light);
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        console.log(theme);
        
    }, [theme]);

    useEffect(() => {
        const theme: string | null = localStorage.getItem('theme');
        console.log(theme);

        if (theme != null) {
            setTheme(theme as THEME);
        }
    }, []);

    return (
        <StyletronProvider value={engine}>
            <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
                <Button onClick={handleClickEvent}>{theme=== THEME.light? 'Light Theme' : 'Dark Theme'}</Button>
                <Centered>
                    <ShareModal isModalOpen={isOpen} setModalOpen={setIsOpen} />
                    <Button onClick={() => setIsOpen(true)}>{'Open Share Modal'}</Button>
                </Centered>
            </ThemeProvider>
        </StyletronProvider>
    );
}
