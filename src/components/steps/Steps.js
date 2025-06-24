import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import styles from './Steps.module.css';
import magnet from "../../icons/wired-outline-950-attract-customers-hover-slide.json";
import price from "../../icons/wired-outline-101-price-tag-dollar-hover-flutter.json"
import business from "../../icons/wired-outline-187-suitcase-morph-open (2).json"
import acne from "../../icons/wired-outline-1276-acne-herpes-hover-pinch.json"
const Steps = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

const stepsData = [

  {
    id: 2,
    icon: magnet,
    playerRef: playerRef2,
    title: "לגלות שהלקוחות לא מגיעות רק כי יש לך טכניקה טובה",
    description: "את יודעת לטפל, את משקיעה, את רוצה להתקדם אבל השקט בטלפון מבלבל זה לא כי את לא מספיק מוכשרת, זה כי אף אחד לא לימד אותך איך לגרום להן לבחור דווקא בך ואיך להפוך את התחביב שלך לעסק משגשג."
  },
    {
    id: 4,
    icon: business,
    playerRef: playerRef4,
    title: "להבין שאת לא רק מטפלת – את מנהלת עסק",
    description: "זה להבין שיש שעות עבודה, תמחור, גבולות, תכנון. שהדרך להצליח לא תלויה רק בכמה את מקצועית – אלא בניהול נכון של העסק-שיווק,אסטרטגיה נכונה לעבודה מול קהל לקוחות,תוכנית עבודה ומכירות.."
  },
  {
    id: 3,
    icon: price,
    playerRef: playerRef3,
    title: "לדעת לתמחר נכון ולצייד את הקליניקה במוצרים הנכונים",
    description: "לדעת לתמחר את השירותים שאת נותנת בצורה נכונה , לבנות מחירון, לצייד את הקליניקה במוצרים שהם באמת טובים ולא את העגלה הבסיסית בשווי מטורף שכולם קונים (ומגלים בדיעבד שבעזרתם לא תצליחי לתת תוצאות למטופלות שלך)"
  },

    {
    id: 1,
    icon: acne,
    playerRef: playerRef1,
    title: "לדעת לטפל במקרים יותר מורכבים מהבסיס שלמדת",
    description: "יגיעו אלייך לקוחות שחוות בעיות שמצריכות פתרונות יותר מורכבים מהפתרונות הבסיסיים - וכשזה יקרה.. את לא תרצי לוותר על הלקוחות האלה"
  },
];



  useEffect(() => {
    // הפעלת כל האנימציות בהתחלה
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
    playerRef3?.current?.playFromBeginning();
    playerRef4?.current?.playFromBeginning();

    ScrollReveal().reveal(`.${styles.stepTitle}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
        ScrollReveal().reveal(`.${styles.stepDescription}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
            ScrollReveal().reveal(`.${styles.iconContainer}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
  }, []);

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 1000);
  };

  return (
    <div className={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.stepItem} step-${step.id}`}>
            <div className={styles.iconContainer}>
              <Player 
                icon={step.icon} 
                ref={step.playerRef} 
                size="100%" 
                onComplete={() => handleComplete(step.playerRef)}
              />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
          
          {index < stepsData.length - 1 && (
            <div className={styles.connector}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;