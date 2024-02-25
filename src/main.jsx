import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Context from './Components/Context';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
 <Context>
 <App />
 </Context>
   
  </BrowserRouter>
);
