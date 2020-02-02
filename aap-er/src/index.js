import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
//importing elements


//stylying pages
const AAP = styled.div`
background-color: black;
`
ReactDOM.render(
    <AAP>

    </AAP> ,
    
    document.getElementById('root'));

serviceWorker.unregister();
