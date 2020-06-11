import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 77px;
    background-color: #f5f5f5;
    padding-left: 13%;
    padding-right: 13%;
    width: 100vw;
    min-height: 100vh;
    height: auto;
    overflow: hidden;

    @media (max-width: 1000px){
        padding: 0;
        
    }

`