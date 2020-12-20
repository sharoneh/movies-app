import styled from 'styled-components'

export const Header = styled.header`
  background-color: floralwhite;
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;

  h3 {
    font-weight: normal;
    font-family: 'Zilla Slab', serif;
    text-transform: none;
    text-align: center;
    margin: 0;
    color: #c53131;

    @media screen and (max-width: 576px) {
      font-size: 1em;
    }
  }
`

export const Container = styled.div`
  padding: 0 20px 0;
  max-width: 900px;
  margin: 85px auto 0;

  * {
    color: #999;
  }

  .movie-content {
    display: flex;
    justify-content: center;
    
    .side-container img,
    .movie-data {
      max-height: calc(100vh - 165px);
    }

    .side-container img {
      position: sticky;
      top: 120px;
      z-index: 1;
      min-height: 235px;
    }

    .movie-data {
      padding: 40px 20px 0;
      display: flex;
      flex-direction: column;
      overflow: auto;

      p.plot {
        margin: 0;
        margin-bottom: 40px;
      }

      section {
        margin-top: 20px;

        &:first-of-type {
          margin-top: 0;
        }

        h3 {
          font-family: 'Zilla Slab', serif;
          text-transform: uppercase;
          background-color: floralwhite;
          color: #151e8f;
          padding: 5px 15px;
          margin: 0;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 70px;

    p, li {
      font-size: .9em;
    }

    .movie-content {
      flex-direction: column;
      
      .side-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        img {
          position: static;
        }
      }

      .movie-data {
        max-height: none;
        padding: 0;
      }
    }
  }
`