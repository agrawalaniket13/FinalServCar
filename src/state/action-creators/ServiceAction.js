import { store } from "../store";

const getService = () => {
    return async () => {
        const data = await fetch("https://localhost:7148/api/Services");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "get_Service", payload: parsedData })
    }
}

const deleteService = (servicesid) => {
    return async () => {
        console.log("id", servicesid)
        const data = await fetch(`https://localhost:7148/api/Services/${servicesid}`, { method: 'delete' });
        console.log(data);
        const response = await data.json();
        console.log(response)
        const data1 = await fetch("https://localhost:7148/api/Services");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({ type: "del_Service", payload: parsedData1 })
    }
}

const fetchService = (service) => {
    return async () => {
        const requestOptions = {
            'method': 'PATCH',
            'body': JSON.stringify({
                status: "false"
            }),
            'headers': { "Content-type": "application/json" }
        };
        const data = await fetch(`https://localhost:7148/api/Services/${service.servicesid}`, requestOptions)
        const parsedData = await data.json();
        console.log(parsedData)
        store.dispatch({ type: "fetch_Service", payload: parsedData })
    }
}

const addService = (service) => {
    return async () => {
        const data = await fetch("https://localhost:7148/api/Services", {
            'method': 'POST',
            'body': JSON.stringify({
                serviceName: service.serviceName,
                description: service.description,
                status: "true",
                vehicleNumber: service.vehicleNumber,
                bookDate: service.bookDate,
                cost: service.cost,
                mechanic: service.mechanic,
                vehicle: service.vehicle,
                userId: sessionStorage.getItem('authenticatedUser')
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "add_Service", payload: parsedData })
    }
}

const updService = (service) => {
    return async () => {
        const data = await fetch(`https://localhost:7148/api/Services/${service.servicesid}`, {
            'method': 'PUT',
            'body': JSON.stringify({
                servicesid: service.servicesid,
                serviceName: service.serviceName,
                description: service.description,
                status: service.status,
                vehicleNumber: service.vehicleNumber,
                bookDate: service.bookDate,
                cost: service.cost,
                mechanic: service.mechanic,
                vehicle: service.vehicle,
                userId: service.userId
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "upd_Service", payload: parsedData })
    }
}

const addUserService = (service) => {
    return async () => {
        const data = await fetch("https://localhost:7148/api/Services", {
            'method': 'POST',
            'body': JSON.stringify({
                status: "true",
                cost: service.cost,
                description: service.description,
                vehicle: service.vehicle,
                vehicleNumber: service.vehicleNumber,
                carMYear: service.carMYear,
                bookDate: service.bookDate,
                serviceName: service.serviceName,
                userId: sessionStorage.getItem('authenticatedUser')
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "add_User_Service", payload: parsedData })
    }
}

export { getService, deleteService, addService, updService, fetchService, addUserService }