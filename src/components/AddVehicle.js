import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { vehicleActions } from '../state/index'
import { useNavigate } from 'react-router-dom'

const AddVehicle = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [vehicle, setVehicle] = useState({})
    const handleChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value })
        console.log(vehicle)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(vehicleActions.addVehicle(vehicle))
        navigate("/viewVehicle")
    }
    return (
        <Container>
            <Form className='container w-50 h-auto d-flex my-5'>
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Add Vehicle</h5>
                    </div>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="type">Type</Label>
                        </div>
                        <Input
                            id="type"
                            name="type"
                            placeholder="Type placeholder"
                            type="text"
                            value={vehicle.type}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="description">Description</Label>
                        </div>
                        <Input
                            id="description"
                            name="description"
                            placeholder="Description placeholder"
                            type="text"
                            value={vehicle.description}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="details">Details</Label>
                        </div>
                        <Input
                            id="details"
                            name="details"
                            placeholder="Details placeholder"
                            type="text"
                            value={vehicle.details}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Add Vehicle</Button><br /><br />
                </div>
            </Form>
        </Container>
    )
}

export default AddVehicle