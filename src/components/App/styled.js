import styled, { createGlobalStyle } from 'styled-components'
import { darkBlue } from '../common/variables'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${darkBlue};
    
    * {
      font-family: 'Work Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
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