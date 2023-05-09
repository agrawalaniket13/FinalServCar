import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap'
import { enquiryActions } from '../state/index'
import { useNavigate } from 'react-router-dom'

const AddEnquiry = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [enquiry, setEnquiry] = useState({})
    const handleChange = (e) => {
        setEnquiry({ ...enquiry, [e.target.name]: e.target.value })
        console.log(enquiry)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(enquiryActions.addEnquiry(enquiry))
        navigate("/viewEnquiry")
    }
    return (
        <Container>
            <Form className='container w-50 h-auto d-flex my-5'>
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Add Enquiry</h5>
                    </div>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{ fontWeight: "bold" }} for="examplePassword">Name</Label>
                        </div>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Name placeholder"
                            type="text"
                            value={enquiry.name}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{ fontWeight: "bold" }} for="examplePassword">Email</Label>
                        </div>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email placeholder"
                            type="text"
                            value={enquiry.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{ fontWeight: "bold" }} for="examplePassword">Phone Number</Label>
                        </div>
                        <Input
                            id="phoneno"
                            name="phoneno"
                            placeholder="Phone placeholder"
                            type="text"
                            value={enquiry.phoneno}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{ fontWeight: "bold" }} for="examplePassword">Details</Label>
                        </div>
                        <Input
                            id="details"
                            name="details"
                            placeholder="Details placeholder"
                            type="textarea"
                            value={enquiry.details}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Add Enquiry</Button><br /><br />
                </div>
            </Form>
        </Container>
    )
}

export default AddEnquiry