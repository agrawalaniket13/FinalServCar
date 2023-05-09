import { combineReducers } from "redux";
import UserReducer from './UserReducer'
import MechanicReducer from './MechanicReducer'
import VehicleReducer from './VehicleReducer'
import ServiceReducer from './ServiceReducer'
import ServiceOfferedReducer from './ServiceOfferedReducer'
import EnquiryReducer from './EnquiryReducer'

const reducers=combineReducers({
    users:UserReducer,
    mechanics:MechanicReducer,
    vehicles:VehicleReducer,
    services:ServiceReducer,
    offerservices:ServiceOfferedReducer,
    enquirys:EnquiryReducer
})

export default reducers