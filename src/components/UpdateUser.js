import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { mechanicActions, userActions } from '../state/index'



const UpdateUser = () => {
    const users=useSelector(state=>state.users)
    const mechanics=useSelector(state=>state.mechanics)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location.state.user.name);
    const [userr, setUser] = useState([])
    useEffect(() => {
        setUser(location.state.user)
        dispatch(mechanicActions.getMechanic())
    }, [])
    const handleChange = (e) => {
        setUser({ ...userr, [e.target.name]: e.target.value })
        console.log(userr)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userActions.updUser(userr))
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
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Update User</h5>
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
                            value={userr.email}
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
                            value={userr.password}
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
                            value={userr.name}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Update User</Button><br /><br />
                </div>
            </Form>
        </Container>
    )
}

export default UpdateUser