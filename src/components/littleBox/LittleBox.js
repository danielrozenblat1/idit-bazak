import React, { useEffect, useRef } from 'react';
import styles from './LittleBox.module.css';
import { Player } from '@lordicon/react';

const LittleBox = ({ icon, text }) => {

        const playerRef1 = useRef(null);
   
    
        useEffect(() => {
          playerRef1?.current?.playFromBeginning();

        }, []);
      
        const handleComplete = (ref) => {
          setTimeout(() => {
            ref?.current?.playFromBeginning();
          }, 1000);
        };
  return (
    <div className={styles.littleBox}>
      <div className={styles.iconContainer}>
        <Player 
           icon={icon} 
           ref={playerRef1} 
           size="100%" 
           onComplete={handleComplete}
         />
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  );
};

export default LittleBox;