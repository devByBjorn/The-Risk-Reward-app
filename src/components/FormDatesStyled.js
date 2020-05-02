import styled from 'styled-components'

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 1.5rem 0;
  @media(max-width: 850px) {
      flex-direction: column;
    };
`
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  @media(max-width: 850px) {
    padding: 1rem 5rem;
  }
`

const DateSingleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export { DateContainer, DateWrapper, DateSingleWrapper }