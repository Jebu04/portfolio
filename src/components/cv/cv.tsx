import React from 'react'
import styles from './cv.module.scss'
import cv from '../../media/cv_pdf.pdf';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
        <div className={styles.cv}>
            <h1 className="cv">CV</h1>
            <div className={styles.aboutMe}>
              <h1>About Me</h1>
              <p>I am really willing and motivated to learn new things. I can solve problems one way or another. Patience is my specialty.</p>
              <p>I spend my free time going to the gym and seeing my friends. I also like gaming.</p>
            </div>
            <div className={styles.education}>
              <h1>Education</h1>
              <h2>Junior High School</h2>
              <li>Peltolan koulu - From September 2017 to June 2020</li>
              <p>The average of the certificate was 7.8</p>
              <h2>Bachelor's degree in Information and Communication technology</h2>
              <li>Vantaan ammattiopisto Varia - From September 2020 to June 2023</li>
              <p>Studied web and game development.</p>
              </div>
            <div className={styles.workExp}>
              <h1>Work Experience</h1>
                <h2>Introduction to working life </h2>
                  <li>Tampereen Datapiste Oy - From October 2019 to November 2019</li>
                  <p>Updates for computers and phones. Also did some inventory and organization.</p>
                <h2>Summer job</h2>
                  <li>NordSolar Oy - From June 2021 to August 2021</li>
                  <p>Maintaining an e-commerce.</p> 
              </div>
              <div className={styles.cvLink}>
                    <a href={cv} download="Jesse-Nordman-CV">
                        Download CV
                    </a>
              </div>
        </div>
  )
}

export default Cv
