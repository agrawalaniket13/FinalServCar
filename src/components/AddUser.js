import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { userActions } from '../state/index'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userActions.addUser(user))
        navigate("/viewUser")
    }
    return (
        <Container>
            <Form className='container w-50 h-auto d-flex my-5'>
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Add User</h5>
                    </div>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="email"> Email </Label>
                        </div>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email placeholder"
                            type="text"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="examplePassword">Password</Label>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Password placeholder"
                            type="text"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="examplePassword">Name</Label>
                        </div>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Name placeholder"
                            type="text"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Add User</Button><br /><br />
                </div>
            </Form>
        </Container>
    )
}

export default AddUser