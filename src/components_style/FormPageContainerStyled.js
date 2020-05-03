import styled from 'styled-components'

const FormPageContainer = styled.div.attrs(props => ({
  alignItems: props.alignItems || 'start'
}))`
display: flex;
justify-content: center;
align-items: ${props => props.alignItems};
position: relative;
background: #fff;
border-left: 1px solid #eee;
border-right: 1px solid #eee;
max-width: 100vw;
min-height: 100vh;
width: 150rem;
margin: 0 auto;
`

export default FormPageContainer