import React from 'react'
import styles from './projects.module.scss'
import topdown from '../../media/topdown.jpg'
import wolfgame from '../../media/wolfgame.jpg'
import portfolio from '../../media/portfolioproject.png'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.projects}>
    <h1 className="projects">Projects</h1>
    <div className={styles.myLinks}>
      <a href="https://github.com/Jebu04" target='_blank' rel="noreferrer">GitHub</a>
      <a href="https://play.unity.com/u/Jebu123" target='_blank' rel="noreferrer">Unity Play</a>
    </div>
    <div className={styles.cards}>
        <div className={styles.projectCard}>
            <img src={topdown} alt="Topdown 2D"/>
            <h2>Unity game project</h2>
            <p>This is an 2D Topdown dungeon game.</p>
            <p>I made it with Unity Game Engine.</p>
            <p>Code was written in C#.</p>
            <a href="https://play.unity.com/mg/other/dungeon-game" target='_blank' rel="noreferrer">You can play it here</a>
        </div>

        <div className={styles.projectCard}>
            <img src={wolfgame} alt="Wolfgame"/>
            <h2>Unity group project</h2>
            <p>This was school group project.</p>
            <p>My responsibility was to make enemy AI and combat system.</p>
            <a href="https://github.com/varia-ict/varia-agile-20C-ryhma-1" target='_blank' rel="noreferrer">Here is the GitHub repository link</a>
        </div>

        <div className={styles.projectCard}>
            <img src={portfolio} alt="Portfolio"/>
            <h2>Portfolio project</h2>
            <p>This is my portfolio project.</p>
            <p>I wrote it mainly with typescript and scss.</p>
            <p>It was my first ever react project.</p>
            <a href="https://github.com/Jebu04/portfolio" target='_blank' rel="noreferrer">Here is the GitHub repository link</a>
        </div>

    </div>
</div>
  )
}

export default Projects
