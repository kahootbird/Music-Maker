import React, {useEffect, useState } from "react";

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as Tone from "tone";
import Script from 'next/script'
import Component1 from '../comps/Component1'
import Piano from '../comps/Piano'


export default function Home() {
  const [count, setCount] = useState(0)
  const handleAdd = () =>
  {
    //this.callmemaybe()
    console.log("FUNCTION CALLED")
    //setCount(count+1)
  }
function callmemaybe()
{
  console.log("CALL ME CALLED")
}
  //useEffect filter to get audio to playing otherwise AudioBuffer error will occur
  const [noise, setNoise] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [autoFilter, setAutoFilter] = useState(null);
      const [note, setNote] = useState(false)


    useEffect(() => {
      //const synth = new Tone.Synth().toDestination();
      //synth.triggerAttackRelease(`${"C"}4`, "8n");
      console.log("played")
      //const synth2 = new Tone.Synth().toDestination();
      //synth2.triggerAttackRelease(`${"D"}2`, "8n");


    }, [playing,note]);

function notez(key)
{
  //key=key+1
  //setNote(key)
  //console.log(note)
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(key, "8n");

  //console.log(key)
  //setPlaying(!playing)
}
function piano_key_click()
{
  console.log("PIANO KEY CLICK")
  notez("A4")
}

const aPress = useKeyPress("a");
const bPress = useKeyPress("b");
const cPress = useKeyPress("c");
const dPress = useKeyPress("d");

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
      //console.log("keypress " + key)
      notez(key + "4")
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}

    //const synth = new Tone.Synth().toDestination();
    /*.button {
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
    */
    const buttonstyle = {
     color: "white",
     border: "none",
     backgroundColor: "DodgerBlue",
     padding: "10px",
     fontFamily: "Arial"
   };

  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <script
  src="/play_audio.js"
  strategy="beforeInteractive"
/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
< Piano piano_key_click={piano_key_click}/>
<Component1 handleAdd={handleAdd} />
{count}



<div class="container">
  <div class="buttons">


  <button className="note" style={buttonstyle} onClick={() => notez("A4")}>
  {"A"}
  </button>
  <button className="note" style={buttonstyle} onClick={() => notez("B4")}>
  {"B"}
  </button>



  </div>
</div>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
