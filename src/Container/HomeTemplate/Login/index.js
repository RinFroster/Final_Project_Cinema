import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { fetchLoginApi } from './module/action';
import {Link , NavLink}  from "react-router-dom";
import {useForm} from "react-hook-form";


function Login(props) {

  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  const [login, setLogin] = useState({
    taiKhoan :'',
    matKhau : '',
  })

  const handleOnChange = (event) =>{
    const {name, value} = event.target;
    setLogin(login => ({...login, [name]: value }))

  }
  const handleLogin = (event) =>{
    // console.log(login);
    // event.preventDefault();
    props.fetchLogin(login, props.history);
  }
  const renderNoti = ()=>{
    const { err } = props;
    if(err){
      return <div className="alert alert-danger">{err.response.data}</div>
    }
  }

    return (
        <div className="signIn">
          <div className="signIn__content">
            <h3>Đăng nhập</h3>
            <form onSubmit = {handleSubmit(handleLogin)}>
              {renderNoti()}
              <div className="form-group">
                <label htmlFor="taiKhoan">Tài khoản</label>
                <input type="text" {...register("taiKhoan", {required: 'Tài khoản không được trống'})} className="form-control" name="taiKhoan" onChange = {handleOnChange}/>
                {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="matKhau">Mật khẩu</label>
                <input type="password" {...register('matKhau',{required: 'Mật khẩu không được rỗng'})} className="form-control" name="matKhau" onChange = {handleOnChange}/>
                {errors.matKhau && <span>{errors.matKhau.message}</span>}
              </div>
              <div className="ml-2 mb-2">
                <NavLink to="/Register">Đăng ký</NavLink>
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
            </div>
          </div>
    )
}
const mapStateToProps = (state) =>{
  return {
    err:state.LoginReducer.err,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchLogin: (user, history) =>{
      dispatch(fetchLoginApi(user, history));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);