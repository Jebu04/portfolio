import React from 'react'
import styles from './info.module.scss'
import me from '../../media/me.jpg'

type InfoProps = {

}

const Info: React.FC<InfoProps> = () => {
  return (
        <div className={styles.info}>
        <div className={styles.me}>
        <h1 className="info">Who I am?</h1>
        </div>
            <div className={styles.aboutMe}>
                <p>Hello! My name is Jesse Nordman.</p>
                <p>I am currently studying programming at Vantaan ammattiopisto Varia.</p>
                <p>In programming, I am interested in developing games and websites.</p>
            </div>
        <img src={me} alt='Me' width="200"/>
    </div>
  )
}

export default Info
