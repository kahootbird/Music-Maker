import React from 'react'
import styles from '../styles/Home.module.css'
const Key = (props) => {

function click_btn()
{
  //console.log("CLICKED")
  //console.log(props.keynote)
  console.log(props.keynote)
  props.call_playsound(props.keynote)
}
var cmdDown = false;

var noteIsFlat = 0
if (props.flat == true)
noteIsFlat = 1
var info
if (noteIsFlat == 0)
{
  var info = (
    <piano>
    <div class="container" onClick={click_btn}>
      <div className={styles.key}>
      {props.keynote}
      </div>
    </div>
    </piano>
  )
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
