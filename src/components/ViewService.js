import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const ViewService = () => {
    return (
        <Container>
            {/* <div>
                <Button href="/viewUserService" style={{ backgroundColor: "#007580", marginTop: "10px" }}>User Service</Button>
                <Button href="/viewOfferService" style={{ backgroundColor: "#007580", marginTop: "10px" }}>Service Offered</Button>
            </div> */}
            <Row style={{ marginTop: "10px" }}>
            <Col md={4}>
                    <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",color:"#007580" ,backgroundColor:"",border:"2px solid #007580"}}>
                    <Card.Img height={"300px"} src='https://img.freepik.com/free-vector/happy-user-giving-positive-review-online-service_74855-20137.jpg?w=740&t=st=1673334375~exp=1673334975~hmac=a505436362e12aa03c5341433d7041e1b3b2a4dd1165008dc1feb047ceab94a9' />
                        <Card.Body>
                            
                            <Card.Title>User Service</Card.Title>
                            {/* <Button href='/viewUserService' style={{backgroundColor:"#007580"}}>View</Button> */}
                            <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/viewUserService" style={{textDecoration: 'none',color:"white"}}>View</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} style={{height:"20px"}}>
                    <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",color:"#007580 " ,backgroundColor:"",border:"2px solid #007580"}}>
                    <Card.Img height={"300px"} src='https://img.freepik.com/free-vector/chatbot-customer-service-abstract-concept_335657-3037.jpg?w=740&t=st=1673334555~exp=1673335155~hmac=914cab0ef91fbc5c93b2f534d9127ee36a7e2901ace5e40604d1043a1ce5bfbd' />
                        <Card.Body>
                            <Card.Title>Service Offered</Card.Title>
                            {/* <Button href='/viewOfferService' style={{backgroundColor:"#007580"}}>View</Button> */}
                            <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/viewOfferService" style={{textDecoration: 'none',color:"white"}}>View</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewService