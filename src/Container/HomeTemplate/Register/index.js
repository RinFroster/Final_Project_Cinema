import React, { useState } from 'react';
import { connect } from "react-redux";
import { fetchRegisterApi } from './module/action';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Register(props) {
  const [Register, setRegister] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  })

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegister(
      Register => ({ ...Register, [name]: value })
    )
  }
  const handleLogin = (e) => {
    // e.preventDefault();
    props.fetchRegister(Register);

  }
  console.log(props.err)
  // const renderNoti = ()=>{
  //     const { err } = props;
  //     console.log(err)
  // if(err){
  //   return <div className="alert alert-danger">{err.response.err}</div>
  // }
  
  return (
    <div className="register">
      <div className="register__content">
        <h3>Đăng ký</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài khoản</label>
            <input type="text" {...register("taiKhoan", { required: 'Tài khoản không được rỗng'})} 
            className="form-control" name="taiKhoan" onChange={handleOnChange} />
            {errors.taiKhoan && <span className="">{errors.taiKhoan.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Mật khẩu</label>
            <input type="password" {...register("matKhau", {required:"Mật khẩu không được rỗng"})} className="form-control" name="matKhau" onChange={handleOnChange} />
            {errors.matKhau && <span>{errors.matKhau.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" {...register('email',
            {required: 'Email không được rỗng', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
            message:'Vui lòng nhập đúng dạng Email'}} )}  
            className="form-control" name="email" onChange={handleOnChange} />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="soDt">Sô điện thoại</label>
            <input type="text" {...register("soDt", 
            {required: 'Số điện thoại không được trống', pattern: {value:/^[0-9]+$/, message:'Vui lòng nhập số điện thoại'}})} 
            className="form-control" name="soDt" onChange={handleOnChange} />
            {errors.soDt && <span >{errors.soDt.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="maNhom">Mã nhóm</label>
            <select className="form-control" {...register("maNhom")} name="maNhom" onChange={handleOnChange} >
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="hoTen">Họ tên</label>
            <input type="text" {...register("hoTen",{required:'Họ tên không được rỗng'})} className="form-control" name="hoTen" onChange={handleOnChange} />
            {errors.hoTen && <span>{errors.hoTen.message}</span>}
          </div>
          <button type="submit" className="btn btn-success">
            Đăng ký
            </button>
          <div className="mt-2">
            <Link to="/Login">Bạn đã có tài khoản</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    err: state.RegisterReducer.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegister: (user) => {
      dispatch(fetchRegisterApi(user))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)