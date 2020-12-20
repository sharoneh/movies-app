import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 10px;

  p, a {
    color: #e8e8e8;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>This app uses <a href="http://www.omdbapi.com">OMDb API</a>.</p>
    </StyledFooter>
  );
}

export default Footer;