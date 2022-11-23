import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size : 20px;
    font-family : sans-serif;
  }
  *, *::after , *::before {
    border : none;
    padding : none;
    margin : none;
    box-sizing : border-box;
    color : #000;
  }
  body {
    width : 100vw;
    height : 100vh;
    overflow-x : hidden;
    overflow-y : auto;
    position : relative;
  }
  #root {
    width : 100%;
    height : 100%;
    overflow-x : hidden;
    overflow-y : auto;
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : flex-start;
    position : relative;
    background-color : #eee;
  }
`;

export const MainLayout = styled.div`
  width: 100%;
  min-height: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

