import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import Nav from './Nav'

const theme = createTheme({
  palette: {
    primary: {
      light: 'hsl(13, 100%, 96%)',
      main: 'hsl(12, 88%, 59%)'
    },
    secondary: {
      light: 'hsl(227, 12%, 61%)',
      main: 'hsl(228, 39%, 23%)',
      dark: 'hsl(233, 12%, 13%)'
    },
    neutral: {
      main: 'hsl(0, 0%, 98%)'
    },
    text: {
      primary: 'hsl(233, 12%, 13%)',
      secondary: 'hsl(227, 12%, 61%)',
    }
  },
  typography: {
    fontFamily: 'Be Vietnam'
  }
})

const styles = {
  backgroundColor: '#FFF',
  overflow: 'hidden'
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Box style={styles}>{children}</Box>
    </ThemeProvider>
  )
}

export default Layout