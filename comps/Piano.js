import React from 'react'
import styles from '../styles/Home.module.css'
import Key from '../comps/Key'

const Piano = (props) => {
  return (
  <piano>
  <div className={styles.piano}>
      PIANO

  < Key />
  < Key flat={true} />
  < Key />
  < Key flat={true} />
  < Key />
  < Key />
  < Key flat={true} />
  < Key />
  < Key flat={true} />
  < Key />
  < Key flat={true} />
  < Key />
  < Key />
  < Key flat={true} />
  < Key />
  < Key flat={true} />
  < Key />

  </div>
  </piano>
  )
}

export default Piano
