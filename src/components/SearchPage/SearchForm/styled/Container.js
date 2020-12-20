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

  /* h2 {
    text-align: center;
    margin-top: 0;
    color: #151e8f;
    text-transform: uppercase;
    font-family: 'Zilla Slab', serif;
  } */

  /* form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    * {
      outline-color: #151e8f;
    }

    input {
      border: none;
      padding: 10px 12px;
      margin-right: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      color: #444;
      flex-grow: 1;
      font-size: 16px;

      &.year {
        max-width: 80px;

        // hide arrows
        -moz-appearance: textfield;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      // change placeholder color
      ::placeholder { 
        color: #aaa;
        opacity: 1; 
      }

      :-ms-input-placeholder { 
        color: #aaa;
      }

      ::-ms-input-placeholder { 
        color: #aaa;
      }
    }

    button {
      border: none;
      background: #c53131;
      border-radius: 5px;
      padding: 10px 20px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
    }
  } */

  @media screen and (max-width: 576px) {
    padding: 20px;
    top: 10px;
    margin: 0 10px;

    /* h2 {
      font-size: 1em;
    } */

    /* form {
      input, button {
        width: 100%;
      }

      input {
        margin-bottom: 10px;
        margin-right: 0;
        font-size: .85em;

        &.year {
          max-width: none;
        }
      }

      button {
        font-size: .8em;
      }
    } */
  }
`

export default Container