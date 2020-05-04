import styled from 'styled-components'

const Span = styled.span.attrs(props => ({
  color: props.color || 'inherit',
  display: props.display || 'block',
  fontSize: props.fontSize || 'inherit',
  fontWeight: props.fontWeight || 'normal',
  textTransform: props.textTransform || 'none'
}))`
  color: ${props => props.color};
  display: ${props => props.display};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
`

export default Span 