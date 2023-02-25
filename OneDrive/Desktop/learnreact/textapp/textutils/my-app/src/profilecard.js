import { useState } from 'react';
import heart from "./heart.svg";

function profileCard(props)
{    
    const title=props.title;
    const[clicks,setClicks]=useState(0);
    const handleClick=()=>{
        setClicks(clicks+1);
    }
  return( 
   <div className="card"   onClick={handleClick}>
    <div className="card-image"> 
    <diya className="image is-1by1">
    <img src={props.img}/>
    </diya>

    </div>
    <div className="card-content">
    <div className="media-content">
    <p className="title is-4">{title}</p>
    <img alt="heart" src={heart}
     style={{width:10+10*clicks+"px"}}/>
    <p className="subtitle is-6">{props.description}</p>
    <p className="subtitle is-6"> {props.price}</p>
    </div>
    </div>
    
   </div>);
}

export default profileCard;