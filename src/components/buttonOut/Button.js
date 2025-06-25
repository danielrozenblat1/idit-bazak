import React, { useRef, useEffect } from 'react';
import { Player } from "@lordicon/react";
import styles from './Button.module.css';

const PinkScrollButton = ({ text, icon, to }) => {
    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);

    useEffect(() => {
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
    }, []);
  
    const handleComplete = (ref) => {
      setTimeout(() => {
        ref?.current?.playFromBeginning();
      }, 1000);
    };

    return (
      <a href="https://my.schooler.biz/s/96150/carbon" target="_blank" rel="noopener noreferrer" className={styles.button}>
        <div className={styles.rightIcon}>
          <Player 
            icon={icon} 
            size="100%" 
            onComplete={() => handleComplete(playerRef2)} 
            ref={playerRef2} 
          />
        </div>
        <span className={styles.text}>{text}</span>
      </a>
    );
};

export default PinkScrollButton;