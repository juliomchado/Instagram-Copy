import styled from 'styled-components'



export const Story = styled.div`

    .storyDiv{
        display: flex;
        justify-content: flex-start;
        width: 614px;
        max-width: 614px;
        height: 116px;
        border: 1px solid #d4d4d4;
        background-color: #ffff;
        padding: 16px 0 16px 16px;
        margin-bottom: 24px;
        overflow: hidden;  
    }

    label{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        color: #262626;
    }


    .person-story{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 80px;
        margin: 0 8px;
    }

    .person-story label{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
    }

    .personal{
        position: fixed;
        right: 13%;
        width: 293px;
        max-width: 293px;
        height: auto;
        min-height: 999px;
        background-color: #000;
    }

    .storyFigure{
        display: flex;
        justify-content: center;
        align-items:center;
        width: 63px;
        height: 63px;
        border-radius: 100%;
        overflow: hidden;
        background-color: #ffff;
        border: 2px solid #ff2137;
        border-color: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }

    .storyFigure .storyImg{
    width: 56px;
    height: 56px;
    border-radius: 100%;
    
    }
        `