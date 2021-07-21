import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.neutral.main,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(9),
    margin: '0 auto',
    minWidth: 232,
    width: '100%',
    maxWidth: 600,
    height: 250,
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      height: '100%'
    }
  },
  avatar: {
    width: 112,
    height: 112,
    position: 'absolute',
    top: '-15%',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%, -15%)',
    [theme.breakpoints.up('xl')]: {
      top: '-20%',
      transform: 'translate(-50%, -20%)'
    }
  },
  name: {
    marginBottom: theme.spacing(2)
  },
  statement: {
    [theme.breakpoints.up('xl')]: {
      maxWidth: 500,
      margin: '0 auto'
    }
  }
}))

const TestimonialDetails = ({ src, name, statement }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0} square>
      <Avatar className={classes.avatar} src={src} alt={name} />
      <Typography
        className={classes.name}
        variant="h6"
        component="h3"
        align="center"
        gutterBottom
      >
        {name}
      </Typography>
      <Typography
        className={classes.statement}
        variant="body1"
        color="textSecondary"
        align="center"
        paragraph
      >
        “{statement}”
      </Typography>
    </Paper>
  )
}

export default TestimonialDetails
