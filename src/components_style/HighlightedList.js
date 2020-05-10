import styled from 'styled-components'

const HighlightedList = styled.ul.attrs(props => ({
  display: props.display || 'flex',
  direction: props.direction,
  flexWrap: props.flexWrap || 'wrap',
  textAlign: props.textAlign || 'left',
}))`
  background: #eee;
  border: 1px solid #e0e0e0;
  border-bottom: 5px solid ${props => props.theme.colors.standOut.blue};
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.flexWrap};
  list-style-type: none;
  text-align: ${props => props.textAlign};
  white-space: no-wrap;
  width: 100%;
`

export default HighlightedList