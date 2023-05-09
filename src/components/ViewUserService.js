import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table, Button, Label } from 'reactstrap'
import { serviceActions } from '../state/index'
import { useNavigate } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";

const ViewUserService = () => {
    const navigate = useNavigate()
    var services = useSelector(state => state.services)
    console.log(typeof (services))
    const dispatch = useDispatch()
    

    // const filterItem = (categItem) => {
    //     const updatedItem = services.filter((curElem) => {
    //         return curElem.vehicle === categItem;
    //     })
    //     console.log(updatedItem)
    //     //services=updatedItem
    // }

    useEffect(() => {
        dispatch(serviceActions.getService())
    }, [])
    const handleDelete=(servicesid)=>{
        if(window.confirm("are you sure ?")){
            dispatch(serviceActions.deleteService(servicesid))
        }
    }
    

    return (
        <Container>
            <div>
                {/* <Button href="/addService" style={{ backgroundColor: "#007580", marginTop: "10px"}}>Add Service</Button> */}
                <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/addService" style={{textDecoration: 'none',color:"white"}}>Add Service</Link></Button>
                </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>Sr.No</th>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Vehicle Number</th>
                    <th>Book Date</th>
                    <th>Total Cost</th>
                    <th>Mechanic</th>
                    <th>Vehicle</th>
                    <th>Status</th>
                    <th>Close Service</th>
                    <th>Update</th>
                    <th>Delete</th>

                </thead>
                <tbody style={{ textAlign: "center" }}>
                    {services.map((service) => {
                        return <tr>
                            <td>{service.servicesid}</td>
                            <td>{service.serviceName}</td>
                            <td>{service.description}</td>
                            <td>{service.vehicleNumber}</td>
                            <td>{service.bookDate}</td>
                            <td>{service.cost}</td>
                            <td>{service.mechanic}</td>
                            <td>{service.vehicle}</td>
                            <td>{service.status ? 'open' : 'close'}</td>
                            <td>{service.status ? <Button color="success" onClick={() => { dispatch(serviceActions.fetchService(service)) }}>Close</Button> : <p>No pending</p>}</td>
                            <td><Button color="success" onClick={() => { navigate("/updService", { state: { service: service } }) }}><BiEdit></BiEdit></Button></td>
                            <td><Button color="danger" onClick={()=>handleDelete(service.servicesid)}><BiTrash></BiTrash></Button></td>

                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewUserService