//import React from "react";
import styled from "styled-components"

export const StylesHeader = styled.header `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    border-bottom: solid #00000024;

    .tituloLogo {
        margin: 1% 5%;
        color: #078d9c;
        font-size: 250%;
        transition: 0.2s;
    }

    .nav {
        width: 30%;
        margin: 1% 0%;
        font-size: 140%;
    }

    .linkComeceGratis {
        margin-right: 15%;
        font-size: 70%;
        background-color: #078d9c;
        padding: 3% 7%;
        border: none;
        border-radius: 50% 0%;
        color: #ffffff;
        transition: 0.2s;
    }

    .linkLogin {
        color: #078d9c;
        transition: 0.2s;
    }

    .linkComeceGratis:hover, .tituloLogo:hover, .linkLogin:hover, m {
        scale: 1.1;
    }

`