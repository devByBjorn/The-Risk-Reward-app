import styled from 'styled-components'

const SubHeading = styled.h3.attrs(props => ({
  fontSize: props.fontSize || '3rem',
  padding: props.padding || '1rem 0'
}))`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.theme.lineHeight.squeezed};
  padding: ${props => props.padding};
`

export { SubHeading }