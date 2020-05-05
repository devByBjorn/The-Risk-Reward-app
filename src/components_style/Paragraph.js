import styled from 'styled-components'

const Paragraph = styled.p.attrs(props => ({
  fontSize: props.fontSize || '1.6rem',
  lineHeight: props.lineHeight || 1.2,
}))`
  font-size: ${props => props.fontSize};
  margin: 1rem 0;
  line-height: ${props => props.lineHeight};
`

export default Paragraph