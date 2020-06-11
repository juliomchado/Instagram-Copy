import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 1000;
    height: 77px;
    border-bottom: 1px solid #d4d4d4;
    background-color: #ffff;
    padding-left: 13%;
    padding-right: 13%;

    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 975px;
        padding: 26px 20px;
        height: 100%;
        margin: 0 auto;
       
    }

    .content .logo-div{
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .logo-div hr{
        border: 1px solid #222222;
        height: 28px;
        width: 1px;
        margin: 0 16px;
        cursor: pointer;
    }


    .content .logo-div .logo{
       position: relative;
       cursor: pointer;
       top: 5px;
       height: 30px;
       filter: brightness(40%)
    }
    .content .logo-div:active .logo,
    .content .logo-div:active hr,
    .content .logo-div:active .insta-icon{

       filter: brightness(330%)
    }

    .content .input-div{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 215px;
        height: 28px;
        border-radius: 3px;
        border: 1px solid #d2d4d4;
        color: #d4d4d4;
        background-color: #fafafa;
        border-radius: 3px;
    }
    .content .input-div input{
        display: flex;
        border:none;
        text-align: center;
        width: 100%;
        outline:none;
        color: rgb(59, 59, 59);
        max-width: 100%;
        overflow: hidden;

    }
     .content .input-div .search-icon{
        position:relative;
        width: 11px;
        height: 11px;
        left: 30%;
        color: #a8a8a8;
        margin-right: 5px;
     }

    .content .input-div input:focus{
        display: flex;
        border:none;
        text-align: center;
        width: 100%;
        height: 100%;
        outline:none;
        text-align: left;
    }
    .search-active {
        width: 13px;
        height: 13px;
        left: 10%;
        color: #a8a8a8;
        margin-right: 5px;
        margin-left: 5px;
    }
    .icons-div{
        display:flex;
        justify-content: space-between;
        width: 210px;
    }

    .close-icon{
        position: relative;
        right: 10px;
        width: 16px;
        height: 16px;
        opacity: 0;
    }
    .close-icon.active{
        opacity: 1;
    }

    @media (max-width: 884px){
        .content .input-div,
        .content .input-div input,
        .content .input-div .search-icon
        {
            display: none;
        }
    }
`
