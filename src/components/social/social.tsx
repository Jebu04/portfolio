import React from 'react'
import styles from './social.module.scss';
import me from '../../media/me.jpg'

type SocialProps = {

}

const Social: React.FC<SocialProps> = () => {
  return (
    <div className={styles.social}>
        <div className={styles.info}>
        <div className={styles.me}></div>
        <div className={styles.aboutMe}>
            <h1>Who I am?</h1>
                <p>Hello! My name is Jesse Nordman.</p>
                <p>I am currently studying programming at Vantaan ammattiopisto Varia.</p>
                <p>In programming, I am interested in developing video games and websites.</p>
                <img src={me} alt='Me' width="200"/>
            </div>
            <div className={styles.some}>
            {/* <h1>Social Media Links</h1> */}
            </div>
            <div className={styles.someLinks}>
                <a href="https://twitter.com/Jebu33" target='_blank' rel="noreferrer">Twitter</a>
                <a href="https://www.linkedin.com/in/jesse-nordman-41608020b/" target='_blank' rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/Jebu04" target='_blank' rel="noreferrer">GitHub</a>
            </div>
    </div>
    </div>
  )
}

export default Social
