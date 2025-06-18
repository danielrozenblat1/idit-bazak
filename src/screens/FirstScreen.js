import React, { useState, useEffect } from 'react';

import lips from "../icons/wired-outline-1558-shaving-foam-hover-pinch.json";
import styles from './FirstScreen.module.css';
import PinkScrollButton from '../components/button/Button';
import learn from "../icons/wired-outline-406-study-graduation-hover-pinch (1).json"
import middleImage from "../images/עידית בזק תמונה אמצעית.png";
import rightImage from "../images/עידית בזק תמונה ימנית.png"
import leftImage from "../images/עידית בזק תמונה שמאלית.png"
import GradientLoader from '../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>IDIT BAZAK</h1>
  
        <div className={styles.buttonContainer}>
        <PinkScrollButton text="אני רוצה לשמוע על הקורס" icon={learn} to="קורס"/>
        <PinkScrollButton text="אני רוצה לקבוע טיפול" icon={lips} to="טיפולים"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;