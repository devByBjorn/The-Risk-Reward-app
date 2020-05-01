import styled from 'styled-components'

const Span = styled.span.attrs(props => ({
  display: props.display || 'normal',
  fontSize: props.fontSize || 'inherit',
  fontWeight: props.fontWeight || 'normal',
  textTransform: props.textTransform || 'normal'
}))`
  display: ${props => props.display};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
`

export default Span 