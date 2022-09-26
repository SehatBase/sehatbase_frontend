import { Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import useStyles from '../styles/healthBlogStyle'
import line from '../public/line4.png'
import blogcover1 from '../public/blogcover1.png'
import blogcover2 from '../public/blogcover2.png'
import blogcover3 from '../public/blogcover3.png'


function HealthBlog() {
    const classes = useStyles();

  return (
    <Container className={classes.rootContainer}>
        <Container className={classes.headerContainer}>
        <Typography className={classes.title}>
         HEALTH NEWS & UPDATES
        </Typography>
        <Container className={classes.heading2}>
        <Image
          src={line}
          layout="fixed"
          />
        <Typography className={classes.title2} >
        Latest From Health Blog
        </Typography>
        </Container>
        <Typography className={classes.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
        </Container>
        
        <div className={classes.cardsContainer}>
         <ul className={classes.cards}>
         <li className={classes.card}>
      <div>
        <Image 
        src={blogcover1}
        />
        <h3 className={classes.cardTitle}>Sed ut perspiciatis</h3>
        <div className={classes.cardContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione </div>
      </div>
      <div className={classes.cardLinkWrapper}>
        <a href="" className={classes.cardLink}>Read More</a>
      </div>
    </li>
         
         <li className={classes.card}>
      <div>
      <Image 
        src={blogcover2}
        />
        <h3 className={classes.cardTitle}>Sed ut perspiciatis</h3>
        <div className={classes.cardContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione </div>
      </div>
      <div className={classes.cardLinkWrapper}>
        <a href="" className={classes.cardLink}>Read More</a>
      </div>
    </li>
         
         <li className={classes.card}>
      <div>
      <Image 
        src={blogcover3}
        />
        <h3 className={classes.cardTitle}>Sed ut perspiciatis</h3>
        <div className={classes.cardContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione </div>
      </div>
      <div className={classes.cardLinkWrapper}>
        <a href="" className={classes.cardLink}>Read More</a>
      </div>
    </li>
         <li className={classes.card}>
      <div>
      <Image 
        src={blogcover3}
        />
        <h3 className={classes.cardTitle}>Sed ut perspiciatis</h3>
        <div className={classes.cardContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione </div>
      </div>
      <div className={classes.cardLinkWrapper}>
        <a href="" className={classes.cardLink}>Read More</a>
      </div>
    </li>
         <li className={classes.card}>
      <div>
      <Image 
        src={blogcover3}
        />
        <h3 className={classes.cardTitle}>Sed ut perspiciatis</h3>
        <div className={classes.cardContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia   nsequuntur magni dolores eos qui ratione </div>
      </div>
      <div className={classes.cardLinkWrapper}>
        <a href="" className={classes.cardLink}>Read More</a>
      </div>
    </li>       
    </ul>
    </div>
    <div className={classes.btn}>
    <Button sx={{width:'200px'}}>
      View all
    </Button>
    </div>
    </Container>
  )
}

export default HealthBlog