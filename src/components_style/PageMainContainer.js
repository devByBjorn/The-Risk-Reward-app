import styled from 'styled-components'

const PageMainContainer = styled.div.attrs(props => ({
  height: props.height || '100vh',
  margin: props.margin || '10rem',
  mobileMargin: props.mobileMargin || '2rem 1.5rem',
  overflowY: props.overflowY,
  width: props.width || 'auto',
}))`
  margin: ${props => props.margin};
  height: ${props => props.height};
  overflow-y: ${props => props.overflowY};
  width: ${props => props.width};
  @media(max-width: 1050px) {
    margin: 10rem 1.5rem;
  };
  @media(max-width: 850px) {
    margin: ${props => props.mobileMargin};
  };
  @media(max-height: 500px) {
    margin: 5rem 3rem;
  };
`

export default PageMainContainer