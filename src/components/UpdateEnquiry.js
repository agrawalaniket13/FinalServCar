import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { enquiryActions } from '../state/index'

const UpdateEnquiry = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location.state.enquiry.name);
    const [enquiry, setEnquiry] = useState([])

    useEffect(() => {
        setEnquiry(location.state.enquiry)
    }, [])

    const handleChange = (e) => {
        setEnquiry({ ...enquiry, [e.target.name]: e.target.value })
        console.log(enquiry)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(enquiryActions.updEnquiry(enquiry))
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
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Update Enquiry</h5>
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
                            placeholder="Phone Number placeholder"
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
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{ fontWeight: "bold" }} for="response">Response</Label>
                        </div>
                        <Input
                            id="response"
                            name="response"
                            placeholder="Response placeholder"
                            type="textarea"
                            value={enquiry.response}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Update Enquiry</Button><br /><br />
                </div>
            </Form>
        </Container>
  )
}

export default UpdateEnquiry