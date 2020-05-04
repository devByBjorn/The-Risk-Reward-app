import styled from 'styled-components'

const HorizontalLine = styled.div.attrs(props => ({
  background: props.background || '#eee'
}))`
  background: ${props => props.background};
  height: 2px;
  width: 100%;
`

const VerticalLine = styled.div.attrs(props => ({
  background: props.background || '#eee'
}))`
  background: ${props => props.background};
  height: 100%;
  width: 2px;
`

export { HorizontalLine, VerticalLine }