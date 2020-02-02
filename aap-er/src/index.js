import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
//importing elements
import Header from './Components/Header/header';

//stylying pages
const AAP = styled.div`
background-color: black;
font-family: 'Sigmar One', cursive;
color: #8a0303;
`
ReactDOM.render(
    <AAP>
        <Header />
    </AAP> ,
    
    document.getElementById('root'));

serviceWorker.unregister();
