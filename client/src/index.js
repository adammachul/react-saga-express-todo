import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './modules/config/routes';
import { ThemeProvider } from 'styled-components';
import themes from './modules/config/themes';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={themes.defaultTheme}>
            <App routes={routes} />
        </ThemeProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
