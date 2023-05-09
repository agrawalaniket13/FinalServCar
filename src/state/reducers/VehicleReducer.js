const reducer = (vehicles = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'get_Vehicle':
            vehicles = action.payload;
            return vehicles;
        case 'del_Vehicle':
            vehicles = action.payload;
            return vehicles;
        case 'add_Vehicle':
            vehicles = [...vehicles,action.payload];
            return vehicles;
        case 'upd_Vehicle':
            return vehicles;
        default:
            return vehicles
    }
}
export default reducer