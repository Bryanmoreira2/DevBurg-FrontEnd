import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RouterProvider} from  'react-router-dom';
import GlobalStyles from './styles/globalStyles.js';
import { ToastContainer } from 'react-toastify';
import {router} from  './routes/index.jsx';
import AppProvider from './hooks';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppProvider>

        <RouterProvider router={router}/>
        <GlobalStyles />
        <ToastContainer autoClose={3000} theme='colored'/>
        </AppProvider>
    </StrictMode>,
);
