import React from "react";
import { memo } from "react";

function BuyTicketTool() {
  return (
    <section className="tool__nav">
      <div className="nav__container">
      <div class="dropdown -selectFilm">
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="dropdownMenuButton1"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Phim
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown -selectCinema">
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="dropdownMenuButton1"
          data-toggle
="dropdown"
          aria-expanded="false"
        >
          Rạp
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              BHD
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              CGV
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              GALAXY
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown -selectDate">
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="dropdownMenuButton1"
          data-toggle
="dropdown"
          aria-expanded="false"
        >
          Ngày Xem
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown -selectSession">
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="dropdownMenuButton1"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Suất Chiếu
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="buy__button">
        <button className="btn btn-secondary -disabled -enabled">Mua Vé Ngay</button>
      </div>
    </div>
    </section>
  );
}
export default memo(BuyTicketTool);
