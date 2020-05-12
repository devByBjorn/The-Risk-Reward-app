import styled from 'styled-components'

const HighlightedList = styled.ul.attrs(props => ({
  display: props.display || 'flex',
  direction: props.direction,
  flexWrap: props.flexWrap || 'wrap',
  textAlign: props.textAlign || 'left',
}))`
  background: #fff;
  box-shadow: 5px 5px 20px 15px #eee; 
  border-bottom: 5px solid ${props => props.theme.colors.standOut.blue};
  border-radius: 5px;
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.flexWrap};
  list-style-type: none;
  text-align: ${props => props.textAlign};
  white-space: no-wrap;
  width: 100%;
`

export default HighlightedList