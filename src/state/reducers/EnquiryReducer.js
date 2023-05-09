const reducer = (enquirys = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'get_Enquiry':
            enquirys = action.payload;
            return enquirys;
        case 'del_Enquiry':
            enquirys = action.payload;
            return enquirys;
        case 'add_Enquiry':
            enquirys = [...enquirys, action.payload];
            return enquirys;
        case 'add_User_Enquiry':
            enquirys = [...enquirys, action.payload];
            return enquirys;
        case 'upd_Enquiry':
            return enquirys;
        default:
            return enquirys
    }
}
export default reducer