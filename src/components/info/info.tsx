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
            <div>
                <p>My name is Jesse Nordman and I am currently studying programming at Varia.</p>
                <p>In programming, I am interested in making games and maintaining websites.</p>
                <p>In my free time I like to play video games, go to the gym and see my friends.</p>
            </div>
        <img src={me} alt='Me' width="200"/>
    </div>
  )
}

export default Info
