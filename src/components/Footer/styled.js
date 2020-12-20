import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 10px 20px;
  background-color: #101018;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  z-index: 2;
  width: 100%;

  p, a {
    color: #999;
    margin: 0;
  }

  @media screen and (max-width: 576px) {
    p, a {
      font-size: .8em;
    }
  }
`