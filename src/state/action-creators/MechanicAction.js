import { store } from "../store";

const getMechanic=()=>{
    return async () => {
        const data = await fetch("https://localhost:7148/api/Mechanics");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"get_Mechanic",payload:parsedData})
    }
}

const deleteMechanic=(mechanicsid)=>{
    return async () => {
        const data=await fetch(`https://localhost:7148/api/Mechanics/${mechanicsid}`,{method:'delete'});
        const response= await data.json();
        console.log(response)
        //fetching deleted mechanics after deleting mechanic
        const data1 = await fetch("http://localhost:5000/mechanics");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({type:"del_Mechanic",payload:parsedData1})
    }
}

const addMechanic=(mechanic)=>{
    return async () => {
        const data = await fetch("https://localhost:7148/api/Mechanics", {
            'method':'POST',
            'body':JSON.stringify({
                email:mechanic.email, 
                password:mechanic.password,
                name:mechanic.name
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"add_Mechanic",payload:parsedData})
    }
}

const updMechanic=(mechanic)=>{
    return async () => {
        const data = await fetch(`https://localhost:7148/api/Mechanics/${mechanic.mechanicsid}`, {
            'method':'PUT',
            'body':JSON.stringify({
                mechanicsid: mechanic.mechanicsid,
                email:mechanic.email, 
                password:mechanic.password,
                name:mechanic.name
             }),
             'headers':{"Content-type":"application/json"}
        });
        getMechanic();
        //const parsedData = await data.json()
        //console.log(parsedData)
        //store.dispatch({type:"upd_Mechanic",payload:parsedData})
    }
}

export {getMechanic,deleteMechanic,addMechanic,updMechanic}