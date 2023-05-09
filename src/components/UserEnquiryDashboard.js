import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table, Button, Label } from 'reactstrap'
import { enquiryActions } from '../state/index'
import { useNavigate,Link } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";

const UserEnquiryDashboard = () => {
    const navigate = useNavigate()
    const enquirys = useSelector(state => state.enquirys)
    console.log(typeof (enquirys))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(enquiryActions.getEnquiry())
    }, [])
    return (
        <Container>
            <div>
                {/* <Button href="/userRaiseEnquiry" style={{ backgroundColor: "#007580", marginTop: "10px" }}>Add Enquiry</Button> */}
                <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/userRaiseEnquiry" style={{textDecoration: 'none',color:"white"}}>Add Enquiry</Link></Button>
            </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", 
            backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Details</th>
                    <th>Response</th>
                </thead>
                <tbody>
                    {
                        enquirys.filter((data) => data.userId == sessionStorage.getItem("authenticatedUser")).map((d) => {
                            return <tr>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phoneno}</td>
                                <td>{d.details}</td>
                                <td>{d.response}</td>
                            </tr>
                        })}
                </tbody>
            </Table>
        </Container>
    )
}

export default UserEnquiryDashboard