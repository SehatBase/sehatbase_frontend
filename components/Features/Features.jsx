import { Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import useStyles from '../../styles/featuresStyles'
import lifelineIcon from '../../public/lifeline_icon.png'
import feature1Icon from '../../public/Feature1_icon.png'
import feature2Icon from '../../public/Feature2_icon.png'
import feature3Icon from '../../public/Feature3_icon.png'
import feature3rectangle from '../../public/Feature3_rectangle.png'
import Button from '@mui/material/Button';


function Features() {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Container className={classes.rootContainer}>
        <Container className={classes.headerContainer}>
        <Typography className={classes.title} >
          WHAT WE DO
        </Typography>
        <Container className={classes.heading2}>
        <Image
          src={lifelineIcon}
          layout="fixed"
          />
        <Typography className={classes.title2} >
          Our Main Features
        </Typography>
        </Container>
        <Typography sx={{fontSize: 20 ,  fontFamily: "Open Sans", width:'auto'}}>
        Our goal is to help our patients with the best medical services in Pakistan. Our goal is to help our patients with the best medical services in Pakistan
        </Typography>
        </Container>
        <Container className={classes.featuresContainer}>
        <Container className={classes.feature1Container}>
        <Container className={classes.featureicon}>
          <Image
            src={feature1Icon}
            width= {700}
            height={700}
            />
        </Container>
          <Container className={classes.featurecontent}>
              <Typography className={classes.featureHeading}>
              Video Consultation
              </Typography>
              <Typography className={classes.featureSubtitle}>
              Talk To Doctor Online
              </Typography>
              <Typography className={classes.featureDescription}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione  Nemo enim ipsam voluptatem quia voluptas sit .
              </Typography>
              <Button variant='contained' className={classes.featureButton}> 
              Learn More
              </Button>

          </Container>
        </Container>

        <Container className={classes.feature2Container}>
        <Container className={classes.featureicon}>
          <Image
            src={feature2Icon}
            width= {500}
            height={500}
            />
        </Container>
          <Container className={classes.featurecontent}>
              <Typography className={classes.featureHeading}>
              Find And Book Appointment
              </Typography>
              <Typography className={classes.featureSubtitle}>
              With Verified Doctors
              </Typography>
              <Typography className={classes.featureDescription}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione  Nemo enim ipsam voluptatem quia voluptas sit .
              </Typography>
              <Button variant='contained' className={classes.featureButton}> 
              Learn More
              </Button>
              </Container>  
          </Container>  
          
        </Container>  

        
      <Container className={classes.feature3rootContainer} >
      <Image
          src={feature3rectangle}
          layout='fill'
          
           />
    <Container  className={classes.feature3Container}>
      
        <Container className={classes.feature3content}>
              <Typography className={classes.feature3Heading} >
              Get Medicines Online
              </Typography>
              <Typography className={classes.feature3Subtitle}>
              Cheapest Rates | Same Day Delivery
              </Typography>
              <Typography className={classes.feature3Description}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione  Nemo enim ipsam voluptatem quia voluptas sit .
              </Typography>
              <Button variant='contained' className={classes.featureButton}> 
              Learn More
              </Button>
        </Container>  
      <Container className={classes.feature3icon}>
        <Image
      src={feature3Icon}
      width={500}
      height={500}  
      />
      </Container>
        </Container>
      
      </Container>  

    </Container>



  )
}

export default Features