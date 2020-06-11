import styled from 'styled-components'


export const Posts = styled.div`

    
        width: 615px;
        height: auto;
        max-width: 614px;
        max-height: 1074.5px;
        border: 1px solid #d4d4d4;
        border-radius: 3px;
        margin-bottom: 60px;

    .text{
        flex-wrap: wrap;
        margin-left: 5px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #262626;
    }

    .userName{
        color: #262626;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        outline: none;
    }
    
    header{
        display: flex;
        width: 613px;
        height: 60px;
        align-items: center;
        padding: 16px;
        background-color: #ffff;
        border-bottom: 1px solid #d4d4d4;
        border-right: 1px solid #d4d4d4;
    }

    header div{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        margin-left: 16px;
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
        height: 195px;
        flex-direction: column;
        background-color: #ffff;
        padding: 5px 16px;
    }

    
    section .icons-post{
        display: flex;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
    }

    section .likes{
        color: #262626;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        outline: none;
        margin-bottom: 4px;
    }

    section .icons-post .flag-ico{
        position: relative;
        right: 0;
        margin-left: 80%;
    }

    section .textDiv{
        display: flex;
        margin-bottom: 4px;
    }

    section .qnt-commentsDiv{
        margin-bottom: 4px;
    }

    section .qnt-commentsDiv .qnt-comments{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #8e8e8e;
        font-weight: 400;
        font-size: 14px;
    }

    section .commentDiv{
        display: flex;
        margin-bottom: 4px;
    }

    section time {
        color: #8e8e8e;
        font-size: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 4px;
    }
    

    section hr{
        width: 100%;
    }
    
    form{
        display: flex;
        align-items: center;
        position: relative;
        left: 0;
        width: 614px;
        height: 56px;
        border-top: 1px solid #d4d4d4;
        border-bottom: 1px solid #d4d4d4;
        border-right: 1px solid #d4d4d4;
        background-color: #ffff;
        padding: 0 13px;
    }

     form input{
         width: 90%;
        border: none;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        
    }

     form input::placeholder{
        border: none;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #d4d4d4;
        font-weight: 500;
        font-size: 14px;
    }

    form .buttonActive{
        position: absolute;
        right: 13px;
        border: none;
        background-color: #fff;
        color: #0095f6;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 500;
        outline: none;
        cursor: pointer;
    }

    form .buttonDesactive{
        position: absolute;
        right: 13px;
        border: none;
        background-color: #fff;
        color: #0095f6;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 500;
        outline: none;
        opacity: 50%;        
    }
`