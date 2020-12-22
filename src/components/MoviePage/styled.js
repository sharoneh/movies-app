import styled from 'styled-components'
import Title from '../common/Title'
import { blue, lightGrey, orange, floralWhite, breakpoints } from '../common/variables'

export const Header = styled.header`
  background-color: ${floralWhite};
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  padding: 1em;
  position: sticky;
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
    color: ${orange};
  }

  @media screen and (max-width: ${breakpoints[1]}) {
    padding: .8em;

    h3 {
      font-size: 1em;
    }
  }
`

export const Container = styled.div`
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

      section {
        margin-top: 20px;

        &:first-of-type {
          margin-top: 0;
        }

        h3 {
          font-family: 'Zilla Slab', serif;
          text-transform: uppercase;
          background-color: ${floralWhite};
          color: ${blue};
          padding: 5px 15px;
          margin: 0;
          border-radius: 5px;
        }
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

export const MoviePageTitle = styled(Title)`
  margin: 0;
  color: ${orange};

  @media screen and (max-width: ${breakpoints[1]}) {
    font-size: 1.2em;
  }
`