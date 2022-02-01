import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Intro, Info, CV, Projects, Social } from './pages/Overview';

const App: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/intro" component={Intro} exact></Route>
                <Route path="/overview/info" component={Info} exact></Route>
                <Route path="/overview/cv" component={CV} exact></Route>
                <Route path="/projects" component={Projects} exact></Route>
                <Route path="/social" component={Social} exact></Route>
            </Switch>
        </Router>
    );
};

export default App;