import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,} from 'react-router-dom';
import GlobalStyles from './styles/globalStyles.js';
import { ToastContainer } from 'react-toastify';
import { AppRoutes} from './routes';
import { Elements } from '@stripe/react-stripe-js'
import AppProvider from './hooks';
import stripePromise from './config/stripeConfig.js';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={standardTheme}>
            <AppProvider>
                <Elements stripe={stripePromise}>
                    <BrowserRouter>
                    <AppRoutes/>
                    </BrowserRouter>
                </Elements>
                <GlobalStyles />
                <ToastContainer autoClose={2000} theme='colored' />
            </AppProvider>
        </ThemeProvider>
    </StrictMode>,
);
