import styled from 'styled-components'

const ImgContainer = styled.div`
  height: 100px;
  width: 70px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
  }

  @media screen and (max-width: 576px) {
    height: 75px;
    width: 52px;
  }
`

export default ImgContainer