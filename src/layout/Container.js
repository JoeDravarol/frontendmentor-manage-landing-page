import React from 'react'
import { default as MuiContainer } from '@material-ui/core/Container'

const styles = {
  maxWidth: 1600
}

const Container = ({ children, ...rest }) => {
  return (
    <MuiContainer style={styles} {...rest}>
      {children}
    </MuiContainer>
  )
} 

export default Container
