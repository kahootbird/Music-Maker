import React from 'react'
import styles from '../styles/Home.module.css'
import Key from '../comps/Key'

const Piano = (props) => {
  const call_playsound = (keynum) =>
  {
    console.log("FUNCTION CALLED" + keynum)
    props.piano_key_click(keynum)
  }

  return (
  <piano>
  <div className={styles.piano}>
  < Key keynote="c3" call_playsound={call_playsound} />
  < Key keynote="c#3" flat={true} call_playsound={call_playsound} />
  < Key keynote="d3" call_playsound={call_playsound} />
  < Key keynote="d#3" flat={true} call_playsound={call_playsound} />
  < Key keynote="e3" call_playsound={call_playsound} />
  < Key keynote="f3" call_playsound={call_playsound} />
  < Key keynote="f#3" flat={true} call_playsound={call_playsound} />
  < Key keynote="g3" call_playsound={call_playsound} />
  < Key keynote="g#3" flat={true} call_playsound={call_playsound} />
  < Key keynote="a3" call_playsound={call_playsound} />
  < Key keynote="a#3" flat={true} call_playsound={call_playsound} />
  < Key keynote="b3" call_playsound={call_playsound} />
  < Key keynote="c4" call_playsound={call_playsound} />
  < Key keynote="c#4" flat={true} call_playsound={call_playsound} />
  < Key keynote="d4" call_playsound={call_playsound} />
  < Key keynote="d#4" flat={true} call_playsound={call_playsound} />
  < Key keynote="e4" call_playsound={call_playsound} />
  < Key keynote="f4" call_playsound={call_playsound} />
  < Key keynote="f#4" flat={true} call_playsound={call_playsound} />
  < Key keynote="g4" call_playsound={call_playsound} />
  < Key keynote="g#4" flat={true} call_playsound={call_playsound} />
  < Key keynote="a4" call_playsound={call_playsound} />
  < Key keynote="a#4" flat={true} call_playsound={call_playsound} />
  < Key keynote="b4" call_playsound={call_playsound} />

  </div>
  </piano>
  )
}

export default Piano
