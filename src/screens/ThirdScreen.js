// ThirdScreen.jsx
import SmallBox from "../components/SmallBox/SmallBox"
import styles from "./ThirdScreen.module.css"
import coins from "../icons/wired-outline-298-coins-hover-spending.json"
import social from "../icons/wired-outline-2542-logo-instagram-morph-square.json"
import prices from "../icons/wired-outline-2450-invoice-general-hover-unfold.json"
import business from "../icons/wired-outline-978-project-management-hover-pinch.json"
import { FaMoneyBillWave, FaTools, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa'

const ThirdScreen=()=>{

return <>
<div className={styles.description}>בתחילת הדרך שלי</div>
<div className={styles.title}>עשיתי את כל הטעויות האפשריות</div>

<div className={styles.row}>

<SmallBox text="הוצאתי עשרות אלפי שקלים על ציוד שלא באמת קידם את העסק שלי" icon={coins}/>
<SmallBox text="לא ידעתי מה לעשות ברשתות החברתיות כדי לצבור לקוחות" icon={social}/>
<SmallBox text="לא ידעתי איך לבנות מחירון נכון ותמחרתי שירותים במחירי הפסד" icon={prices}/>
<SmallBox text="עבדתי ללא תוכנית עסקית והרגשתי שאני עובדת בלי מטרה אמיתית" icon={business}/>

</div>

<div className={styles.title}>והיום, אחרי שלמדתי הכל על הבשר שלי והצלחתי להגיע ל</div>

<div className={styles.achievementsContainer}>

<div className={styles.achievement}>
    <FaMoneyBillWave className={styles.icon} />
    <span className={styles.achievementText}>הכנסה יציבה של 5 ספרות בחודש ומעלה</span>
</div>

<div className={styles.achievement}>
    <FaTools className={styles.icon} />
    <span className={styles.achievementText}>מכשור בקליניקה בשווי חצי מיליון שקל תוך 3 שנים בלבד</span>
</div>

<div className={styles.achievement}>
    <FaMapMarkerAlt className={styles.icon} />
    <span className={styles.achievementText}>קליניקה משגשגת במיקום שכולם חזו לו כישלון</span>
</div>

<div className={styles.achievement}>
    <FaChartLine className={styles.icon} />
    <span className={styles.achievementText}>שילוש גודל הקליניקה בתקופת הקורונה ל-3 קומות</span>
</div>
<div className={styles.title}>אני כאן כדי לקצר לך את הדרך!</div>
</div>

</>
    
}
export default ThirdScreen