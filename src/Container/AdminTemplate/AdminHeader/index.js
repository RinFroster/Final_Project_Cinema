import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import { USRELOGIN,TOKEN } from '../../../util/settings';
import {useSelector} from "react-redux"

function AdminHeader(props) {
    const {data} = useSelector(state => state.AuthPageReducer)
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
                <div className="adminPage__userName">{data ? <NavLink className="user__account__name" to="/">
              {data.taiKhoan}(<a onClick={()=>{
                localStorage.removeItem(USRELOGIN);
                localStorage.removeItem(TOKEN);
                window.location.reload();
              }}>Đăng xuất</a>)
            </NavLink> : <NavLink className="user__account__name" to="/auth">Đăng nhập</NavLink>}</div>
            </div>
        </div>
    )
}
export default AdminHeader