import Collapse from "react-bootstrap/Collapse";
import React, { useState,useEffect,useRef } from "react";

export default function TheaterItem() {
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState(null);
  const [show,setShow] = useState(null);

  const handleClick = (e) => {
    const otherTheater = document.getElementsByClassName("theaterItem__content active")[0];
    const chosenTheater = document.getElementById(e.target.id);
    const theater = e.target.id;
    setActive(theater);
    otherTheater.classList.remove("active");
    if(theater){
      chosenTheater.classList.add("active");
    }
  }

  const handleShow = (e) => {
    // const chosenMovie = document.getElementById;
    const movie = e.target.id;
    setShow(movie);
    console.log(movie);
  }

  return (
    <div className="row theater__item">
      <div className="col-lg-4 theaterItem__column">
        <div className="theaterItem__content active" id="theater1" onClick={handleClick}>
          <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
          <div className="theaterItem__span">
            <span className="cinema">
              <span className="colorCinema">BHD Star</span>- Bitexco
            </span>
            <span className="infoCinema">
              {" "}
              L3-Bitexco Icon 68, 2 Hải Triều, Q.1
            </span>
            <span className="infoCinema__Detail">
              <a>[chi tiết]</a>
            </span>
          </div>
        </div>
        <div className="theaterItem__content" id="theater2" onClick={handleClick}>
          <img
            src={
              require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                .default
            }
            alt=""/>
          <div className="theaterItem__span">
            <span className="cinema">
              <span className="colorCinema">BHD Star</span>- Bitexco
            </span>
            <span className="infoCinema">
              {" "}
              L3-Bitexco Icon 68, 2 Hải Triều, Q.1
            </span>
            <span className="infoCinema__Detail">
              <a>[chi tiết]</a>
            </span>
          </div>
        </div>
        <div className="theaterItem__content" id="theater3" onClick={handleClick}>
          <img
            src={
              require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                .default
            }
            alt=""/>
          <div className="theaterItem__span">
            <span className="cinema">
              <span className="colorCinema">BHD Star</span>- Bitexco
            </span>
            <span className="infoCinema">
              {" "}
              L3-Bitexco Icon 68, 2 Hải Triều, Q.1
            </span>
            <span className="infoCinema__Detail">
              <a>[chi tiết]</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-8 theater__wrapMovie">
        <div className="theaterItem__item">
          <div
            className="theaterItem__movie"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text1"
            aria-expanded={!open}
          >
            <img
              src={
                require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                  .default
              }
              alt=""/>
            <div className="theaterItem__moviespan">
              <span className="cinema__movie">
                <span className="btnCinema">C13</span>
                Godzilla vs. Kong
              </span>
              <span className="movie__span">100 phút - TIX 8.7 - IMDb 7.4</span>
            </div>
          </div>
          <Collapse in={!open}>
            <div className="theater__2D" id="example-collapse-text1">
              <div className="theaterItem__header">2D Digital</div>
              <div className="theater__sessionsContainer">
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="theaterItem__item">
          <div
            className="theaterItem__movie"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text2"
            aria-expanded={!open}
          >
            <img
              src={
                require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                  .default
              }
              alt=""/>
            <div className="theaterItem__moviespan">
              <span className="cinema__movie">
                <span className="btnCinema">C13</span>
                Godzilla vs. Kong
              </span>
              <span className="movie__span">100 phút - TIX 8.7 - IMDb 7.4</span>
            </div>
          </div>
          <Collapse in={!open}>
            <div className="theater__2D" id="example-collapse-text2">
              <div className="theaterItem__header">2D Digital</div>
              <div className="theater__sessionsContainer">
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="theaterItem__item">
          <div
            className="theaterItem__movie"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text3"
            aria-expanded={!open}
          >
            <img
              src={
                require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                  .default
              }
              alt=""/>
            <div className="theaterItem__moviespan">
              <span className="cinema__movie">
                <span className="btnCinema">C13</span>
                Godzilla vs. Kong
              </span>
              <span className="movie__span">100 phút - TIX 8.7 - IMDb 7.4</span>
            </div>
          </div>
          <Collapse in={!open}>
            <div className="theater__2D" id="example-collapse-text3">
              <div className="theaterItem__header">2D Digital</div>
              <div className="theater__sessionsContainer">
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
