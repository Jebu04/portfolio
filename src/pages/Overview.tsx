import { FC } from 'react';
import styles from './Overview.module.scss';
import me from '../media/me.jpg'
import cv from '../media/cv_pdf.pdf';


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
                <div>
                    <p>Here are all the projects I have been involved in:</p>
                </div>
        </div>
        </>
    ) 
};

export const Social: FC = () => {
    return (
        <>
        <div className={styles.social}>
            <h1 className="social">Contact me via</h1>
                <div>
                    <a href="https://twitter.com/Jebu33">Twitter</a>
                    <a href="https://www.linkedin.com/in/jesse-nordman-41608020b/">LinkedIn</a>
                    <a href="https://github.com/Jebu04">GitHub</a>
                </div>
        </div>
        </>
    )
};