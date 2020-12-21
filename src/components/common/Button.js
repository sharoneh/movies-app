import styled from 'styled-components'
import { breakpoints, orange } from './variables'

const Button = styled.button`
  border: none;
  background: ${orange};
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  font-family: 'Zilla Slab', serif;
  cursor: pointer;
  transition: ease .3s;

  &:hover,
  &:disabled {
    opacity: .8;
    transition: ease .3s;
  }

  &:disabled {
    cursor: default;
  }

  @media screen and (max-width: ${breakpoints[1]}) {
    width: 100%;
    font-size: .85em;
  }
`

export default Button