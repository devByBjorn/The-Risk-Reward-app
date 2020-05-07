import styled from 'styled-components'

const Paragraph = styled.p.attrs(props => ({
  fontSize: props.fontSize || '1.6rem',
  lineHeight: props.theme.lineHeight.expanded || 1.2,
}))`
  font-size: ${props => props.fontSize};
  margin: 0 0 2rem 0;
  line-height: ${props => props.lineHeight};
`

export default Paragraph