import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table, Button } from 'reactstrap'
import { enquiryActions } from '../state/index'
import { useNavigate } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";

const ViewEnquiry = () => {
    const navigate = useNavigate()
    const enquirys = useSelector(state => state.enquirys)
    console.log(typeof (enquirys))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(enquiryActions.getEnquiry())
    }, [])
    const handleDelete = (id) => {
        if (window.confirm("are you sure ?")) {
            dispatch(enquiryActions.deleteEnquiry(id))
        }
    }
    return (
        <Container>
            <div>
                {/* <Button href="/addEnquiry" style={{ backgroundColor: "#007580", marginTop: "10px" }}>Add Enquiry</Button> */}
                <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/addEnquiry" style={{textDecoration: 'none',color:"white"}}>Add Enquiry</Link></Button>
            </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#4C0033 ", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Details</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                    {enquirys.map((enquiry) => {
                        return <tr>
                            <td>{enquiry.name}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.phoneno}</td>
                            <td>{enquiry.details}</td>
                            <td><Button color="success" onClick={() => { navigate("/updEnquiry", { state: { enquiry: enquiry } }) }}><BiEdit></BiEdit></Button></td>
                            <td><Button color="danger" onClick={() => handleDelete(enquiry.id)}><BiTrash></BiTrash></Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewEnquiry