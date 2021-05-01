import React, { Component } from 'react';
import axios from "axios";

export default class AddUser extends Component {
    state = {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "",
        hoTen: "",
    }
    handleChange = (e) => {
        let target = e.target;
        this.setState({[e.target.name]:e.target.value},()=>{
            console.log(this.state);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var form_data = new FormData();
        for(var key in this.state){
            form_data.append(key,this.state[key]);
        }

        axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            method: "POST",
            data:form_data,
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err.response.data);
        })
    }
    render() {
        return (
                <>
                    {/* Modal */}
                    <div className="modal fade" id="modalAddUser" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal__dialog" role="document">
                            <div className="modal-content modalAddMovie__content">
                                <div className="modal-header modalAddMovie__header">
                                    <span className="modalAddMovie__headerText">thêm người dùng</span>
                                </div>
                                <div className="modal-body modalAddMovie__body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label className="form__label">Tài Khoản:</label>
                                            <input name="taiKhoan" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Mật Khẩu:</label>
                                            <input name="matKhau" type="password" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Email:</label>
                                            <input name="email" type="email" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Số Điện Thoại:</label>
                                            <input name="soDt" type="tel" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Mã Nhóm:</label>
                                            <input name="maNhom" value="GP01" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Mã Loại Người Dùng:</label>
                                            <select name="maLoaiNguoiDung" type="text" className="form-control" onChange={this.handleChange}>
                                                <option value="KhachHang">Khách Hàng</option>
                                                <option value="QuanTri">Quản Trị</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Họ Tên:</label>
                                            <input name="hoTen" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <button type="submit" className="form-control">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        )
    }
}

