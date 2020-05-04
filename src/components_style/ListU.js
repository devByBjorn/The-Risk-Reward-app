import styled from 'styled-components'

const ListU = styled.ul.attrs(props => ({
  background: props.background || 'transparent',
  border: props.border || 'none',
  borderBottom: props.borderBottom || 'none',
  borderTop: props.borderTop || 'none',
  display: props.display || 'flex',
  direction: props.direction,
  flexWrap: props.flexWrap || 'wrap',
  padding: props.padding || '1rem 0',
  textAlign: props.textAlign || 'left',
  type: props.type || 'none',
}))`
  background: ${props => props.background};
  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  border-top: ${props => props.borderTop};
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.flexWrap};
  list-style-type: ${props => props.type};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
  white-space: no-wrap;
  width: 100%;
`

export default ListU