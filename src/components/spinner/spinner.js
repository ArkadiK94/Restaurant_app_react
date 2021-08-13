import React from 'react';
import styled from 'styled-components';

const SpinnerDiv = styled.div`
    height:100vh;
    color:white;
    font-size: 20px;
`

const Spinner = () => {
    return <SpinnerDiv className="spinner">loading...</SpinnerDiv>
}

export default Spinner;