const menuLoaded = (newMenu)=>{
    return{
        type:'Menu_Loaded',
        payload : newMenu
    };
};
const menuRequest = ()=>{
    return{
        type:'Menu_Request'
    };
};
const menuError = ()=>{
    return{
        type:'Menu_Error',
    };
};

export {
    menuLoaded,
    menuRequest,
    menuError
}