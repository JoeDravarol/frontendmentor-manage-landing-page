import React from 'react'
import { useWindowSize } from '../hooks'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from './Container'
import { makeStyles } from '@material-ui/core'

import backgroundPattern from '../images/bg-tablet-pattern.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'visible',
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      '&::after': {
        content: `url(${backgroundPattern})`,
        position: 'absolute',
        top: '48%',
        left: '-50%',
        bottom: 0,
        right: 0,
      },
    },
    [theme.breakpoints.up('xl')]: {
      '&::after': {
        top: '35%',
        left: '-60%'
      }
    }
  },
  box: {
    position: 'relative',
    zIndex: '5',
  },
  ul: {
    listStyleType: 'none',
    counterReset: 'service-counter',
    paddingLeft: 0,
    margin: 0
  },
  aboutTitle: {
    fontWeight: 700,
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      fontSize: '2.75em',
      maxWidth: 460,
      marginBottom: theme.spacing(3)
    }
  },
  aboutDesc: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      maxWidth: 320,
      fontSize: '1.2em'
    }
  },
  li: {
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: `${85 + theme.spacing(3)}px 1fr`,
      gridTemplateRows: '50px auto'
    }
  },
  serviceHeader: {
    counterIncrement: 'service-counter',
    borderRadius: theme.spacing(3),
    background: theme.palette.primary.light,
    width: 400,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25em',
    fontWeight: 700,
    '&::before': {
      content: 'counter(service-counter, decimal-leading-zero)',
      marginRight: theme.spacing(1.15),
      borderRadius: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
      width: 60,
      height: '100%',
      color: '#FFF',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      background: 'none',
      gridColumn: '1/3',
      width: '100%',
      height: '100%',
      fontWeight: 700,
      fontSize: '1.75em',
      '&::before': {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing(3)
      }
    }
  },
  serviceDesc: {
    gridColumn: 2,
    gridRow: 2,
    lineHeight: '1.65',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.25em'
    }
  }
}))

const ServiceHeader = ({ title }) => {
  const classes = useStyles()

  return (
    <Typography
      className={classes.serviceHeader}
      variant="h6"
      comopnent="h3"
      color="secondary"
      gutterBottom
    >
      {title}
    </Typography>
  )
}

const ServiceDesc = ({ children }) => {
  const { serviceDesc } = useStyles()

  return (
    <Typography className={serviceDesc} color="textSecondary" align="justify">
      {children}
    </Typography>
  )
}

const Services = () => {
  const classes = useStyles()
  const windowSize = useWindowSize()

  return (
    <Container
      className={classes.root}
      maxWidth={windowSize.width < 1280 ? 600 : null}
    >
      <Box className={classes.box} mb={8}>
        <Typography
          className={classes.aboutTitle}
          variant="h4"
          component="h2"
          color="secondary"
          align="center"
          gutterBottom
        >
          What’s different about Manage?
        </Typography>
        <Typography
          className={classes.aboutDesc}
          color="textSecondary"
          align="center"
        >
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </Typography>
      </Box>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <ServiceHeader title="Track company-wide progress" />
          <ServiceDesc>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </ServiceDesc>
        </li>
        <li className={classes.li}>
          <ServiceHeader title="Advanced built-in reports" />
          <ServiceDesc>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </ServiceDesc>
        </li>
        <li className={classes.li}>
          <ServiceHeader title="Everything you need in one place" />
          <ServiceDesc>
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </ServiceDesc>
        </li>
      </ul>
    </Container>
  )
}

export default Services
