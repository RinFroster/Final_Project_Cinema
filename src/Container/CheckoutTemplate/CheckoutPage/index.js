import React,{useState,useEffect,useSelector} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes
  } from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from 'react-custom-scrollbars';
import Countdown from "react-countdown";
import {Link,NavLink} from "react-router-dom";
import {actCheckoutMovie} from "./modules/action";
import { connect } from 'react-redux';
import modalCheckoutPageError from "./modalCheckoutPage/modalErrorFullSeat";
import modalErrorNotFirstSeat from "./modalCheckoutPage/modalErrorNotFirstSeat";
import modalBodyFullSeat from "./modalCheckoutPage/modalBodyFullSeat";
import modalBodyNotFirstSeat from "./modalCheckoutPage/modalBodyNotFirstSeat";
import modalConfirm from "./modalCheckoutPage/modalConfirm";
import modalTimeOut from "./modalCheckoutPage/modalTimeOut";
import modalErrorInfo from "./modalCheckoutPage/modalErrorInfo";
import $ from "jquery";
import { TOKEN, USRELOGIN } from "../../../util/settings";

function CheckoutPage(props) {
    const getParams = props.match.params.id;
    useEffect(() => {
        props.fetchCheckout(getParams)
    }, [])
    const {data} = props;

    // const { dataUser } = useSelector(state => state.LoginReducer);
    // // // const {taiKhoan} = data;
    // console.log(dataUser);
    
    // Modal Error
    let FormModal = modalCheckoutPageError(modalBodyFullSeat);
    let FormModalNotFirstSeat = modalErrorNotFirstSeat(modalBodyNotFirstSeat);
    let FormModalInfo = modalErrorInfo;
    // Modal Confirm
    let FormModalConfirm = modalConfirm;
    // Modal Time Out
    let FormModalTimeOut = modalTimeOut;
    
    setTimeout(function(){
        $('#modelIdTimeOut').modal({show:true,backdrop:'static'});
        $('#modelId').modal('hide');
        $('#modelIdError').modal('hide');
        $('#modelIdInfo').modal('hide');
        $('#modelIdConfirm').modal('hide');
    }, 300000);

    // render DS A
    const renderSeatListA = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt<17){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe} >
                            {"A" + (item.tenGhe - 0)}
                        </button>
                    </span>
                )
            }
        }))
    }
    // render DS B
    const renderSeatListB = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt>17&&item.stt<34){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe}  >
                            {"B" + (item.tenGhe - 17)}
                        </button>
                    </span>
                )
            }
        }))
    }

    // render DS C
    const renderSeatListC = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt>34&&item.stt<51){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe}  >
                            {"C" + (item.tenGhe - 34)}
                        </button>
                    </span>
                )
            }
        }))
    }

    // render DS D
    const renderSeatListD = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt>51&&item.stt<68){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe}  >
                            {"D" + (item.tenGhe - 51)}
                        </button>
                    </span>
                )
            }
        }))
    }
    
    // render DS E
    const renderSeatListE = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt>68&&item.stt<85){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe}  >
                            {"E" + (item.tenGhe - 68)}
                        </button>
                    </span>
                )
            }
        }))
    }
    
    // render DS F
    const renderSeatListF = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt>85&&item.stt<102){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe}  >
                            {"F" + (item.tenGhe - 85)}
                        </button>
                    </span>
                )
            }
        }))
    }
    
    // render DS G
    const renderSeatListG = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt>102&&item.stt<119){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe}  >
                            {"G" + (item.tenGhe - 102)}
                        </button>
                    </span>
                )
            }
        }))
    }
    
    // render DS H
    const renderSeatListH = () => {
        return(data&&data.danhSachGhe.map((item)=>{
            if(item.stt>119&&item.stt<136){
                return(
                    <span className="listSeat__seatWrapper" key={item.maGhe}>
                        <button className={`seat ${item.loaiGhe} ${item.daDat ? "alreadyChosenSeat" : ""}`} value={item.daDat} onClick={handleChooseSeat} id={item.maGhe}  >
                            {"H" + (item.tenGhe - 119)}
                        </button>
                    </span>
                )
            }
        }))
    }

    const [listSeat,setListSeat] = useState([]);
    const [listSeatForPrice,setListSeatForPrice] = useState([]);
    const [price,setPrice] = useState([]);
    let sumPrice = 0;
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState(null);

    const handleChooseSeat = (e) => {
        const getSeatId = e.target.id;
        const findSeat = document.getElementById(e.target.id);
        const getNoticeId = document.getElementById("notice");
        const getPaymentMethod = document.getElementById("paymentMethodContainer");
        const getBuyBtn = document.getElementsByClassName("btnBuy")[0];
        const getPrice = document.getElementsByClassName("chair__price")[0];
        const getTotalPrice = document.getElementsByClassName("total")[0];
        const renderSeat = document.getElementsByClassName("number")[0];
        const renderSeatMobile = document.getElementsByClassName("seatChosenMobile")[0];
        const getContinueBtn = document.getElementsByClassName("continueBtn")[0];
        const getSeatName = findSeat.innerHTML;
        const getPrevSeat = document.getElementById((getSeatId)-1);
        const getNextSeat = document.getElementById((parseInt(getSeatId) + 1));
        if(findSeat.classList.contains("chosenSeat")){
            findSeat.classList.remove("chosenSeat");
            listSeat&&listSeat.map((item,index)=>{
                if(findSeat.innerHTML===item){
                    listSeat&&listSeat.splice(index,1);
                    price&&price.map((item2,index2)=>{
                        if(index===index2){
                            price&&price.splice(index2,1);
                            if(price&&price.length === 0){
                                sumPrice = 0;
                                getNoticeId.style.display = "block";
                                getPaymentMethod.style.display = "none";
                                getBuyBtn.classList.remove("active");
                                getContinueBtn.classList.add("disabled");
                            }else{
                                price&&price.map(()=>{
                                    sumPrice = price.reduce((b,item) => b + item);
                                })
                            }
                            getPrice.innerHTML = sumPrice + "đ";
                            getTotalPrice.innerHTML = sumPrice + "đ";
                        }
                    })
                }
            })
        }else{
            data&&data.danhSachGhe.map((item)=>{
                if(getSeatId==item.maGhe){
                    listSeatForPrice.push(item)
                    listSeatForPrice&&listSeatForPrice.map((item2)=>{
                        listSeatForPrice.splice(0,1);
                        price.push(item2.giaVe);
                        price&&price.map(()=>{
                            sumPrice = price.reduce((a,item) => a + item );
                        })
                    })
                    findSeat.classList.add("chosenSeat");
                    listSeat.push(getSeatName);
                    if(listSeat.length > 10){
                        $('#modelId').modal('show');
                        listSeat.splice(10);
                        price.splice(10);
                        price&&price.map(()=>{
                            sumPrice = price.reduce((a,item) => a + item );
                        })
                        findSeat.classList.remove("chosenSeat");
                    }
                }
            })
            console.log(getSeatName.slice(1,3));
            if(getSeatName.slice(1,3) === "1" || getSeatName.slice(1,3) === "16"){
                console.log("condition number");
            }else{
                if(getPrevSeat.innerHTML.slice(0,1)===getSeatName.slice(0,1) && getNextSeat.innerHTML.slice(0,1)===getSeatName.slice(0,1)){
                    if(getPrevSeat.innerHTML.slice(1,3)==="1"){
                        if(!(getPrevSeat.classList.contains("chosenSeat"))){
                            $('#modelIdError').modal('show');
                        }
                    }else if(getNextSeat.innerHTML.slice(1,3)==="16"){
                        if(!(getNextSeat.classList.contains("chosenSeat"))){
                            $('#modelIdError').modal('show');
                        }
                    }
                }
            }
            
            getNoticeId.style.display = "none";
            getPaymentMethod.style.display = "block";
            getContinueBtn.classList.remove("disabled");
            getPrice.innerHTML = sumPrice + "đ";
            getTotalPrice.innerHTML = sumPrice + "đ";
        }
        renderSeatMobile.innerHTML = listSeat;
        renderSeat.innerHTML = listSeat;
    }

    const handleClickBuy = () => {
        const getEmail = document.getElementsByClassName("emailCheckout")[0];
        const getPhone = document.getElementsByClassName("phoneCheckout")[0];
        if( getEmail.value==="" || getPhone.value===""){
            $('#modelIdInfo').modal('show');
        }else{
            $('#modelIdConfirm').modal('show');
        }
    }

    const handleOption = (e) => {
        const findChosen = e.target.id;
        const getListPayment = document.getElementById("listChildren");
        if(findChosen === "option3"){
        getListPayment.style.display = "block";
        }else{
            getListPayment.style.display = "none";
        }
    }
    const handleClickOption = () => {
        const getBtn = document.getElementsByClassName("btnBuy")[0];
        getBtn.classList.add("active");
        const getEmail = document.getElementsByClassName("emailCheckout")[0];
        const getPhone = document.getElementsByClassName("phoneCheckout")[0];
        const getBuyBtnMobile = document.getElementById("continueBtnMobile1");
        if( !(getEmail.value==="") || !(getPhone.value==="")){
            getBuyBtnMobile.classList.remove("disabled");
        }
    }
    const handleChooseBank = (e) => {
        const getBankId = e.target.id;
        const getTitleChosen = document.getElementById("titleChosen");
        getTitleChosen.innerHTML = getBankId;
        const getListBank = document.getElementById("listChildren");
        getListBank.style.display = "none";
    }
    const handleClickContinueBtn = (e) => {
        const getContinueBtnMobile = document.getElementById(e.target.id);
        const getBuyTicketMobile = document.getElementById("continueBtnMobile1");
        const getBuyTicketOption = document.getElementsByClassName("buyTicketOption__container")[0];
        const getTitleProgressBar = document.getElementsByClassName("stepTitle")[0];
        if(getContinueBtnMobile&&getBuyTicketMobile&&getBuyTicketOption&&getTitleProgressBar){
            getBuyTicketOption.style.display = "block";
            getTitleProgressBar.innerHTML = "03. thanh toán";
            getContinueBtnMobile.style.display = "none";
            getBuyTicketMobile.classList.remove("visible");
        }
    }
    const handleCheckCoupon = () => {
        const getCouponInput = document.getElementsByClassName("discountCouponCheckout")[0];
        const getCouponBtn = document.getElementsByClassName("applyDiscountCoupon")[0];
        if(!(getCouponInput.value==="")){
            getCouponBtn.classList.remove("disabled");
            getCouponBtn.classList.add("active");
        }else{
            getCouponBtn.classList.add("disabled");
            getCouponBtn.classList.remove("active");
        }
    }
    const handleClickCoupon = () => {
        const getCouponInput = document.getElementsByClassName("discountCouponCheckout")[0];
        getCouponInput.classList.add("disabled")
        getCouponInput.classList.remove("active");
    }
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: 'rgba(35, 49, 86, 0.8)',
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
      };
      const CustomScrollbars = props => (
        <Scrollbars
          renderThumbVertical={renderThumb}
          {...props}
        />
      );

    const Completionist = () => <span>00:00</span>;

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            <span>
              {minutes}:{seconds}
            </span>
          );
        }
    };

    //render
    return (
        <section id="checkoutPage">
            <div className="progressBar__container">
                <div className="leftStep">
                    <ul className="lefStep__progress">
                        <li className="leftStep__item active"><span className="leftStepNumber">01</span> chọn ghế và thanh toán</li>
                        <li className="leftStep__item"><span className="leftStepNumber">02</span> kết quả đặt vé</li>
                    </ul>
                </div>
                <div className="rightStep">
                    <div className="account">
                        <div className="account__avatar"><img src={require("./../../../Asset/CheckoutPage__img/photo.png").default} className="account__icon"/></div>
                        <div className="account__name">Trương Vĩ Hào</div>
                    </div>
                </div>
            </div>

            {/* Mobile ProggressBar */}
            <div className="progressBar__containerMobile">
                <div className="leftMobile">
                    <Link to="/"><FontAwesomeIcon icon={faTimes} className="leftMobile__exit"/></Link>
                </div>
                <div className="centerMobile">
                    <span className="stepTitle">02. chọn ghế</span>
                </div>
                <div className="rightMobile">
                    <div className="imgCircle isLoggedIn">
                        <img src={require("./../../../Asset/CheckoutPage__img/photo.png").default}/>
                    </div>
                </div>
            </div>

            <FormModal/>
            <FormModalNotFirstSeat/>
            <FormModalConfirm/>
            <FormModalTimeOut/>
            <FormModalInfo/>

            <div className="checkoutMain__container">
                <div className="checkoutMain__theaterInfo">
                    <div className="leftTitle">
                        <div className="logoCinema">
                            <img src={require("./../../../Asset/img/theater/BHD.png").default} alt=""/>
                        </div>
                        <div className="contentCinema">
                            <p className="address">
                                <span className="cinemaName">{data&&data.thongTinPhim.tenCumRap}</span>
                            </p>
                            <p className="hour">{data&&data.thongTinPhim.ngayChieu} - {data&&data.thongTinPhim.gioChieu} - {data&&data.thongTinPhim.tenRap}</p>
                        </div>
                    </div>
                    <div className="rightTitle">
                        <p className="timeTitle">thời gian giữ ghế</p>
                        <p className="timeCount">
                            <Countdown zeroPadTime={2} date={Date.now() + 300000} renderer={renderer} />
                        </p>
                    </div>
                </div>
                <div className="checkoutMain__seatMap">
                    <div className="seatMap__container">
                        <div className="room">
                            <div className="screen__container">
                                <div className="screen"></div>
                                <div className="screenName">màn hình</div>
                            </div>
                            <div className="listSeat">
                                <div className="listSeat__container">
                                    <div className="listSeat__rowSeat visible">a</div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">a</span>
                                                </span>
                                            </span>
                                            {renderSeatListA()}
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">b</span>
                                                </span>
                                            </span>
                                            {renderSeatListB()}
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">c</span>
                                                </span>
                                            </span>
                                            {renderSeatListC()}
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">d</span>
                                                </span>
                                            </span>
                                            {renderSeatListD()}
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">e</span>
                                                </span>
                                            </span>
                                            {renderSeatListE()}
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">f</span>
                                                </span>
                                            </span>
                                            {renderSeatListF()}
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">g</span>
                                                </span>
                                            </span>
                                            {renderSeatListG()}
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">h</span>
                                                </span>
                                            </span>
                                            {renderSeatListH()}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="noteSeat">
                            <div className="typeSeat">
                                <span className="seatTypes">
                                    <span className="seatIcon colorNormal"></span>
                                    <span className="nameSeat">ghế thường</span>
                                </span>
                                <span className="seatTypes">
                                    <span className="seatIcon colorVip"></span>
                                    <span className="nameSeat">ghế vip</span>
                                </span>
                                <span className="seatTypes">
                                    <span className="seatIcon colorChoosing"></span>
                                    <span className="nameSeat">ghế đang chọn</span>
                                </span>
                                <span className="seatTypes">
                                    <span className="seatIcon colorChosen"></span>
                                    <span className="nameSeat">ghế đã chọn</span>
                                </span>
                                <span className="seatTypes">
                                    <span className="seatIcon colorNotChosen"></span>
                                    <span className="nameSeat">ghế không thể chọn</span>
                                </span>
                            </div>
                            <div className="positionViews">
                                <span className="positionView">
                                    <span className="lineView lineCenter"></span>
                                    <span className="titleView">ghế trung tâm</span>
                                </span>
                                <span className="positionView">
                                    <span className="lineView lineBeautiful"></span>
                                    <span className="titleView">ghế đẹp</span>
                                </span>
                            </div>
                        </div>
                </div>
            </div>
                
                {/* Mobile Continue Button */}
                <div className="continueBtnMobile">
                    <div className="numberMobile">
                        <p className="seatChosenMobile"></p>
                    </div>
                    <button type="button" className="btn btn-secondary continueBtn disabled" id="continueBtnMobile" onClick={handleClickContinueBtn}>Tiếp Tục</button>
                    <button type="submit" value="submit" className="btn btn-secondary continueBtn visible disabled" id="continueBtnMobile1" onClick={handleClickBuy}>đặt vé</button>
                </div>
            
            <div className="buyTicketOption__container">
                <div className="buyTicketOption__scrollbars">
                    <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                        <div className="scrollBars">
                            <div className="total">0 đ</div>
                            <div className="filmInfo">
                                <span className="ageType">C18</span> {data&&data.thongTinPhim.tenPhim}
                                <div className="contentCinema">
                                    <div className="address">
                                        <span className="cinemaName">{data&&data.thongTinPhim.tenCumRap}</span>
                                    </div>
                                    <div className="hour">{data&&data.thongTinPhim.ngayChieu}- {data&&data.thongTinPhim.gioChieu} - {data&&data.thongTinPhim.tenRap}</div>
                                </div>
                            </div>
                            <div className="chair">
                                <div className="chair__number">Ghế <span className="number"></span></div>
                                <div className="chair__price">0 đ</div>
                            </div>
                            <div className="infoUser">
                                <label className="inputTitle" htmlFor="emailCheckout">E-Mail</label>
                                <input className="emailCheckout" type="email" placeholder="Enter email here" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i" required/>
                            </div>
                            <div className="infoUser">
                                <label className="inputTitle" htmlFor="phoneCheckout">Phone</label>
                                <input className="phoneCheckout" type="tel" placeholder="Enter phone here" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
                            </div>
                            <div className="discountCoupon">
                                <label className="inputTitle" htmlFor="discountCouponCheckout">Mã Giảm Giá</label>
                                <input className="discountCouponCheckout" onChange={handleCheckCoupon} type="text" placeholder="Nhập mã giảm giá tại đây..."/>
                                <div className="applyDiscountCoupon disabled" onClick={handleClickCoupon}>áp dụng</div>
                            </div>
                            <div className="paymentMethod">
                                <div className="paymentMethod__title">Hình Thức Thanh Toán</div>
                                <div className="paymentMethod__notice" id="notice">Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</div>
                                <div className="paymentMethod__container" id="paymentMethodContainer">
                                    <div className="paymentMethod__chosenMethod">
                                        <div className="paymentParent">
                                            <input className="radio" type="radio" name="method" value="option1" id="option1" onChange={handleOption} onClick={handleClickOption}></input>
                                            <img className="icon" src={require("./../../../Asset/img/zaloPay.jpg").default}/>
                                            <div className="titleChosen">thanh toán qua ZaloPay</div>
                                        </div>
                                    </div>
                                    <div className="paymentMethod__chosenMethod">
                                        <div className="paymentParent">
                                            <input className="radio" type="radio" name="method" value="option2" id="option2" onChange={handleOption} onClick={handleClickOption}></input>
                                            <img className="icon" src={require("./../../../Asset/img/otherPayment.png").default}/>
                                            <div className="titleChosen">Visa, Master, JCB</div>
                                        </div>
                                    </div>
                                    <div className="paymentMethod__chosenMethod">
                                        <div className="paymentParent selectATM">
                                            <input className="radio" type="radio" name="method" value="option3" id="option3" onChange={handleOption} onClick={handleClickOption}></input>
                                            <img className="icon" src={require("./../../../Asset/img/atm.png").default}/>
                                            <div className="titleChosen" id="titleChosen">thẻ ATM nội địa</div>
                                        </div>
                                        <div className="listChildren" id="listChildren">
                                                <div className="row bankRow">
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="KienLongBank" src={require("./../../../Asset/CheckoutPage__img/bank1.jpg").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="PVComBank" src={require("./../../../Asset/CheckoutPage__img/bank2.png").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="ABBank" src={require("./../../../Asset/CheckoutPage__img/bank3.jpg").default}/>
                                                    </a>
                                                </div>
                                                <div className="row bankRow">
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="VietinBank" src={require("./../../../Asset/CheckoutPage__img/bank4.jpg").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="BIDV" src={require("./../../../Asset/CheckoutPage__img/bank5.jpg").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="OceanBank" src={require("./../../../Asset/CheckoutPage__img/bank6.jpg").default}/>
                                                    </a>
                                                </div>
                                                <div className="row bankRow">
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="HDBank" src={require("./../../../Asset/CheckoutPage__img/bank7.jpg").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="TPBank" src={require("./../../../Asset/CheckoutPage__img/bank8.jpg").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="VRB" src={require("./../../../Asset/CheckoutPage__img/bank9.jpg").default}/>
                                                    </a>
                                                </div>
                                                <div className="row bankRow">
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="VPBank" src={require("./../../../Asset/CheckoutPage__img/bank10.jpg").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="SHB" src={require("./../../../Asset/CheckoutPage__img/bank11.jpg").default}/>
                                                    </a>
                                                    <a className="bank" onClick={handleChooseBank}>
                                                        <img id="PublicBanVietNam" src={require("./../../../Asset/CheckoutPage__img/bank12.jpg").default}/>
                                                    </a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="paymentMethod__chosenMethod">
                                        <div className="paymentParent">
                                            <input className="radio" type="radio" name="method" value="option4" id="option4" onChange={handleOption} onClick={handleClickOption}></input>
                                            <img className="icon" src={require("./../../../Asset/img/payoo.png").default}/>
                                            <div className="titleChosen">thanh toán tại cửa hàng tiện ích</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomScrollbars>
                </div>
                <div className="notice">
                    <img className="notice__icon" src={require("./../../../Asset/img/notice-icon.png").default}/>
                    <span className="title">Vé đã mua không thể đổi hoặc hoàn tiền</span>
                    <span className="title">Mã vé sẽ được gửi qua tin nhắn <span className="notice__textSpan">ZMS</span> (tin nhắn Zalo) và <span className="notice__textSpan">Email</span> đã nhập.</span>
                </div>
                <button className="btn btn-secondary btnBuy" type="submit" value="submit" onClick={handleClickBuy}>Đặt Vé</button>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.listCheckoutReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCheckout: (getParams) => {
        dispatch(actCheckoutMovie(getParams));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage)