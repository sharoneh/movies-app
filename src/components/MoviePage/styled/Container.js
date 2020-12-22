import styled from 'styled-components'
import { lightGrey, breakpoints } from '../../common/variables'

const Container = styled.div`
  padding: 0 20px 0;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  ${props => props.notFound ? `
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      outline-color: white;
      text-decoration: none;
      
      button {
        color: white;
      }
    }
  `: ''}

  * {
    color: ${lightGrey};
  }

  .movie-content {
    display: flex;
    justify-content: center;

    .side-container img {
      position: sticky;
      top: 105px;
      z-index: 1;
      min-height: 235px;
      max-height: 65vh;
    }

    .movie-data {
      padding: 20px 0 0 20px;
      display: flex;
      flex-direction: column;
      overflow: auto;
      flex-grow: 1;

      p.plot {
        margin: 0;
        margin-bottom: 40px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints[0]}) {
    margin-top: 20px;

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
          max-width: 100%;
        }
      }

      .movie-data {
        max-height: none;
        padding: 0;
      }
    }
  }
`

export default Container