import { createGlobalStyle } from 'styled-components'

const BaseGlobalStyle = createGlobalStyle`
* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  background: #f6f7f9;
  color: #031525;
  font-family: "Century Gothic", Futura, sans-serif;
}
`

export default BaseGlobalStyle