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
                <a href={cv} download="Jesse-Nordman-CV">
                        Download CV
                </a>
            </div>
        </div>
  )
}

export default Cv
