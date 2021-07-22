import React from 'react'

import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#FFF',
    textTransform: 'capitalize',
    fontSize: '1.25em',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  }
}))

const FooterNavigation = ({ links }) => {
  const classes = useStyles()
  const preventDefault = (event) => event.preventDefault()

  return (
    <>
      {links.map((link) => (
        <Typography key={'footer-' + link} gutterBottom>
          <Link className={classes.link} href="#" onClick={preventDefault}>
            {link}
          </Link>
        </Typography>
      ))}
    </>
  )
}

export default FooterNavigation
