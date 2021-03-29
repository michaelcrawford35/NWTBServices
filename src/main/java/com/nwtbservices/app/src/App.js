import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//import Home from './Home';
import GroupList from './GroupList';
import NWTBHome from './NWTBHome'
import NWTBCico from "./NWTBCico";
import NWTBSchedule from "./NWTBSchedule";
import NWTBPrevBooks from "./NWTBPrevBooks";
import NWTBSoldBooks from "./NWTBSoldBooks";
import NWTBReplaceBarcode from "./NWTBReplaceBarcode";
import NWTBQueryCourse from "./NWTBQueryCourse";
import NWTBCourseMessage from "./NWTBCourseMessage";
import NWTBChangeBookCodeYear from "./NWTBChangeBookCodeYear";
//import NWTBMaintenance from  './NWTBMaintenance';
//import NWTBAddBooks from './NWTBAddBooks';
//import NWTBQueryBooks from './NWTBQueryBooks';
//import NWTBChangeBookDisposition from './NWTBChangeBookDisposition';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/groups' exact={true} component={GroupList}/>
                    <Route path='/' exact={true} component={NWTBHome}/>
                    <Route path='/cico' exact={true} component={NWTBCico}/>
                    <Route path='/schedule' exact={true} component={NWTBSchedule}/>
                    <Route path='/prevbooks' exact={true} component={NWTBPrevBooks}/>
                    <Route path='/soldbooks' exact={true} component={NWTBSoldBooks}/>
                    <Route path='/replace' exact={true} component={NWTBReplaceBarcode}/>
                    <Route path='/courseQuery' exact={true} component={NWTBQueryCourse}/>
                    <Route path='/courseMessage' exact={true} component={NWTBCourseMessage}/>
                    <Route path='/changebcy' exact={true} component={NWTBChangeBookCodeYear}/>
                </Switch>
            </Router>
        )
    }
}

export default App;