import React from 'react'
import { default as MuiContainer } from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: ({ maxWidth }) => maxWidth || 1200,
    [theme.breakpoints.up('xl')]: {
      maxWidth: () => 1400
    }
  }
}))

const Container = ({ children, className, ...props }) => {
  const { root } = useStyles(props)

  return (
    <MuiContainer
      className={`${root} ${className}`}
      {...props}
      maxWidth={false}
    >
      {children}
    </MuiContainer>
  )
}

export default Container
