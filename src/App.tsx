import React, { useEffect, useState } from 'react';
import { Button } from 'baseui/button';
import ShareModal from './ShareModal';
import { DarkTheme, LightTheme, styled, ThemeProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Checkbox, StatefulCheckbox } from 'baseui/checkbox';

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
        const theme: string | null = localStorage.getItem('theme');
        if (theme) {
            setTheme(theme as THEME);
        }
    }, []);

    return (
        <StyletronProvider value={engine}>
            <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
                <Button onClick={handleClickEvent}>Toggle light/dark theme!</Button>
                <Centered>
                    <ShareModal isModalOpen={isOpen} setModalOpen={setIsOpen} />
                    <Button onClick={() => setIsOpen(true)}>{'Open Share Modal'}</Button>
                </Centered>
            </ThemeProvider>
        </StyletronProvider>
    );
}
