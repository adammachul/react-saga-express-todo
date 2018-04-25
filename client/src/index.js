import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './modules/config/routes';
import { ThemeProvider } from 'styled-components';
import themes from './modules/config/themes';
import { Provider } from 'react-redux';
import configureStore from './modules/config/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={themes.defaultTheme}>
                <App routes={routes} />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
