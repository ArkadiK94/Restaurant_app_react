const menuLoaded = (serverMenuItems)=>{
    return{
        type:'Menu_Page_Loaded',
        itemRecived : serverMenuItems
    };
};

export {
    menuLoaded
}