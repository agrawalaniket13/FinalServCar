const reducer = (users = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'get_User':
            users = action.payload;
            return users;
        case 'del_User':
            users  = action.payload
            return users;
        case 'add_User':
            users = [...users,action.payload];
            return users;
        case 'upd_User':
            return users;
        default:
            return users
    }
}
export default reducer