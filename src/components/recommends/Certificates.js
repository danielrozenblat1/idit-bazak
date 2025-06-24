import React from 'react';
import styles from './Certificates.module.css';

// Import your images
import result1 from "../../images/עידית בזק המלצות ותעודות 1.png";
import result2 from "../../images/עידית בזק המלצות ותעודות 2.png";
import result3 from "../../images/עידית בזק המלצות ותעודות 3.png";
import result4 from "../../images/עידית בזק המלצות ותעודות 4.png";
import result5 from "../../images/עידית בזק המלצות ותעודות 5.png";
import result6 from "../../images/עידית בזק המלצות ותעודות 6.png";

import result8 from "../../images/עידית בזק המלצות ותעודות 8.png";

const Certificates = () => {
 const images = [
   result1, result2,result8, result3, result4, 
   result5, result6,  
 ];

 return (
   <>
  
<div className={styles.title}>קצת מאלה שעברו את הקורס</div>
  
     <div className={styles.container}>
       <div className={styles.scrollTrack}>
         {/* קבוצה ראשונה של תמונות */}
         <div className={styles.scrollContainer}>
           {images.map((img, index) => (
             <div key={`first-${index}`} className={styles.imageWrapper}>
               <img
                 src={img}
                 alt={`המלצה ${index + 1}`}
                 className={styles.image}
               />
             </div>
           ))}
         </div>
         {/* קבוצה שנייה זהה של תמונות */}
         <div className={styles.scrollContainer}>
           {images.map((img, index) => (
             <div key={`second-${index}`} className={styles.imageWrapper}>
               <img
                 src={img}
                 alt={`המלצה ${index + 1}`}
                 className={styles.image}
               />
             </div>
           ))}
         </div>
       </div>
     </div>
 
   </>
 );
};

export default Certificates;