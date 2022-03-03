import React from 'react'
import styles from './cv.module.scss'
import cv from '../../media/cv_pdf.pdf';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
        <div className={styles.cv}>
            <h1 className="cv">CV</h1>
            <div className={styles.cvLink}>
              <h2 className={styles.cvHeader}>
                Jesse Nordman
              </h2>
              <p>21.1.2004</p>
              <p> +358 458899111 </p>
                <a href={cv} download="Jesse-Nordman-CV">
                        Download CV
                </a>
            </div>
        </div>
  )
}

export default Cv
