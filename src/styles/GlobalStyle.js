import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body {
    width: 100%;
    min-height: 100vh;
}

a, button {
    cursor: pointer;
}

 /* perssonalização dos scrolls */
 *::-webkit-scrollbar {
	width: 12px;
}

*::-webkit-scrollbar-track {
	background: #09b9cd;
}

*::-webkit-scrollbar-thumb {
	background-color: #f8f8f8;
	border-radius: 10px;
	border: 3px solid #f0ecec;
}

`