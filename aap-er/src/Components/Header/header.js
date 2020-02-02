import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
text-align: center;
font-family: 'Sigmar One', cursive;
color: #8a0303;
border-style: solid;
border-color: black;
border-width: 2cm;
border-top-width: 0.3cm;
border-bottom-color: white;
border-bottom-width: 0.02cm;

`
const SEp = styled.hr`
`
const Title = styled.h1``
function header() {
    return (
        <Head>
            <Title>AAP Escape Room</Title>
            <SEp></SEp>
        </Head>
    )

}
export default header;