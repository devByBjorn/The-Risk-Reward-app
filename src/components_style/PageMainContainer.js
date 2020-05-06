import styled from 'styled-components'

const PageMainContainer = styled.div.attrs(props => ({
  margin: props.margin || '10rem',
  width: props.width || 'auto',
}))`
  margin: ${props => props.margin};
  min-height: 100vh;
  width: ${props => props.width};
  @media(max-width: 1050px) {
    margin: 10rem 1.5rem;
  };
  @media(max-width: 850px) {
    margin: 2rem 1.5rem;
  };
  @media(max-height: 500px) {
    margin: 5rem 3rem;
  };
`

export default PageMainContainer