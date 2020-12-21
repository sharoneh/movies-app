import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../../../common/variables'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  transition: ease .3s;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: calc(100% - 40px);
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 20px;
    bottom: 0;
    opacity: .1;
    transition: ease .3s;
  }

  &:last-child:after {
    content: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, .2);
    transition: ease .3s;

    &:after {
      opacity: 0;
      transition: ease .3s;
    }
  }

  @media screen and (max-width: ${breakpoints[1]}) {
    border-radius: 0;
  }
`

export default StyledLink