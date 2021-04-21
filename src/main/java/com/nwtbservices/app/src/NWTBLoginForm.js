import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NWTBLoginForm = (props) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleUserChange = event => {
        setUser(event.target.value)
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        const url = "http://localhost:3000/login"
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user, password})
        };
        fetch(url, requestOptions)
            .then(response => console.log('Submitted successfully'))
            .catch(error => console.log('Form submit error', error))
    };

    return (
        <Form align="center" className="form-spacing" onSubmit={handleSubmit}>
            <FormGroup className="draw-border vert-flexbox login-container">
                <div className="hor-flexbox login-box">
                    <Label for="Username"> Username: </Label>
                    <Input type="text" name="username" id="username" onChange={handleUserChange} value={user} className="gen-spacing"/>
                </div>
                <div className="hor-flexbox login-box">
                    <Label for="Password"> Password: </Label>
                    <Input type="password" name="password" id="password" onChange={handlePasswordChange} value={password} className="gen-spacing"/>
                </div>
                <div className="hor-flexbox login-box">
                    <div className="label-spacer"/>
                    <Button className="nw-button gen-spacing" >Login</Button>
                </div>
            </FormGroup>
        </Form>
    )
}

export default NWTBLoginForm;