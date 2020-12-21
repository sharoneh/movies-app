import styled from 'styled-components'
import { blue } from '../../../common/variables'

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  * {
    outline-color: ${blue};
  }
`

export default Form