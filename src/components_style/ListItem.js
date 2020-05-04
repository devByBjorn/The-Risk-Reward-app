import styled from 'styled-components'

const ListItem = styled.li.attrs(props => ({
  borderTop: props.borderTop,
  borderBottom: props.borderBottom,
  borderLeft: props.borderLeft,
  borderRight: props.borderRight,
  flex: props.flex || 1,
  padding: props.padding || '1rem'
}))`
  flex: ${props => props.flex};
  padding: ${props => props.padding};
  border-bottom: ${props => props.borderBottom};
  border-top: ${props => props.borderTop};
  border-left: ${props => props.borderLeft};
  border-right: ${props => props.borderRight};
`

export default ListItem