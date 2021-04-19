import React from 'react'
import BtnBackToTop from "./../../Asset/Prev__Next__Arrows/arrowup.png";

export default function BackToTopButton() {
    
    const scrollFunction = () => {
        if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
            const scrollDown = document.getElementById("btnBackToTop");
            scrollDown.style.display = "block";
        }else{
            const scrollUp = document.getElementById("btnBackToTop");
            scrollUp.style.display = "none";
        }
    }
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    window.onscroll = () => {
        scrollFunction();
    }
    
    return (
        <button className="btn__backToTop" style={{display: "none"}} id="btnBackToTop" onClick={topFunction}>
            <img src={BtnBackToTop}/>
        </button>
    )
}
