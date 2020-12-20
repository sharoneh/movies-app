import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #181724;
    
    * {
      font-family: 'Work Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    #root {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
`

export default GlobalStyle