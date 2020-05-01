import styled from 'styled-components'

const ListItem = styled.li.attrs(props => ({
  padding: props.padding || '1rem 0'
}))`
  padding: ${props => props.padding};
`

export default ListItem