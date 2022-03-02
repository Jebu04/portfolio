import { FC } from 'react';
import styles from './Overview.module.scss';
import me from '../media/me.jpg'
import cv from '../media/cv_pdf.pdf';
import topdown from '../media/topdown.jpg';
import wolfgame from '../media/wolfgame.jpg';


export const Intro: FC = () => {
    return (
        <>
        <div className={styles.intro}>
        {/* <img src={image} alt='Background' width="2000"/> */}
            <h1 className="intro">Welcome to my portfolio project!</h1>
                <div>
                </div>
        </div>
        </>
    )
};

export const Info: FC = () => {
    return (
        <>
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
        </>
    )
};

export const CV: FC = () => {
    return (
        <>
        <div className={styles.cv}>
            <h1 className="cv">CV</h1>
            </div>
            <div>
                <a href={cv} download="Jesse-Nordman-CV">
                    Download CV
                </a>
            </div>
        </>
    )

};

export const Projects: FC = () => {
    return (
        <>
        <div className={styles.projects}>
            <h1 className="projects">Projects</h1>
            <div className={styles.cards}>
                <div className={styles.projectCard}>
                    <img src={topdown} alt="Topdown 2D"/>
                    <h2>Unity game project</h2>
                    <p>This is an 2D Topdown dungeon game I made with Unity.</p>
                    <a href="https://play.unity.com/mg/other/dungeon-game" target='_blank' rel="noreferrer">You can play it here</a>
                </div>

                <div className={styles.projectCard}>
                    <img src={wolfgame} alt="Wolfgame"/>
                    <h2>Unity group project</h2>
                    <p>This was school group project. My responsibility was to make enemy AI and combat system.</p>
                    <a href="https://github.com/varia-ict/varia-agile-20C-ryhma-1" target='_blank' rel="noreferrer">Here is the github repository</a>
                </div>
            </div>
        </div>
        </>
    ) 
};

export const Social: FC = () => {
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
};