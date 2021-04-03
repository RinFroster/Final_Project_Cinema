import Collapse from "react-bootstrap/Collapse";
import React, { useState } from "react";

export default function TheaterItem() {
  const [open, setOpen] = useState(false);

  return (
    <div className="row theaterItem">
      <div className="col-12 col-sm-5 col-md-4" style={{ padding: 0 }}>
        <div className="theaterItem__content">
          <img
            src={
              require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                .default
            }
          />
          <div className="theaterItem__span">
            <span className="cinema">
              <span className="colorcinema">BHD Star</span>- Bitexco
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
        <div className="theaterItem__content">
          <img
            src={
              require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                .default
            }
          />
          <div className="theaterItem__span">
            <span className="cinema">
              <span className="colorcinema">BHD Star</span>- Bitexco
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
        <div className="theaterItem__content">
          <img
            src={
              require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                .default
            }
          />
          <div className="theaterItem__span">
            <span className="cinema">
              <span className="colorcinema">BHD Star</span>- Bitexco
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
      <div className="col-12 col-sm-7 col-md-8">
        <div className="theaterItem__item">
          <div
            className="theaterItem__movie"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <img
              src={
                require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                  .default
              }
            />
            <div className="theaterItem__moviespan">
              <span className="cinema__movie">
                <span className="btnCinema">C13</span>
                Godzilla vs. Kong
              </span>
              <span className="movie__span">100 phút - TIX 8.7 - IMDb 7.4</span>
            </div>
          </div>
          <Collapse in={open}>
            <div className="theater__2D" id="example-collapse-text">
              <div className="theaterItem__header">2D Digital</div>
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
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
            </div>
          </Collapse>
        </div>
        
      </div>
    </div>
  );
}
