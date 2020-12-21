import styled from 'styled-components'
import { breakpoints, floralWhite } from '../../../common/variables'

const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  padding: 40px 40px 30px;
  border-radius: 10px;
  background-color: ${floralWhite};
  position: relative;
  z-index: 2;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${breakpoints[1]}) {
    padding: 20px;
    top: 10px;
    margin: 0 10px;
  }
`

export default Container