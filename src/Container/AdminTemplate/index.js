import React from "react";
import {Route} from "react-router-dom";
import NavbarAdmin from "./../../Component/NavbarAdmin";

function AdminLayout(props){
    return(
        <>
            <NavbarAdmin/>
            {props.children}
        </>
    )
}

export default function AdminTemplate({Component,...props}){
    return(
        <Route
            {...props}
            render={(propsComponent) => (
                <AdminLayout>
                    <Component {...propsComponent}/>
                </AdminLayout>
            )}
        />
    );
}