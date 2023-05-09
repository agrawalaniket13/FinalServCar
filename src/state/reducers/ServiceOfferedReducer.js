const reducer = (offerservices = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'get_Offered_Service':
            offerservices = action.payload;
            return offerservices;
        case 'del_Offered_Service':
            offerservices = action.payload;
            return offerservices;
        case 'add_Offered_Service':
            offerservices = [...offerservices,action.payload];
            return offerservices;
        case 'upd_Offered_Service':
            return offerservices;
        default:
            return offerservices
    }
}
export default reducer