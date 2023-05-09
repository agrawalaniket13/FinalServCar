const reducer = (mechanics = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'get_Mechanic':
            mechanics = action.payload;
            return mechanics;
        case 'del_Mechanic':
            mechanics = action.payload;
            return mechanics;
        case 'add_Mechanic':
            mechanics = [...mechanics,action.payload];
            return mechanics;
        case 'upd_Mechanic':
            return mechanics;
        default:
            return mechanics
    }
}
export default reducer