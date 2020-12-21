import styled from 'styled-components'
import { breakpoints } from '../../../common/variables'

const Input = styled.input`
  border: none;
  padding: 10px 12px;
  margin-right: 10px;
  border-radius: 5px;
  color: #444;
  flex-grow: 1;
  font-size: 16px;

  &.year {
    max-width: 80px;

    // hide arrows
    /* Firefox */
    -moz-appearance: textfield;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  // change placeholder color
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #aaa;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #aaa;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #aaa;
  }

  @media screen and (max-width: ${breakpoints[1]}) {
    width: 100%;
    font-size: .85em;
    margin-bottom: 10px;
    margin-right: 0;

    &.year {
      max-width: none;
    }
  }
`

export default Input