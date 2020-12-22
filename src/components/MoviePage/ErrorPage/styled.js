import styled from 'styled-components';
import Title from '../../common/Title';
import { lightGrey } from '../../common/variables';

export const ErrorTitle = styled(Title)`
  color: ${lightGrey};
  margin: 0 0 20px;

  ${props => props.secondary ? `
    font-weight: normal;
    margin: 0;
  ` : ''}
`