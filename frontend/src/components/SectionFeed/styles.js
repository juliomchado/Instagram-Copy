import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    top: 60px;
    width: 100%;
    height: auto;
    min-height: 100vh;
    max-width: 935px;
    
    
    .instaName{
       color: #262626;
       font-weight: 500;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       font-size: 14px;
       outline: none;
   }
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
        right: calc(62% - 664px);
        top: 150px;
        width: 293px;
        max-width: 293px;
        height: auto;
        min-height: 999px;
    }

    .userInfos{
        display: flex;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 8px;
        width: 293px;
        height: 56px;
    }
    .userInfos figure  {
        height: 56px;
        width: 56px;
    }
    .userInfos figure img {
        height: 56px;
        width: 56px;
        border-radius: 100%;
    }

    .personal-infos{
        display: flex;
        flex-direction: column;
        width: 78px;
        height: 34px;

        margin-left: 15px;
    }
    .personal-infos .userName{
        color: #8e8e8e;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 4px;
    }

    .suggestionDiv{
        overflow: hidden;
        width: 325px;
        height: 291px;

    }

    .suggestionDiv .label{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        margin-bottom: 8px;
    }
    .suggestionDiv .users{
        display: flex;
        flex: 1;
        width: 321px;
        height: 48px;
        padding: 8px 16px;
    }
    .suggestionDiv .users .suggestionImg{
        height: 32px;
        width: 32px;
        border-radius: 100%;
    }
    .suggestionDiv .users .suggestion-names {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .suggestionDiv .label{
        margin-right: 10px;
    }
    .suggestionDiv .label label{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #8e8e8e;
    }
    .suggestionDiv .label .label-link{
        position: relative;
        right: 24px;
        color: #262626;
       font-weight: 500;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       font-size: 12px;
       outline: none;
    }

    .suggestionDiv .users .suggestion-names .suggestion-label{ 
        color: #8e8e8e;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 4px;
        font-weight: 400;

    }

    .suggestionDiv .users button{
        position: absolute;
        right: 0px;
        border: none;
        background-color: transparent;
        color: #0095f6;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        font-weight: 500;
        outline: none;
        cursor: pointer;
        margin-top: 6px;
    }
    
    @media (max-width: 1080px){
        .personal{
            display: none;
        }
        .feed{
            display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`