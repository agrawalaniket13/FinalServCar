import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table, Button, Label } from 'reactstrap'
import { serviceActions } from '../state/index'
import { useNavigate,Link } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";

const UserServiceDashboard = () => {
    const navigate = useNavigate()
    var services = useSelector(state => state.services)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(serviceActions.getService())
    }, [])
    return (
        <Container>
            <div>
                {/* <Button href="/user" style={{ backgroundColor: "#007580", marginTop: "10px" }}>Raise Service</Button> */}
                <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/user" style={{textDecoration: 'none',color:"white"}}>Raise Service</Link></Button>
            </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>Sr.No</th>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Vehicle Number</th>
                    <th>Book Date</th>
                    <th>Total Cost</th>
                    <th>Vehicle</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                        services.filter((data) => data.userId == sessionStorage.getItem("authenticatedUser")).map((d) => {
                            return <tr>
                                <td>{d.servicesid}</td>
                                <td>{d.serviceName}</td>
                                <td>{d.description}</td>
                                <td>{d.vehicleNumber}</td>
                                <td>{d.bookDate}</td>
                                <td>{d.cost}</td>
                                <td>{d.vehicle}</td>
                                <td>{d.status ? 'open' : 'close'}</td>
                            </tr>
                        })}
                </tbody>
            </Table>
        </Container>
    )
}

export default UserServiceDashboard