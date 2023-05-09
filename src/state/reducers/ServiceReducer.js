const reducer = (services = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'get_Service':
            services = action.payload;
            return services;
        case 'del_Service':
            services = action.payload;
            return services;
        case 'fetch_Service':
            services = action.payload;
            return services;
        case 'add_Service':
            services = [...services, action.payload];
            return services;
        case 'add_User_Service':
            services = [...services, action.payload];
            return services;
        case 'upd_Service':
            return services;
        default:
            return services
    }
}
export default reducer