import React from 'react';
import styles from './WhoFits.module.css';
import { FaCheck, FaTimes, FaStar, FaUserShield, FaRocket, FaHandshake, FaGraduationCap, FaHeart } from 'react-icons/fa';

const EligibilitySection = () => {
  // את מתאימה לתהליך אם
  const eligibleList = [
    {
      text: "את מטפלת פנים מתחילה שזה עתה סיימת קורס בסיסי ורוצה לפתוח עסק משגשג",
      icon: <FaGraduationCap className={styles.icon} />
    },
    {
      text: "את מרגישה שיש לך את הכישורים הטכניים אבל חסרים לך הכלים העסקיים",
      icon: <FaUserShield className={styles.icon} />
    },
    {
      text: "את מוכנה להשקיע בעצמך ולקחת את התחום ברצינות מלאה",
      icon: <FaRocket className={styles.icon} />
    },
    {
      text: "את חולמת על יומן מלא ועסק שמתנהל כמנה עיקרית ולא כתחביב",
      icon: <FaHeart className={styles.icon} />
    },
    {
      text: "את רוצה ללמוד מהטעויות של אחרות ולא לשלם על זה ביוקר",
      icon: <FaStar className={styles.icon} />
    },
    {
      text: "את מוכנה לקבל ליווי אישי ולהצטרף לקהילה תומכת של קולגות בתחום",
      icon: <FaHandshake className={styles.icon} />
    }
  ];

  // את פחות מתאימה לתהליך אם
  const nonEligibleList = [
    {
      text: "את מחפשת פתרון קסם או קורס דיגיטלי זול במקום ליווי מקיף ואישי",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את לא מוכנה להשקיע זמן ומאמץ בבניית עסק אמיתי ומתוכנן",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את רוצה להישאר בטיפולי 'סטוץ' חד פעמיים במקום לבנות סיסטם עבודה",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את מתעניינת רק בשביל לדעת מחיר ולא באמת רצינית לגבי התחום",
      icon: <FaTimes className={styles.iconNegative} />
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.glowEffect}></div>
      
      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <h2 className={styles.title}>הקורס מתאים לך אם:</h2>
          <div className={styles.line}></div>
          
          <ul className={styles.list}>
            {eligibleList.map((item, index) => (
              <li key={`eligible-${index}`} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>הקורס פחות מתאים לך אם:</h2>
          <div className={styles.lineNegative}></div>
          
          <ul className={styles.list}>
            {nonEligibleList.map((item, index) => (
              <li key={`non-eligible-${index}`} className={styles.listItemNegative}>
                <div className={styles.iconWrapperNegative}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;