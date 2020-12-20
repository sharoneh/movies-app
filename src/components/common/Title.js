import styled from 'styled-components'

const Title = styled.h2`
  text-align: center;
  color: #151e8f;
  text-transform: uppercase;
  font-family: 'Zilla Slab', serif;

  @media screen and (max-width: 576px) {
    font-size: 1em;
  }
`

export const SearchPageTitle = styled(Title)`
  margin-top: 0;
`

export const MoviePageTitle = styled(Title)`
  margin: 0;
  color: #c53131;
`

export default Title