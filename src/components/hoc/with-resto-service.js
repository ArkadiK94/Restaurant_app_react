import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = (Wrapped) => {
    return (props)=>{
        return(
            <RestoServiceContext.Consumer>
                {
                    (restoService)=>{
                        return (
                            <Wrapped {...props} restoService={restoService}>
                            </Wrapped>
                        )
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;