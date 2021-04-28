import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function AdminHeader() {
    return (
        <div className="adminHeader">
            <form action="" className="searchForm">
                <input className="form-control form-control-dark form__searchArea" placeholder="Search" aria-label="Search"></input>
                <button type="submit" className="btnSearch__text" id="btnSearch">
                    <FontAwesomeIcon icon={faSearch} className="search__icon"/>
                </button>
            </form>
            
            <div className="adminPage__user">
                <div className="adminPage__avatar">
                    <img src={require("./../../../Asset/img/photo.png").default}/>
                </div>
                <div className="adminPage__userName">trương vĩ hào</div>
            </div>
        </div>
    )
}
export default AdminHeader