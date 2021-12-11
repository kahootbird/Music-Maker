import React from 'react'
import styles from '../styles/Home.module.css'
import Key from '../comps/Key'

const Piano = (props) => {
  return (
  <piano>
  <div className={styles.piano}>
      PIANO

  < Key keynote="1"/>
  < Key keynote="2" flat={true}/>
  < Key keynote="3"/>
  < Key keynote="4" flat={true} />
  < Key keynote="5"/>
  < Key keynote="6"/>
  < Key keynote="7" flat={true} />
  < Key keynote="8" />
  < Key keynote="9" flat={true} />
  < Key keynote="10" />
  < Key keynote="11" flat={true} />
  < Key keynote="12" />
  < Key keynote="13" />
  < Key keynote="14" flat={true} />
  < Key keynote="15" />
  < Key keynote="16" flat={true} />
  < Key keynote="17" />

  </div>
  </piano>
  )
}

export default Piano
