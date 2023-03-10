import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Biz from '../src/components/Biz/Biz'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='Biz' element={<Biz />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);