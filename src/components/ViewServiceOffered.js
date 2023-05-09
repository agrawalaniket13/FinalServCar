import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table, Button, Label } from 'reactstrap'
import { serviceOfferedActions } from '../state/index'
import { useNavigate } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";

const ViewServiceOffered = () => {
    const navigate = useNavigate()
    const offerservices = useSelector(state => state.offerservices)
    console.log(typeof (offerservices))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(serviceOfferedActions.getOfferedService())
    }, [])
    const handleDelete=(offeredServicesid)=>{
        if(window.confirm("are you sure ?")){
            dispatch(serviceOfferedActions.deleteOfferedService(offeredServicesid))
        }
    }
    

    return (
        <Container>
            <div>
                {/* <Button href="/addOfferService" style={{ backgroundColor: "#007580", marginTop: "10px" }}>Add Offered Service</Button> */}
                <Button style={{ backgroundColor: "#007580", marginTop: "10px" }}><Link to="/addOfferService" style={{textDecoration: 'none',color:"white"}}>Add Offered Service</Link></Button>
            </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>offeredServicesid</th>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Update</th>
                    <th>Delete</th>

                </thead>
                <tbody style={{ textAlign: "center" }}>
                    {offerservices.map((offerservice) => {
                        return <tr>
                            <td>{offerservice.offeredServicesid}</td>
                            <td>{offerservice.serviceName}</td>
                            <td>{offerservice.serviceDescription}</td>
                            <td>{offerservice.servicePrice}</td>
                            <td><Button color="success" onClick={() => { navigate("/updOfferService", { state: { offerservice: offerservice } }) }}><BiEdit></BiEdit></Button></td>
                            {/* <td><Button color="danger" onClick={()=>{dispatch(serviceOfferedActions.deleteOfferedService(offerservice.id))}} >Delete</Button></td> */}
                            <td><Button color="danger" onClick={()=>handleDelete(offerservice.offeredServicesid)}><BiTrash></BiTrash></Button></td>

                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewServiceOffered