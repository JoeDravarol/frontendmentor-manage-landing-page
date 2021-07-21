import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: theme.spacing(3),
    padding: '.55em 2em',
    textTransform: 'capitalize',
    fontSize: '1.2em'
  }
}))

const CtaButton = ({ label, className, ...props }) => {
  const classes = useStyles()

  return (
    <Button
      className={`${classes.button} ${className}`}
      variant="contained"
      color="primary"
      disableElevation
      {...props}
    >
      {label}
    </Button>
  )
}

export default CtaButton
