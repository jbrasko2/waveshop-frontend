import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    button {
        color: #c01a1a;
        background: white;
        border: 3px solid #c01a1a;
        padding: 12px 24px;
        text-align: center;
        text-decoration: none;
        margin: 10px;
        transition-duration: 0.4s;
        font-weight: 600;
        font-size: large;
    }

    button:hover {
        color: white;
        background: #c01a1a;
        border-color: white;
    }

    button:active {
        background: #9b1515;
    }

    textarea {
        resize: none;
        width: 300px;
        height: 100px;
        font-family: 'Roboto', sans-serif;
    }

    @-webkit-keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    }
}
    @keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .loader {
        font-size: 10px;
        margin: 50px auto;
        text-indent: -9999em;
        width: 11em;
        height: 11em;
        border-radius: 50%;
        background: #f50000;
        background: -moz-linear-gradient(left, #f50000 10%, rgba(245,0,0, 0) 42%);
        background: -webkit-linear-gradient(left, #f50000 10%, rgba(245,0,0, 0) 42%);
        background: -o-linear-gradient(left, #f50000 10%, rgba(245,0,0, 0) 42%);
        background: -ms-linear-gradient(left, #f50000 10%, rgba(245,0,0, 0) 42%);
        background: linear-gradient(to right, #f50000 10%, rgba(245,0,0, 0) 42%);
        position: relative;
        -webkit-animation: load3 1.4s infinite linear;
        animation: load3 1.4s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }
    .loader:before {
        width: 50%;
        height: 50%;
        background: #f50000;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
    .loader:after {
        background: #ffffff;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`

export default GlobalStyles