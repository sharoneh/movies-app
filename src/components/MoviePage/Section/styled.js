import styled from 'styled-components';
import { blue, floralWhite } from '../../common/variables';

export const StyledSection = styled.section`
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
`