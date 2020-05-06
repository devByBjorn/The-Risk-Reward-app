import styled from 'styled-components'

const FlexContainer = styled.div.attrs(props => ({
  direction: props.direction,
  alignItems: props.alignItems,
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  mobileDirection: props.mobileDirection,
}))`
  display: flex;
  flex: 1;
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  @media(max-width: 850px) {
    flex-direction: ${props => props.mobileDirection}
  }
`

export default FlexContainer