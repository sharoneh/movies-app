import styled from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .search-page {
    position: relative;
    padding: 20px;

    &:before {
      content: '';
      display: block;
      height: 20px;
      background-color: #181724;
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1;
    }

    @media screen and (max-width: 576px) {
      padding: 0;
    }
  }
`