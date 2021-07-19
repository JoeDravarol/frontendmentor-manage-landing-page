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

const CtaButton = ({ label }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.button}
      variant='contained'
      color='primary'
      disableElevation
    >
      {label}
    </Button>
  )
}

export default CtaButton
