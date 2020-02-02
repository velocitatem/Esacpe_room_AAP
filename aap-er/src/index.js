import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
//importing elements
import Header from './Components/Header/header';
import About from './Components/About/about';
import Register from './Components/Reservation/reserve';
//stylying pages
const AAP = styled.div`
background-color: black;
`
ReactDOM.render(
    <AAP>
        <Header />
        <About />
        <Register />
    </AAP> ,
    
    document.getElementById('root'));

serviceWorker.unregister();
