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
    border-radius: 25px;
    z-index:1;
    white-space: pre-wrap;
    background:white;
    color:black;
    opacity: 0.7;
    width:90%;
    height:80%;
  }


  .front{
    z-index:1;
    white-space: pre-wrap;
  }
  .smallFont{
    font-size:2rem;
    
  }
  .biggerFont{
    font-size:2.75rem;
  }


.row:after {
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 50%;
  padding: 10px;
}

.photo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  height:20%;
  width:80%;
}

.me{
  height:70%;
  width:100%; 
}

.onTop{
  height:20%;
  width:26%;
  background:rgba(255, 255, 255, 0.8);
  margin: 5% 0 0 10%;
  text-align:center;
  position:absolute;
}

.logo{
  height:20%;
  width:20%; 
}





  ` 