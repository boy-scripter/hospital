
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  Verdana, Geneva, Tahoma, sans-serif;
    }
    
    html,body{
        width: 100%;
        height: 100%;
    }

    .btn{
        border-radius: 20px;
        padding:7px 25px;
        font-family:inherit;
        cursor: pointer;
        display: inline-block;
        outline: none;
        font-size: 16px;
        border: none;
    }

    .btn:is(:hover){
        background-color: white;
        color: blue;
        box-shadow: 0px 0px 5px blue;
    }

    .blue{
        color: white;
        background-color: blue;
    }

    .flex{
        display: flex;
    }

    .justify-between{
        justify-content: space-between;
    }

    .justify-center{
        justify-content: center;
    }
    .align-center{
        align-items: center;
    }
`

export default GlobalStyle