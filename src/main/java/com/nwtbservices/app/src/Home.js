import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
// This file is from a tutorial. It is only used as an example for what to do in the actual project.
class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/groups">Manage JUG Tour</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;