import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import editPhoto from "../../images/עידית בזק תמונת תדמית.png";
import ScrollReveal from 'scrollreveal';
import TestimonialsCarousel from '../carousel/Carousel';
import Works from '../recommends/Works';

const AboutMe = () => {
  const containerRef = useRef(null);

  // ScrollReveal configuration
  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  // Handle button click to navigate to form
  const handleFormNavigation = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section ref={containerRef} className={styles.section} id="מי-אני">
        <div className={styles.container}>
          <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
            <img src={editPhoto} alt="עידית בזק" className={styles.image} />
          </div>

          <div className={`${styles.content} ${styles.revealItem}`}>
            <h2 className={styles.mainTitle}>נעים להכיר, עידית בזק</h2>

            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                "אם הייתי יודעת אז את מה שאני יודעת היום – הייתי חוסכת לעצמי עשרות אלפי שקלים והרבה תסכול. היום, אני כאן כדי לחסוך את זה ממך."
              </p>
            </div>

            <div className={styles.textBlock}>
              <p className={styles.paragraph}>
                כמו הרבה קוסמטיקאיות מתחילות, גם אני סיימתי את הקורס הראשוני עם המון רצון – אבל בלי כלים אמיתיים לבנות עסק.
              </p>

              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                התחלתי מכלום – בלי גב כלכלי, רק מענק שחרור והרבה רצון להצליח. קניתי ציוד מיותר, עשיתי טעויות של מתחילות, ועשיתי את הדרך הקשה לבד.
              </p>

              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                היום, אני בעלת קליניקה גדולה ומובילה, עם יומן מלא, מכשור מתקדם, ולקוחות שמגיעות מכל הארץ להדרכות וטיפולים.
                <br />
                כל זה בזכות שיטה ברורה שמלמדת איך להפוך ממישהי עם תשוקה לתחום לבעלת עסק שמבינה בו לעומק!.
              </p>

              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                אם את מרגישה שיש לך את היכולת – אבל לא את הכלים,
                <br />
                אם את מרגישה שאת טובה – אבל היומן עדיין לא מתמלא,
                <br />
                ואם את רוצה להפוך את התחום הזה לעסק – ולא לתחביב,
                <br />
                אז אני פה בשבילך.
              </p>

              <p className={styles.finalText}>
                את לא צריכה לעבור את הדרך הקשה שעברתי – כי אני כבר עשיתי אותה בשבילך.
              </p>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={handleFormNavigation}
            >
              <span className={styles.buttonIcon}>💬</span>
              בואי נתחיל את המסע שלך להצלחה
            </button>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
    </>
  );
};

export default AboutMe;