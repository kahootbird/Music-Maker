import React from 'react'
import styles from '../styles/Home.module.css'
const Key = (props) => {

var noteIsFlat = 0
if (props.flat == true)
noteIsFlat = 1
var info
if (noteIsFlat == 0)
{
  var info = (
    <piano>
    <div class="container">
      <div className={styles.key}>
        KEY
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
      <div className={styles.keyflat}>
        KEY
      </div>
    </div>
    </piano>
  )
}

return(info)

}


export default Key
