import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { serviceOfferedActions} from '../state/index'

const UpdateServiceOffered = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location.state.offerservice.serviceName);
    const [offerservice, setOfferService] = useState([])
    useEffect(() => {
        setOfferService(location.state.offerservice)
    }, [])
    const handleChange = (e) => {
        setOfferService({ ...offerservice, [e.target.name]: e.target.value })
        console.log(offerservice)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(serviceOfferedActions.updOfferedService(offerservice))
        navigate("/viewOfferService")
    }
    return (
        <Container>
            <Form className='container w-50 h-auto d-flex my-5'>
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Update Service Offered</h5>
                    </div>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="serviceName">ServiceName</Label>
                        </div>
                        <Input
                            id="serviceName"
                            name="serviceName"
                            placeholder="ServiceName placeholder"
                            type="text"
                            value={offerservice.serviceName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="serviceDescription">Description</Label>
                        </div>
                        <Input
                            id="serviceDescription"
                            name="serviceDescription"
                            placeholder="Description placeholder"
                            type="textarea"
                            value={offerservice.serviceDescription}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="servicePrice">Cost</Label>
                        </div>
                        <Input
                            id="servicePrice"
                            name="servicePrice"
                            placeholder="Cost placeholder"
                            type="text"
                            value={offerservice.servicePrice}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Update Service Offered</Button><br /><br />
                </div>
            </Form>
        </Container>
    )
}

export default UpdateServiceOffered