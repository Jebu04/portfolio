import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { History, Order, Overview, Revenue, Users } from './pages/Overview';

const App: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/tiedot" component={Overview} exact></Route>
                <Route path="/overview/perustietoa" component={Users} exact></Route>
                <Route path="/overview/cv" component={Revenue} exact></Route>
                <Route path="/projektit" component={Order} exact></Route>
                <Route path="/socialmedia" component={History} exact></Route>
            </Switch>
        </Router>
    );
};

export default App;