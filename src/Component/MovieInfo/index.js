import React from 'react'

function MovieInfo() {
    return (
        <div className="movieInfo__container">
            <div className="movieInfo__left col-sm-12 col-md-6">
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Ngày Công Chiếu</p>
                    <p className="movieInfo__left__content col-lg-8">26.03.2021</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Đạo Diễn</p>
                    <p className="movieInfo__left__content col-lg-8">Adam Wingard</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Diễn viên</p>
                    <p className="movieInfo__left__content col-lg-8">Kyle Chandler, Rebecca Hall, Eiza González, Millie Bobby Brown</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Thể Loại</p>
                    <p className="movieInfo__left__content col-lg-8">hành động, giả tưởng, ly kỳ, thần thoại</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Định dạng</p>
                    <p className="movieInfo__left__content col-lg-8">2D/Digital</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Quốc Gia SX</p>
                </div>
            </div>
            <div className="movieInfo__right col-lg-6">
                <div className="movieInfo__right__title">Nội Dung</div>
                <div className="movieInfo__right__content">
                    Khi hai kẻ thù truyền kiếp gặp nhau trong một trận chiến ngoạn mục, số phận của cả thế giới vẫn còn bị bỏ ngỏ… Bị đưa khỏi Đảo Đầu Lâu, Kong cùng Jia, một cô bé mồ côi có mối liên kết mạnh mẽ với mình và đội bảo vệ đặc biệt hướng về mái nhà mới. Bất ngờ, nhóm đụng độ phải Godzilla hùng mạnh, tạo ra một làn sóng hủy diệt trên toàn cầu. Thực chất, cuộc chiến giữa hai kẻ khổng lồ dưới sự thao túng của các thế lực vô hình mới chỉ là điểm khởi đầu để khám phá những bí ẩn nằm sâu trong tâm Trái đất.
                </div>
            </div>
        </div>
    )
}
export default MovieInfo;
