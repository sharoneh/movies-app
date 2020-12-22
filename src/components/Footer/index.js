import { StyledFooter } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        This app uses <a href="http://www.omdbapi.com">OMDb API</a>.
      </p>
      <p>
        Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
      </p>
    </StyledFooter>
  );
}

export default Footer;