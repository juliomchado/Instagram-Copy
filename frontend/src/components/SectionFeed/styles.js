import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    position: relative;
    margin: 0 auto;
    top: 60px;
    width: 100%;
    height: auto;
    min-height: 100vh;
    border-radius: 3px;
    max-width: 935px;

    .feed{
        display: flex;
        position: relative;
        width: 664px;
        height: auto;
        min-height: 100vh;
        margin-right: 28px;
        flex-direction: column;
        align-items: flex-start;
    }
    .personal{
        position: fixed;
        right: 13%;
        width: 293px;
        max-width: 293px;
        height: auto;
        min-height: 999px;
    }

    
`