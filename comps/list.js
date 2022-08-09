import React from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';


export default function List(props) {
    
  return (
    <div>
        {props.show?<RemoveCircleOutlineOutlinedIcon className={props.classes.bullets} onClick={()=>props.handleClick(props.id)}></RemoveCircleOutlineOutlinedIcon>:<AddCircleOutlineOutlinedIcon className={props.classes.bullets} onClick={()=>props.handleClick(props.id)}></AddCircleOutlineOutlinedIcon>} This is the Question?
        {props.show&&<p>Lorem Ipsum Dolor Sit Amet</p>}
    </div>
  )
}
