import React from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ErrorSagment = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items: center;
`
const TextColor = styled.div`
    color:white;
    font-size: 20px;
`

const Error = () => {
    return (
        <ErrorSagment>
            <TextColor>Error</TextColor>
        </ErrorSagment>
    )
}
const ErrorPage404 = ()=>{
    return(
        <ErrorSagment>
            <TextColor>404 Page Not Found</TextColor>
            <Button>
                <Link to="/">
                    go to main page
                </Link>
            </Button>
        </ErrorSagment>
    )
}

export {
    Error,
    ErrorPage404
};