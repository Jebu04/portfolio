import React from 'react'
import styles from './social.module.scss';

type SocialProps = {

}

const Social: React.FC<SocialProps> = () => {
  return (
    <div className={styles.social}>
        <h1 className="social">Social media links</h1>
            <div className={styles.someLinks}>
                <a href="https://twitter.com/Jebu33" target='_blank' rel="noreferrer">Twitter</a>
                <a href="https://www.linkedin.com/in/jesse-nordman-41608020b/" target='_blank' rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/Jebu04" target='_blank' rel="noreferrer">GitHub</a>
            </div>
    </div>
  )
}

export default Social
