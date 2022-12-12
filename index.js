import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './App';

const x=10
const display=<h1>{x==10 ? "Hello student":"Good Bye"}</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student/>);