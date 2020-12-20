import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  padding: 40px 40px 30px;
  border-radius: 10px;
  background-color: floralwhite;
  position: relative;
  z-index: 2;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding: 20px;
    top: 10px;
    margin: 0 10px;
  }
`

export default Container