import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table, Button } from 'reactstrap'
import { mechanicActions } from '../state/index'
import { useNavigate } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";



const ViewMechanic = () => {
    const navigate = useNavigate()
    const mechanics = useSelector(state => state.mechanics)
    console.log(typeof (mechanics))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(mechanicActions.getMechanic())
    }, [])

    const handleDelete = (mechanicsid) => {
        if (window.confirm("are you sure ?")) {
            dispatch(mechanicActions.deleteMechanic(mechanicsid))
        }
    }

    return (
        <Container>
            <div>
                {/* <Button href="/addMechanic"  style={{backgroundColor:"#007580",marginTop:"10px"}}>Add Mechanic</Button> */}
                <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/addMechanic" style={{ textDecoration: 'none', color: "white" }}>Add Mechanic</Link></Button>
            </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#4C0033 ", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                    {mechanics.map((mechanic) => {
                        return <tr>
                            <td>{mechanic.email}</td>
                            <td>{mechanic.name}</td>
                            <td><Button color="success" onClick={() => { navigate("/updMechanic", { state: { mechanic: mechanic } }) }}><BiEdit></BiEdit></Button></td>
                            <td><Button color="danger" onClick={() => handleDelete(mechanic.mechanicsid)}><BiTrash></BiTrash></Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewMechanic