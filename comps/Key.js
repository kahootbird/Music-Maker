import React, {useEffect, useState } from "react";
//Import style for div to change piano key look on click
import styles from '../styles/Home.module.css'

const Key = (props) => {

const [keyvalue, setKeyValue] = useState(0)

function click_btn()
{
  setKeyValue(1)
  //Call passed function through props to pass it up the chain to index.js calling tone.js for music
  props.call_playsound(props.keynote)
  setTimeout(fix_keypress,200)

}
function fix_keypress()
{
  setKeyValue(0)
}

var cmdDown = false;

//noteIsFlat to determine if giving flat key div or regular div
var noteIsFlat = 0
if (props.flat == true)
  noteIsFlat = 1
var info
if (noteIsFlat == 0)
{
  if (keyvalue == 0)

  //      {props.keynote}
  var info = (
    <piano>
    <div className="container" onClick={click_btn}>
      <div className={styles.key}>

      </div>
    </div>
    </piano>
  )
  else {
    var info = (
      <piano>
      <div className="container" onClick={click_btn}>
        <div className={styles.keypressed}>

        </div>
      </div>
      </piano>
    )
  }
}
else
{
  var info = (
    <piano>
    <div className="container">
      <div className={styles.keyflat} onClick={click_btn}>

      </div>
    </div>
    </piano>
  )
}

return(info)

}


export default Key
