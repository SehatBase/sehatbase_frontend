import React from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';


export default function List(props) {
    
  return (
    <div>
        {props.show?<RemoveCircleOutlineOutlinedIcon className={props.classes.bullets} onClick={()=>props.handleClick(props.id)}></RemoveCircleOutlineOutlinedIcon>:<AddCircleOutlineOutlinedIcon className={props.classes.bullets} onClick={()=>props.handleClick(props.id)}></AddCircleOutlineOutlinedIcon>}<span className={props.classes.bulletText}> This is the Question?</span>
        {props.show&&<p className={props.classes.hiddenText}>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>}
    </div>
  )
}
