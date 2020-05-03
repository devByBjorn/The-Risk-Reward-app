import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`

const LoaderCircle = () => (
  <Div
    alignItmes="center"
    height="95vh"
  >
    <CircularProgress />
  </Div>
)

export default LoaderCircle