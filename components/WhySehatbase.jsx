import { Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import useStyles from '../styles/whySehatbaseStyles'
import whySehatbaseimage from '../public/whySehatbase.png'
import Image from 'next/image'
import CheckVector from '../public/CheckVector.png'


function WhySehatbase() {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));
  return (
    <Container className={classes.rootContainer}>
        <Container className={classes.imageContainer}>
            { (
        <Image 
        src={whySehatbaseimage} 
        />
            )}
        </Container>
        <Container className={classes.contentContainer}>
            <Typography className={classes.title}>WHY SEHATBASE?</Typography>
            <Typography className={classes.title2}>Bringing Loving Care <br/> to Health Care !</Typography>

            <Container className={classes.listItem}>
                <Image 
                src={CheckVector}
                />
                <Typography className={classes.listText}>SehatBase is to make healthcare accessible. </Typography>
            </Container>

            <Container className={classes.listItem}>
                <Image 
                src={CheckVector}
                />
                <Typography className={classes.listText}>Providing Accurate and Intelligent Disease Diagnosis and Assistance at your fingertips.</Typography>
            </Container>

            <Container className={classes.listItem}>
                <Image 
                src={CheckVector}
                />
                <Typography className={classes.listText}>Reduce the chances of patients' wrong diagnosis that leads to other problems.</Typography>
            </Container>
        </Container>
    </Container>
  )
}

export default WhySehatbase