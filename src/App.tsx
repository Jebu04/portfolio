import React, { FC, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Intro, Info, CV, Projects, Social } from './pages/Overview';
import styles from './App.module.scss';

const App: FC = () => {
    const [sidebarOpenState, setSidebarOpenState] = useState(false);
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
                    <Route path="/overview/info" component={Info} exact></Route>
                    <Route path="/overview/cv" component={CV} exact></Route>
                    <Route path="/projects" component={Projects} exact></Route>
                    <Route path="/social" component={Social} exact></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;