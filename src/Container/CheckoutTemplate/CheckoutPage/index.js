import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faUserCircle
  } from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from 'react-custom-scrollbars';
import Countdown from "react-countdown";
import {Link} from "react-router-dom";

export default function CheckoutPage() {
    const [listSeat,setListSeat] = useState([]);
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
        // setListSeat((arr)=>[...arr,`${getSeatId}`]);
        // setArray(listSeat);
        // console.log(array);
        if(findSeat.classList.contains("chosenSeat")){
            findSeat.classList.remove("chosenSeat");
            getNoticeId.style.display = "block";
            getPaymentMethod.style.display = "none";
            getBuyBtn.classList.remove("active");
            renderSeatMobile.innerHTML = "";
            renderSeat.innerHTML = "";
            getPrice.innerHTML = "0 đ";
            getTotalPrice.innerHTML = "0 đ";
            getContinueBtn.classList.add("disabled");
        }else{
            findSeat.classList.add("chosenSeat");
            getNoticeId.style.display = "none";
            getPaymentMethod.style.display = "block";
            renderSeatMobile.innerHTML = getSeatId;
            renderSeat.innerHTML = getSeatId;
            getPrice.innerHTML = "45.000 đ";
            getTotalPrice.innerHTML = "45.000 đ";
            getContinueBtn.classList.remove("disabled");
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
        const getContinueBtnMobile = document.getElementsByClassName("continueBtn")[0];
        getContinueBtnMobile.classList.remove("disabled");
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
        const getBuyTicketOption = document.getElementsByClassName("buyTicketOption__container")[0];
        const getTitleProgressbar = document.getElementsByClassName("stepTitle")[0];
        getBuyTicketOption.style.display = "block";
        getTitleProgressbar.innerHTML = "03. thanh toán";
        getContinueBtnMobile.innerHTML = "đặt vé";
        getContinueBtnMobile.classList.add("disabled");
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

            <div className="movie__bg">
                <div className="modalLeft"></div>
                <img src={require("./../../../Asset/Carousel__img/an-quy.png").default}/>
            </div>

            <div className="checkoutMain__container">
                <div className="checkoutMain__theaterInfo">
                    <div className="leftTitle">
                        <div className="logoCinema">
                            <img src={require("./../../../Asset/img/theater/BHD.png").default} alt=""/>
                        </div>
                        <div className="contentCinema">
                            <p className="address">
                                <span className="pCinema">BHD Star </span>
                                <span className="cinemaName">- Vincom Quang Trung</span>
                            </p>
                            <p className="hour">Hôm nay - 20:15 - RẠP 5</p>
                        </div>
                    </div>
                    <div className="rightTitle">
                        <p className="timeTitle">thời gian giữ ghế</p>
                        <p className="timeCount">
                            {/* <span className="minute">00</span>:
                            <span className="second">00</span> */}
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
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="A14">
                                                    14
                                                </button>
                                            </span>
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">b</span>
                                                </span>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="B14">
                                                    14
                                                </button>
                                            </span>
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">c</span>
                                                </span>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="C14">
                                                    14
                                                </button>
                                            </span>
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">d</span>
                                                </span>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="D06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="D07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="D08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="D09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="D14">
                                                    14
                                                </button>
                                            </span>
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">e</span>
                                                </span>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="E06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="E07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="E08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="E09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="E14">
                                                    14
                                                </button>
                                            </span>
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">f</span>
                                                </span>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="F06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="F07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="F08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="F09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="F14">
                                                    14
                                                </button>
                                            </span>
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">g</span>
                                                </span>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="G06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="G07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="G08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat seatVip" onClick={handleChooseSeat} id="G09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="G14">
                                                    14
                                                </button>
                                            </span>
                                        </div>
                                        <div className="listSeat__rowSeat">
                                            <span className="listSeat__seatWrapper">
                                                <span className="listSeat__seatRow">
                                                    <span className="listSeat__seatLine">h</span>
                                                </span>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H01">
                                                    1
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H02">
                                                    2
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H03">
                                                    3
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H04">
                                                    4
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H05">
                                                    5
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H06">
                                                    6
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H07">
                                                    7
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H08">
                                                    8
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H09">
                                                    9
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H10">
                                                    10
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper visible">
                                                <button className="seat">
                                                    0
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H11">
                                                    11
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H12">
                                                    12
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H13">
                                                    13
                                                </button>
                                            </span>
                                            <span className="listSeat__seatWrapper">
                                                <button className="seat" onClick={handleChooseSeat} id="H14">
                                                    14
                                                </button>
                                            </span>
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
                    <button className="btn btn-secondary continueBtn disabled" id="continueBtnMobile" onClick={handleClickContinueBtn}>Tiếp Tục</button>
                </div>
            
            <div className="buyTicketOption__container">
                <div className="buyTicketOption__scrollbars">
                <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                    <div className="scrollBars">
                        <div className="total">0 đ</div>
                        <div className="filmInfo">
                            <span className="ageType">C18</span> mortal kombat
                            <div className="contentCinema">
                                <div className="address">
                                    <span className="pcinema">BHD star</span> <span className="cinemaName">- bitexco</span>
                                </div>
                                <div className="hour">Hôm nay 20/04/2021 - 10:00 - RẠP 7</div>
                            </div>
                        </div>
                        <div className="chair">
                            <div className="chair__number">Ghế <span className="number"></span></div>
                            <div className="chair__price">0 đ</div>
                        </div>
                        <div className="infoUser">
                            <label className="inputTitle" for="emailCheckout">E-Mail</label>
                            <input className="emailCheckout" type="email" required/>
                        </div>
                        <div className="infoUser">
                            <label className="inputTitle" for="phoneCheckout">Phone</label>
                            <input className="phoneCheckout" type="tel" required/>
                        </div>
                        <div className="discountCoupon">
                            <label className="inputTitle" for="discountCouponCheckout">Mã Giảm Giá</label>
                            <input className="discountCouponCheckout" onChange={handleCheckCoupon} type="text" placeholder="Nhập mã giảm giá tại đây..." required/>
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
                <button className="btn btn-secondary btnBuy">Đặt Vé</button>
            </div>
        </section>
    )
}
