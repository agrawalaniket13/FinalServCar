import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap'
import { Card, Col, Row } from 'react-bootstrap'
import fire from '../Firebase';
import AuthenticationService from '../service/AuthenticationService';
import { serviceActions, serviceOfferedActions, vehicleActions } from '../state';
import Buttons from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const User = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const vehicles = useSelector(state => state.vehicles)
  const offerservices = useSelector(state => state.offerservices)
  const [service, setService] = useState({})
  const [show, setShow] = useState(false)

  const handleChange = (e, data) => {
    let newData = { ...service, [e.target.name]: e.target.value }
    if (data) {
      newData = { ...service, [e.target.name]: e.target.value, cost: data.servicePrice, description: data.serviceDescription }
    }
    setService(newData)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submited data", service)
    dispatch(serviceActions.addUserService(service))
    //alert('data submitted successfully')
    setShow(true)
    //navigate("/userServiceDashboard")
  }

  useEffect(() => {
    dispatch(vehicleActions.getVehicle())
    dispatch(serviceOfferedActions.getOfferedService())
  }, []);

  return (
    <Container>
      <Form className='container w-50 h-auto d-flex my-5'>
        <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <div style={{
            "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
            "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
          }}>
            <h5 style={{ "color": "white", "paddingTop": "5px" }}>Raise New Service Request</h5>
          </div>
          <FormGroup>
            <div className='p-2'><Label style={{ fontWeight: "bold" }} for="vehicle">Select Your Vehicle</Label></div>
            <select id="vehicle" name="vehicle" value={service.vehicle} onChange={handleChange}>
              <option>All</option>
              {vehicles.map((vech) => {
                return (
                  <option value={vech.type} key={vech.id}>{vech.type}</option>
                )
              })}
            </select>
          </FormGroup>
          <FormGroup>
            <div className='p-2'><Label style={{ fontWeight: "bold" }} for="vehicleNumber">Vehicle Number</Label></div>
            <Input
              id="vehicleNumber"
              name="vehicleNumber"
              placeholder="Vehicle placeholder"
              type="text"
              value={service.vehicleNumber}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <div className='p-2'><Label style={{ fontWeight: "bold" }} for="carMYear">Car Manufacture Year</Label></div>
            <Input
              id="carMYear"
              name="carMYear"
              placeholder="Car Manufacturing Year"
              type="text"
              value={service.carMYear}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <div className='p-2'><Label style={{ fontWeight: "bold" }} for="bookDate">Book Date</Label></div>
            <Input
              id="bookDate"
              name="bookDate"
              placeholder="Book Date placeholder"
              type="text"
              value={service.bookDate}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <div className='p-2'><Label style={{ fontWeight: "bold" }} for="SelectService">Select Service</Label></div>
            <Row style={{ marginTop: "10px", display: 'flex', flexWrap: 'wrap',justifyContent:'space-evenly' }}>
              {offerservices.map((offService) => {
                return (
                  <Col>
                    <Card className="m-2" style={{ "min-height": "375px",display:'flex', 'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                      <Card.Img src='https://www.supermechanic.in/wp-content/uploads/2018/06/ATF_supermechanic-_img.png' />
                      <Card.Body>
                        <Card.Title tag="h5">Name:{offService.serviceName}</Card.Title>
                        <Card.Subtitle>Price:{offService.servicePrice}</Card.Subtitle>
                        <Card.Text style={{ minHeight: '80px' }}>Details:{offService.serviceDescription}</Card.Text>
                        <FormGroup check>
                          <Input
                            id="serviceName"
                            name="serviceName"
                            type="radio"
                            value={offService.serviceName}
                            onChange={(e) => handleChange(e, offService)}
                          />
                          {' '}
                          <Label check>Select</Label>
                        </FormGroup>
                        {/* <Button href='#' style={{ backgroundColor: "#007580" }}>CheckOut</Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </FormGroup>
          <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Submit</Button><br /><br />
          {show && <div className="modal show" style={{ display: 'block', position: 'absolute' }}>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Confirm</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Confirm Your Request</p>
              </Modal.Body>
              <Modal.Footer>
                <Buttons style={{ backgroundColor: "red" }} onClick={() => { setShow(false); }}>Cancel</Buttons>
                <Buttons style={{ backgroundColor: "#007580" }} onClick={() => { setShow(false); navigate("/userServiceDashboard"); }}>Confirm</Buttons>
              </Modal.Footer>
            </Modal.Dialog>
          </div>}
        </div>
      </Form>
    </Container>
  )
}

export default User