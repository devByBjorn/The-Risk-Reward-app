import styled from 'styled-components'

const PageMainContainer = styled.div.attrs(props => ({
  margin: props.margin || '10rem',
  width: props.width || 'auto',
}))`
  margin: ${props => props.margin};
  min-height: 100vh;
  width: ${props => props.width};
  @media(max-width: 850px) {
    margin: 5rem 1rem;
  };
  @media(max-width: 1050px) {
    margin: 5rem 1rem;
  };
`

export default PageMainContainer