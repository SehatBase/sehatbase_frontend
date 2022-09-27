import React from 'react'
import NewsCont from './NewsletterContainer/NewsCont'
import { useStyles } from "../styles/newsletter";

export default function NewsLetterMain() {
  const classes=useStyles()
  return (
    <div className={classes.pageContainer}>
      <NewsCont modal={false} showClose={false}/>
    </div>
  )
}
