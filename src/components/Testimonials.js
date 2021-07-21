import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'

import Container from '../layout/Container'
import CtaButton from './CtaButton'
import TestimonialDetails from './TestimonialDetails'

import { useWindowSize } from '../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 500,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  carousel: {
    overflow: 'visible',
    height: 270
  },
  title: {
    height: 145,
    fontWeight: 700
  },
  indicator: {
    color: 'hsl(0, 0%, 98%)',
    backgroundColor: 'hsl(12, 88%, 59%)',
    '&:hover': {
      color: 'hsl(12, 88%, 59%)',
      backgroundColor: 'hsl(12, 88%, 59%)'
    },
    margin: '1.5em 3px',
    position: 'relative'
  },
  activeIndicator: {
    color: 'hsl(12, 88%, 59%)'
  },
  ctaButton: {
    display: 'block',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

const Testimonials = ({ testimonials }) => {
  const windowSize = useWindowSize()
  const [mobileView, setMobileView] = useState()
  const classes = useStyles()

  useEffect(() => {
    if (windowSize.width < 1280) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }, [windowSize])

  const displayMobile = () => {
    return (
      <Container>
        <Carousel
          className={classes.carousel}
          animation="slide"
          timeout={500}
          navButtonsAlwaysInvisible
          indicatorIconButtonProps={{
            className: classes.indicator
          }}
          activeIndicatorIconButtonProps={{
            className: classes.activeIndicator
          }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialDetails
              key={'testimonial' + testimonial.id}
              src={testimonial.img}
              name={testimonial.name}
              statement={testimonial.statement}
            />
          ))}
        </Carousel>
      </Container>
    )
  }

  const displayDesktop = () => {
    return (
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {testimonials.map((testimonial) => (
          <Grid key={'testimonial' + testimonial.id} item lg={4}>
            <TestimonialDetails
              src={testimonial.img}
              name={testimonial.name}
              statement={testimonial.statement}
            />
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h4"
        component="h2"
        align="center"
        color='secondary'
      >
        What they've said
      </Typography>

      {mobileView ? displayMobile() : displayDesktop()}

      <CtaButton
        className={classes.ctaButton}
        label="Get started"
        disableElevation={false}
      />
    </div>
  )
}

export default Testimonials
