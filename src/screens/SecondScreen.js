import LittleBox from "../components/littleBox/LittleBox"
import styles from "./SecondScreen.module.css"
import learn from "../icons/wired-lineal-406-study-graduation-hover-pinch (4).json"
import Steps from "../components/steps/Steps"
const SecondScreen = () => {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.title} id="קורס">מזל טוב!</div>
                <div className={styles.description}>
                    אם את כאן סימן שבדיוק סיימת את ההכשרה שלך או אפילו כבר פתחת את העסק
                    <br/> 
                    <span className={styles.underlineText}>ורשמית את נחשבת ל״קוסמטיקאית״</span>
                </div>
     <div className={styles.title}>אבל התחלת להבין שזה לא רק לקבל תעודה.. זה:</div>
{/* <div className={styles.row}>
<LittleBox text="להתחיל לשווק את עצמך כדי להביא לקוחות" icon={learn}/>
<LittleBox text="לדעת לטפל במקרים יותר מסובכים שקיימים" icon={learn}/>
<LittleBox text="לגרום לאנשים להגיע דווקא אלייך" icon={learn}/>
</div> */}
<Steps/>
<div className={styles.title}>ובדיוק בשביל זה אני כאן</div>
            </div>
        </>
    )
}

export default SecondScreen