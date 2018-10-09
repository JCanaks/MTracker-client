import React from "react";
import { hot } from "react-hot-loader";
import { Route } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';

const App = () => (
  <div>
    <Route component={Header} />
    <Main />
    <Footer />
  </div>
);

export default App;
