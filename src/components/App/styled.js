import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`