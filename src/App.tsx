import React, { FC, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Intro from './components/intro/intro';
import Cv from './components/cv/cv';
import Projects from './components/projects/projects';
import Social from './components/social/social';

const App: FC = () => {
    const [sidebarOpenState, setSidebarOpenState] = useState(window.innerWidth > 800);
    return (
        <Router basename='portfolio'>
            {/* Sidebar width: 250px */}
            <Sidebar sidebarIsOpen={sidebarOpenState} setSidebarIsOpen={setSidebarOpenState} />

            <div
                className={styles.container}
                style={
                    sidebarOpenState 
                        ? {paddingLeft:'250px'}
                        : {paddingLeft:'0px'}
                }
            >
                <Switch>
                    <Route path="/" component={Intro} exact></Route>
                    <Route path="/overview/cv" component={Cv} exact></Route>
                    <Route path="/projects" component={Projects} exact></Route>
                    <Route path="/social" component={Social} exact></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;