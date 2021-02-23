import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider as StyletronProvider } from 'styletron-react';
import {
    BaseProvider,
    createTheme,
    darkThemePrimitives,
    LightTheme,
    lightThemePrimitives,
    styled,
    ThemeProvider,
} from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import App from './App';

const engine = new Styletron();
const Centered = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
});
ReactDOM.render(
    <StyletronProvider value={engine}>
        <ThemeProvider
            theme={createTheme(
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
            )}
        >
            {/*<BaseProvider theme={LightTheme}>*/}
            <Centered>
                <App />
            </Centered>
            {/*</BaseProvider>*/}
        </ThemeProvider>
    </StyletronProvider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
