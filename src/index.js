import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7Wz5lOVLcqmfQxBFtqf_uwyElH3GoItk",
    authDomain: "chat-react-dcdce.firebaseapp.com",
    projectId: "chat-react-dcdce",
    storageBucket: "chat-react-dcdce.appspot.com",
    messagingSenderId: "817208636060",
    appId: "1:817208636060:web:c7033867a12972b6567359",
    measurementId: "G-XYV8M2ELR5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
