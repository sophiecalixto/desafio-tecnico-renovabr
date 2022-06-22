import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
  }
`;
 
export default GlobalStyle;