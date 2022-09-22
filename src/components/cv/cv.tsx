import React from 'react'
import styles from './cv.module.scss'

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
              <p>I usually use public transportation when im going to school/work, but in summer time I like using bike.</p>
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
              <div className={styles.skills}>
                <h1>Skills</h1>
                  <h2>Leadership & Team work</h2>
                    <p>Through the years, i've learned the skill of leadership. I'm the guy who gives the tasks for others and lead the group forward.</p>
                  <h2>Where I learned that skill?</h2>
                    <p>The biggest factor has been playing game called Counter-Strike Global Offensive. I'm very competetive person and I like the feeling being in under pressure.</p>
                    <p>I have been involved in many Counter-Strike tournaments and competitions so I have alot of experience in team work.</p>
                    <p>Most of the times I play the role of In Game Leader (IGL). I will callout the strategies and give instructions to my teammates.</p>
                  <h2>Patience</h2>
                    <p>I am very chill person. Thats where my patience come from. I don't want to rush anything. I always take my time for everything.</p>
              </div>
              <div className={styles.languages}>
              <h1>Languages</h1>
                <h2>Finnish</h2>
                  <li>Native language</li>
                <h2>English</h2>
                  <li>Very good</li>
              <h1>Code Languages</h1>
                <h2>HTML/CSS</h2>
                  <li>Good</li>
                <h2>TypeScript</h2>
                  <li>Good</li>
                <h2>C#</h2>
                  <li>Good</li>
                <h2>SQL</h2>
                  <li>Still have to do learning</li>
              </div>

        </div>
  )
}

export default Cv
