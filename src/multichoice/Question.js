import React from 'react';
import styles from './index.css'


function Question(props) {
  console.log("question is",props.imagepath)
  return (
    <div>
    <h6 className="questions">{props.content}</h6>
  {(props.qtype==="textimage")?  <img src= {props.imagepath}  />:<div/>  }
  </div>
  );
}



export default Question;