import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #222;
    --grey: #dedede;
    --red: #ff0000;
  }
  
  html {
    font-size: 14px;
  }

  body {
    font-size: 1rem;
  }
`

export default GlobalStyles
