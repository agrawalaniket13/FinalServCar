import { store } from "../store";

const getOfferedService = () => {
    return async () => {
        const data = await fetch("https://localhost:7148/api/OfferedServices");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "get_Offered_Service", payload: parsedData })
    }
}

const deleteOfferedService = (offeredServicesid) => {
    return async () => {
        const data = await fetch(`https://localhost:7148/api/OfferedServices/${offeredServicesid}`, { method: 'delete' });
        console.log(data);
        const response = await data.json();
        console.log(response)
        const data1 = await fetch("https://localhost:7148/api/OfferedServices");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({ type: "del_Offered_Service", payload: parsedData1 })
    }
}

// const fetchService = (service) => {
//     return async () => {
//         const requestOptions = {
//             'method': 'PATCH',
//             'body': JSON.stringify({
//                 status: false
//             }),
//             'headers': { "Content-type": "application/json" }
//         };
//         const data = await fetch(`http://localhost:5000/services/${service.offeredServicesid}`, requestOptions)
//         const parsedData = await data.json();
//         console.log(parsedData)
//         store.dispatch({ type: "fetch_Service", payload: parsedData })
//     }
// }

const addOfferedService = (offerservice) => {
    return async () => {
        const data = await fetch("https://localhost:7148/api/OfferedServices", {
            'method': 'POST',
            'body': JSON.stringify({
                serviceName: offerservice.serviceName, 
                serviceDescription: offerservice.serviceDescription,
                servicePrice: offerservice.servicePrice
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "add_Offered_Service", payload: parsedData })
    }
}

const updOfferedService = (offerservice) => {
    return async () => {
        const data = await fetch(`https://localhost:7148/api/OfferedServices/${offerservice.offeredServicesid}`, {
            'method': 'PUT',
            'body': JSON.stringify({
                offeredServicesid:offerservice.offeredServicesid,
                serviceName: offerservice.serviceName, 
                serviceDescription: offerservice.serviceDescription, 
                servicePrice: offerservice.servicePrice
            }),
            'headers': { "Content-type": "application/json" }
        });
        getOfferedService();
        //const parsedData = await data.json()
        //console.log(parsedData)
        //store.dispatch({ type: "upd_Offered_Service", payload: parsedData })
    }
}

export {getOfferedService,deleteOfferedService,addOfferedService,updOfferedService}