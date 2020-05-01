import styled from 'styled-components'

const FormContainer = styled.div.attrs(props => ({
  width: props.width || '50rem',
}))`
display: flex;
flex-direction: column;
margin: 15rem 0;
max-width: 90vw;
width: ${props => props.width};
`

export default FormContainer

