import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Montserrat', sans-serif;
  background-color:RGB(249,250,252);
}
h1, h2, h3{
  font-family: 'Dancing Script', cursive;
}
a{
  text-decoration:none;
  color: black
}`;

export default GlobalStyle;
