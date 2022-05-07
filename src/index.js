import state, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter><App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/> </BrowserRouter>
        </React.StrictMode>
    );
}

reportWebVitals();

subscribe(rerenderEntireTree)

rerenderEntireTree(state);
