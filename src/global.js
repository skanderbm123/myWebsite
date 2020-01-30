import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
   
  }

  .particles {
    position : absolute;
    width:100%;
    height:100%;
    z-index:-1.0;
  }

  .main {
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    height: 100vh;
    justify-content: center; 
  }

  .project{
    z-index:1;
    white-space: pre-wrap;
    background:white;
    color:black;
    opacity: 0.7;
    width:90%;
    height:70%;
  }


  .front{
    z-index:1;
    white-space: pre-wrap;
  }
  .smallFont{
    font-size:1.75rem;
    
  }
  .biggerFont{
    font-size:2.5rem;
  }




  ` 