import React from 'react';
import styles from './VideoRow.module.css';

const VideoRow = ({ videos }) => {
  return (
    <div className={styles.videoContainer}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      ))}
    </div>
  );
};

export default VideoRow;

