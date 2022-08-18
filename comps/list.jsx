import React from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';


export default function List(props) {
    
  return (
    <div className={props.classes.listDiv}>
      <div className={props.classes.listIcon}>
        {props.show?<RemoveCircleOutlineOutlinedIcon className={props.classes.bullets} onClick={()=>props.handleClick(props.id)}></RemoveCircleOutlineOutlinedIcon>:<AddCircleOutlineOutlinedIcon className={props.classes.bullets} onClick={()=>props.handleClick(props.id)}></AddCircleOutlineOutlinedIcon>}
      </div>
      <div>
      <p className={props.classes.bulletText}> {props.question}</p>
        {props.show&&<p className={props.classes.hiddenText}>{props.text}</p>}
      </div>
    </div>
  )
}
