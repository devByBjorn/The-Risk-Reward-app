import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    main: {
      light: '#fafafa',
      dark: '#031525',
      red: '#d93025',
      darkblue: '#1d3adf',
    },
    standOut: {
      pink: '#f50057',
      blue: '#3f51b5',
    },
    general: {
      light: '#fff',
      lightDark: "#eee",
      lightDarker: "#e0e0e0"
    },
  },
  fontSize: {
    small: '1.2rem',
    medium: '2rem',
    large: '3rem',
    xl: '5rem',
  },
  lineHeight: {
    squeezed: 1,
    normal: 1.2,
    expanded: 1.5,
  },
  padding: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
  mobileMargin: {
    small: '20% 1.5rem',
    medium: '30% 1.5rem',
    large: '40% 1.5rem',
    xl: '50% 1.5rem',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme