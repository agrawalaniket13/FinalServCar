import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap'
import { enquiryActions } from '../state/index'
import { useNavigate, Link } from 'react-router-dom'
import fire from '../Firebase'
import AuthenticationService from '../service/AuthenticationService'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch
    const [user, setUser] = useState({ email: '', password: '' })


    const clickHandler = (e) => {
        e.preventDefault();

        if (user.email !== "" & user.email != 'admin@gmail.com' && user.password !== "" & user.password != 'admin123') {
            fire.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((data) => {
                    AuthenticationService.login(user.email)
                    alert('user login successfully')
                })
            navigate("/userDashboard", { state: { name: user.email } })
        }

        else if (user.email == 'admin@gmail.com' && user.password == 'admin123') {
            fire.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((data) => {
                    AuthenticationService.login(user.email)
                    alert('admin login successfully')
                })
            navigate("/adminDashboard", { state: { name: user.email } })
        }
        else {
            alert("User is not registered OR Check for credentials")
            navigate("/register")
        }
    }



    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <Form className='container w-50 h-auto d-flex my-5'>
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Login</h5>
                    </div>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{ fontWeight: "bold" }} for="email">Email</Label>
                        </div>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email placeholder"
                            type="text"
                            value={user.email}
                            onChange={changeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{ fontWeight: "bold" }} for="password">Password</Label>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Password placeholder"
                            type="password"
                            value={user.password}
                            onChange={changeHandler}
                        />
                    </FormGroup>
                    <Button onClick={clickHandler} style={{ "backgroundColor": "#007580" }}>Login</Button><br /><br />
                    <p>Create an account <Link to="/register" style={{ textDecoration: 'none' }}>Signup here</Link></p>
                </div>
            </Form>
        </Container>
    )
}

export default Login