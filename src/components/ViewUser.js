import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table  , Button,Modal} from 'reactstrap'
import { userActions } from '../state/index'
import { useNavigate } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";


const ViewUser = () => {
    const navigate=useNavigate()
    const users=useSelector(state=>state.users)
   console.log({users},"users list")
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(userActions.getUser())
    },[])
    const handleDelete=(id)=>{
        if(window.confirm("are you sure ?")){
            dispatch(userActions.deleteUser(id))
        }
    }
    
  return (
    <Container>
        <div>
            <Link to="/addUser"><Button style={{backgroundColor:"#007580",marginTop:"10px"}}>Add User</Button></Link>
        </div>
            <Table striped bordered hover style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",color:"#007580" ,backgroundColor:"",border:"2px solid #007580",marginTop:"10px",marginBottom:"50px"}}>
                <thead style={{textAlign:"center",backgroundColor:"#007580",color:"white"}}>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Update</th>
                    {/* <th>Delete</th> */}
                    <th>Delete</th>
                </thead>
                <tbody style={{textAlign:"center"}}>
                {users.map((user) => {
                    return <tr>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        {/* <td><BiPencil></BiPencil></td> */}
                        <td><Button color="success" onClick={()=>{navigate("/updateUser",{state:{user:user}})}}><BiEdit></BiEdit></Button></td>
                        {/* <td><Button color="danger" onClick={()=>{dispatch(userActions.deleteUser(user.id))}}>Delete</Button></td> */}
                        <td><Button color="danger" onClick={()=>handleDelete(user.id)}><BiTrash></BiTrash></Button></td>
                        {/* <td><MdOutlineDelete color="#007580" fontSize="22px"></MdOutlineDelete></td> */}
                    </tr>
                })}
                </tbody>
            </Table>
    </Container>
  )
}

export default ViewUser