import React from "react";

function BuyTicketTool() {
  const chooseMovie = (e) => {
    const buttonSelected = document.getElementById("buyTicketDropdownMovie");
    const itemSelected = document.getElementById(e.target.id);
    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
  }
  const chooseTheater = (e) => {
    const buttonSelected = document.getElementById("buyTicketDropdownTheater");
    const itemSelected = document.getElementById(e.target.id);
    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
  }
  const chooseDate = (e) => {
    const buttonSelected = document.getElementById("buyTicketDropdownDate");
    const itemSelected = document.getElementById(e.target.id);
    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
  }
  const choosePremiere = (e) => {
    const buttonSelected = document.getElementById("buyTicketDropdownPremiere");
    const itemSelected = document.getElementById(e.target.id);
    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
  }
  const chooseMovieToActivateTheater = (e) => {
    const checkedId = e.target.id;
    console.log(checkedId);
  }
  return (
    <section className="tool__nav noneOnMobile">
      <div className="nav__container">
      <div class="dropdown -selectFilm">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="buyTicketDropdownMovie" data-toggle="dropdown" aria-expanded="false" onChange={chooseMovieToActivateTheater}>
          Phim
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" id="chosenMovie1" onClick={chooseMovie}>
              Mortal Kombat - Cuộc Chiến Sinh Tử (C18)
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie2" onClick={chooseMovie}>
              Lật Mặt 48h
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie3" onClick={chooseMovie}>
              Godzilla vs Kong
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie4" onClick={chooseMovie}>
              Người Nhân Bản - Seobok (C16)
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie5" onClick={chooseMovie}>
              Bàn Tay Diệt Quỷ - Evil Expeller (C16)
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie6" onClick={chooseMovie}>
              1990 (C16)
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie7" onClick={chooseMovie}>
              Ong Nhí Phiêu Lưu Ký: Giải Cứu Công Chúa Kiến - Maya The Bee 3: The Golden Orb - P
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie8" onClick={chooseMovie}>
              Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan: Viên Đạn Đỏ - C13
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie9" onClick={chooseMovie}>
              The Hypnosis - Con Lắc Tà Thuật - C18
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenMovie10" onClick={chooseMovie}>
              Bạn Tôi- Our Friend
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown -selectCinema">
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="buyTicketDropdownTheater"
          data-toggle
="dropdown"
          aria-expanded="false"
        >
          Rạp
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" id="chosenTheaterBHD" onClick={chooseTheater}>
              BHD
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenTheaterCGV" onClick={chooseTheater}>
              CGV
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenTheaterGalaxy" onClick={chooseTheater}>
              GALAXY
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown -selectDate">
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="buyTicketDropdownDate"
          data-toggle
="dropdown"
          aria-expanded="false"
        >
          Ngày Xem
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" id="chosenDate1" onClick={chooseDate}>
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenDate2" onClick={chooseDate}>
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenDate3" onClick={chooseDate}>
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown -selectSession">
        <button
          class="btn btn-secondary dropdown-toggle "
          type="button"
          id="buyTicketDropdownPremiere"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Suất Chiếu
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" id="chosenPremiere1" onClick={choosePremiere}>
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenPremiere2" onClick={choosePremiere}>
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="chosenPremiere3" onClick={choosePremiere}>
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
export default BuyTicketTool;
