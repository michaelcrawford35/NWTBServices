import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import GroupList from './GroupList';
import NWTBHome from './NWTBHome'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/groups' exact={true} component={GroupList}/>
                    <Route path='/nw' exact={true} component={NWTBHome}/>
                </Switch>
            </Router>
        )
    }
}

export default App;