import styled from 'styled-components'

const FlexContainer = styled.div.attrs(props => ({
  direction: props.direction || 'row',
  justifyContent: props.justifyContent || 'center',
  alignItems: props.alignItems || 'start',
  border: props.border || 'none',
  borderBottom: props.borderBottom || 'none',
  borderTop: props.borderTop || 'none',
  boxShadow: props.boxShadow || 'none',
  height: props.height || '100%',
  width: props.width || '100%',
  maxWidth: props.maxWidth || '100rem',
  padding: props.padding || '1rem',
}))`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  border-top: ${props => props.borderTop};
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  padding: ${props => props.padding};
  @media(max-width: 850px) {
    flex-direction:column;
  }
`

export default FlexContainer