import styled from 'styled-components'


export const Posts = styled.div `

    
        width: 615px;
        height: auto;
        max-width: 614px;
        max-height: 1074.5px;
        margin-bottom: 60px;
        border: 1px solid #d4d4d4;
        border-radius: 3px;
    
    header{
        display: flex;
        width: 614px;
        height: 60px;
        align-items: center;
        padding: 16px;
        background-color: #ffff;
        border-bottom: 1px solid #d4d4d4;
    }

    header div{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        margin-left: 16px;
    }
    header div .userName{
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        color: #262626;
    }

    header div span{
        position: relative;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        font-size: 20px;
        bottom: 5px;
        cursor: pointer;
    }

    .user-post {
        cursor: pointer;
    }

    .feedImg{
        width: 613px;
        height: 613px;
        max-height: 767.5;
    }

    .feedPhoto{
        width: 32px;
        height: 32px;
        border-radius: 100%;
    }

    section{
        display: flex;
        flex: 1;
        background-color: #ffff;
        padding: 5px 16px;
    }

    .flag-ico{
        position: relative;
        right: 0;
        margin-left: 80%;
    }
`