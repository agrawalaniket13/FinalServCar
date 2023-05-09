import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
    return (
        <Container>
            <Row style={{ marginTop: "10px" }}>
                <Col md={4}>
                    <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580" }}>
                        <Card.Img height={"300px"} src='https://img.freepik.com/free-vector/car-service-center-accessories-composition_98292-7431.jpg?w=740&t=st=1673068598~exp=1673069198~hmac=4febdce971b8dd2a08c772e052a51d1f2db335bd08b7c7b0454f00e4698cb6aa' />
                        <Card.Body>

                            <Card.Title>Service History</Card.Title>
                            <Button style={{ backgroundColor: "#007580" }}><Link to="/userServiceDashboard" style={{textDecoration: 'none',color:"white"}}>View</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} style={{ height: "20px" }}>
                    <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580 ", backgroundColor: "", border: "2px solid #007580" }}>
                        <Card.Img height={"300px"} src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1673371092~exp=1673371692~hmac=1dabdffb9117eb8beea82654d81bbc74122f936503d6c2d4cc6f82ff49124fa2' />
                        <Card.Body>
                            <Card.Title>Enquiry History</Card.Title>
                            {/* <Button href='/userEnquiryDashboard' style={{ backgroundColor: "#007580" }}>View</Button> */}
                            <Button style={{ backgroundColor: "#007580" }}><Link to="/userEnquiryDashboard" style={{textDecoration: 'none',color:"white"}}>View</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserDashboard