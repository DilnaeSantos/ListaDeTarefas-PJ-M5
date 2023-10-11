//import React from "react";
import styled from "styled-components"

export const StylesPgLogin = styled.body `
    background-color: #078d9c;
    display: flex;
    justify-content: center;
    align-items: center; 

    
    .containerForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        width: 50%;
        height: 140%;
        border-radius: 8%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
        
    }

    .h1 {
        margin: 6% 0% 3% 0%;
        font-size: 190%;
        color: #078d9c;
        transition: 0.2s;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .label {
        margin: 3% 0% 3% 0%;
        font-size: 170%;
        color: #078d9c;
    }

    .input{
        width: 130%;
        font-size: 150%;
    }

    .button {
        margin: 7%;
        font-size: 110%;
        background-color: #078d9c;
        padding: 3% 7%;
        border: none;
        border-radius: 50% 0%;
        color: #ffffff;
        transition: 0.2s;
    }

    .button:hover, .h1:hover {
        scale: 1.2;
    }

`