import styled from 'styled-components'

const ListU = styled.ul.attrs(props => ({
  border: props.border || 'none',
  borderBottom: props.borderBottom || 'none',
  borderTop: props.borderTop || 'none',
  padding: props.padding || '1rem 0',
  type: props.type || 'none',
}))`
  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  border-top: ${props => props.borderTop};
  list-style-type: ${props => props.type};
  padding: ${props => props.padding}
`

export default ListU