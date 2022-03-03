import React from 'react'
import styles from './intro.module.scss'

type IntroProps = {

}

const Intro: React.FC<IntroProps> = () => {
  return (
    <div className={styles.intro}>
    {/* <img src={image} alt='Background' width="2000"/> */}
        <h1 className="intro">Welcome to my portfolio project!</h1>
    </div>
  )
}

export default Intro
