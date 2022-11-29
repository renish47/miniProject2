import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import PreFooter from './components/PageComponents/PreFooter';
import Footer from './components/PageComponents/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    <br/><br/>
    <PreFooter/>
    <br/><br/>
    <Footer/>
    </BrowserRouter>
    
);


