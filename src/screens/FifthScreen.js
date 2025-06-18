import MyServices from "../components/treatments/Treatments"
import VideoRow from "../components/videosInRow/VideoRow"
import styles from "./FifthScreen.module.css"
import video1 from "../videos/עידית סרטון רקע 1.mp4"
import video2 from "../videos/עידית סרטון רקע 2.mp4"
import video3 from "../videos/עידית סרטון רקע 3.mp4"
import video4 from "../videos/עידית סרטון רקע 4.mp4"
const FifthScreen=()=>{

const videos = [
  { src: video1 },
  { src:video2 }
];
const videos2 = [
  { src: video3 },
  { src:video4 }
];
    return <>
    <div className={styles.title} id="טיפולים">הטיפולים שלי</div>
    <MyServices/>
            <div className={styles.description}>ושנייה לפני שתשריינו תור</div>
                <div className={styles.title}>ככה הדברים נראים מקרוב</div>
                   <VideoRow videos={videos}/>
                       <VideoRow videos={videos2}/>
                           <div className={styles.description}>ואם עדיין נשארו לך שאלות בראש..</div>
    </>

}
export default FifthScreen