import { store } from "../store";

const getVehicle=()=>{
    return async () => {
        const data = await fetch("https://localhost:7148/api/VehicleCategories");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"get_Vehicle",payload:parsedData})
    }
}

const deleteVehicle=(vehicleid)=>{
    return async () => {
        const data=await fetch(`https://localhost:7148/api/VehicleCategories/${vehicleid}`,{method:'delete'});
        console.log(data);
        const response= await data.json();
        console.log(response)
        const data1 = await fetch("https://localhost:7148/api/VehicleCategories");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({type:"del_Vehicle",payload:parsedData1})
        
    }
}

const addVehicle=(vehicle)=>{
    return async () => {
        const data = await fetch("https://localhost:7148/api/VehicleCategories", {
            'method':'POST',
            'body':JSON.stringify({
                type:vehicle.type, 
                description:vehicle.description,
                details:vehicle.details
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"add_Vehicle",payload:parsedData})
    }
}

const updVehicle=(vehicle)=>{
    return async () => {
        const data = await fetch(`https://localhost:7148/api/VehicleCategories/${vehicle.vehicleid}`, {
            'method':'PUT',
            'body':JSON.stringify({
                vehicleid:vehicle.vehicleid,
                type:vehicle.type, 
                description:vehicle.description,
                details:vehicle.details
             }),
             'headers':{"Content-type":"application/json"}
        });
        getVehicle();
        //const parsedData = await data.json()
        //console.log(parsedData)
        //store.dispatch({type:"upd_Vehicle",payload:parsedData})
    }
}


export {getVehicle,deleteVehicle,addVehicle,updVehicle}