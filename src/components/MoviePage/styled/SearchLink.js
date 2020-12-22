import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { orange, breakpoints } from '../../common/variables'

const SearchLink = styled(Link)`
  position: absolute;
  left: 20px;
  display: flex;
  outline-color: ${orange};

  &:before {
    content: '';
    mask-image: url('../assets/left-arrow.svg');
    background-color: ${orange};
    display: block;
    height: 20px;
    width: 20px;
    transition: ease .3s;
  }

  &:hover:before {
    opacity: .6;
    transition: ease .3s;
  }

  @media screen and (max-width: ${breakpoints[1]}) {
    left: 10px;
    
    &:before {
      height: 15px;
      width: 15px;
    }
  }
`

export default SearchLink