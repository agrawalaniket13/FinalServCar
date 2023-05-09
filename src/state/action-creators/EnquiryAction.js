import { store } from "../store";

const getEnquiry=()=>{
    console.log("aniket")
    return async () => {
        const data = await fetch("http://localhost:5000/enquiry");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"get_Enquiry",payload:parsedData})
    }
}


const deleteEnquiry=(id)=>{
    return async () => {
        console.log("id",id)
        const data=await fetch(`http://localhost:5000/enquiry/${id}`,{method:'delete'});
        console.log(data);
        const response= await data.json();
        console.log(response)
        const data1 = await fetch("http://localhost:5000/enquiry");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({type:"del_Enquiry",payload:parsedData1})
    }
}

const addEnquiry=(enquiry)=>{
    return async () => {
        const data = await fetch("http://localhost:5000/enquiry", {
            'method':'POST',
            'body':JSON.stringify({
                name:enquiry.name, 
                email:enquiry.email,
                phoneno:enquiry.phoneno,
                details:enquiry.details
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"add_Enquiry",payload:parsedData})
    }
}

const updEnquiry=(enquiry)=>{
    return async () => {
        const data = await fetch(`http://localhost:5000/enquiry/${enquiry.id}`, {
            'method':'PUT',
            'body':JSON.stringify({
                name:enquiry.name, email:enquiry.email,phoneno:enquiry.phoneno,
                details:enquiry.details,response:enquiry.response,userId:enquiry.userId
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"upd_Enquiry",payload:parsedData})
    }
}

const addUserEnquiry=(enquiry)=>{
    return async () => {
        const data = await fetch("http://localhost:5000/enquiry", {
            'method':'POST',
            'body':JSON.stringify({
                name:enquiry.name, 
                email:enquiry.email,
                phoneno:enquiry.phoneno,
                details:enquiry.details,
                userId: sessionStorage.getItem('authenticatedUser')
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"add_User_Enquiry",payload:parsedData})
    }
}

export {getEnquiry,deleteEnquiry,addEnquiry,updEnquiry,addUserEnquiry}