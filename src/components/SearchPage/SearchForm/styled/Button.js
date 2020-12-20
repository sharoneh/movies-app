import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background: #c53131;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;

  @media screen and (max-width: 576px) {
    width: 100%;
    font-size: .85em;
  }
`

export default Button