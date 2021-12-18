import React, {useEffect, useState } from "react";

import styles from '../styles/Home.module.css'

const Key = (props) => {

const [keyvalue, setKeyValue] = useState(0)
console.log("VALUE" + keyvalue)
function click_btn()
{
  setKeyValue(1)
  //console.log("CLICKED")
  //console.log(props.keynote)
  props.call_playsound(props.keynote)


  //console.log(this.key())
}

var cmdDown = false;

var noteIsFlat = 0
if (props.flat == true)
noteIsFlat = 1
var info
if (noteIsFlat == 0)
{
  if (keyvalue == 0)
  var info = (
    <piano>
    <div class="container" onClick={click_btn}>
      <div className={styles.key}>
      {props.keynote}
      </div>
    </div>
    </piano>
  )
  else {
    var info = (
      <piano>
      <div class="container" onClick={click_btn}>
        <div className={styles.keypressed}>
        {props.keynote}
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
    <div class="container">
      <div className={styles.keyflat} onClick={click_btn}>
      {props.keynote}
      </div>
    </div>
    </piano>
  )
}

return(info)

}


export default Key
