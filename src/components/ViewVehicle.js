import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table, Button } from 'reactstrap'
import { vehicleActions } from '../state/index'
import { useNavigate } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";

const ViewVehicle = () => {
    const navigate = useNavigate()
    const vehicles = useSelector(state => state.vehicles)
    console.log(typeof (vehicles))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(vehicleActions.getVehicle())
    }, [])
    const handleDelete = (vehicleid) => {
        if (window.confirm("are you sure ?")) {
            dispatch(vehicleActions.deleteVehicle(vehicleid))
        }
    }

    return (
        <Container>
            <div>
                {/* <Button href="/addVehicle"  style={{backgroundColor:"#007580",marginTop:"10px"}}>Add Vehicle</Button> */}
                <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/addVehicle" style={{ textDecoration: 'none', color: "white" }}>Add Vehicle</Link></Button>
            </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Details</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                    {vehicles.map((vehicle) => {
                        return <tr>
                            <td>{vehicle.type}</td>
                            <td>{vehicle.description}</td>
                            <td>{vehicle.details}</td>
                            <td><Button color="success" onClick={() => { navigate("/updVehicle", { state: { vehicle: vehicle } }) }}><BiEdit></BiEdit></Button></td>
                            {/* <td><Button color="danger" onClick={()=>{dispatch(vehicleActions.deleteVehicle(vehicle.id))}}>Delete</Button></td> */}
                            <td><Button color="danger" onClick={() => handleDelete(vehicle.vehicleid)}><BiTrash></BiTrash></Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewVehicle