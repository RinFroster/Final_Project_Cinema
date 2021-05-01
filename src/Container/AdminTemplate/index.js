import React from "react";
import {Route} from "react-router-dom";
import NavbarAdmin from "./../../Component/NavbarAdmin";
import AdminHeader from "./AdminHeader";

function AdminLayout(props){
    return(
        <>
            <NavbarAdmin/>
            <AdminHeader/>   
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