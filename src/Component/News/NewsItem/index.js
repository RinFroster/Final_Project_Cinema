import React from 'react'

export default function NewsItem() {
    return (
        <>
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="NewItem__header">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="NewItem__img">
                                <a><img src={require("./../../../Asset/img/NewsIcon/lyhai.png").default} /></a>
                            </div>
                            <a className="NewItem__a"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                            <p className="NewItem__p">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                            <div className="NewItem__Icon">
                                <div className="NewItem__wrapIcon Newitem__Face">
                                        <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                                <div className="NewItem__wrapIcon Newitem__Comment">
                                        <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="NewItem__img">
                                <a><img src={require("./../../../Asset/img/NewsIcon/lyhai.png").default} /></a>
                            </div>
                            <a className="NewItem__a"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                            <p className="NewItem__p">Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, 
                            Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.</p>
                            <div className="NewItem__Icon">
                                <div className="NewItem__wrapIcon Newitem__Face">
                                        <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                                <div className="NewItem__wrapIcon Newitem__Comment">
                                        <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-4">
                    <div className="NewItem__img">
                                <a><img src={require("./../../../Asset/img/NewsIcon/lyhai.png").default} /></a>
                            </div>
                            <a className="NewItem__a"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                            <p className="NewItem__p">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                            <div className="NewItem__Icon">
                                <div className="NewItem__wrapIcon Newitem__Face">
                                        <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                                <div className="NewItem__wrapIcon Newitem__Comment">
                                        <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="NewItem__img">
                                <a><img src={require("./../../../Asset/img/NewsIcon/lyhai.png").default} /></a>
                            </div>
                            <a className="NewItem__a"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                            <p className="NewItem__p">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                            <div className="NewItem__Icon">
                                <div className="NewItem__wrapIcon Newitem__Face">
                                        <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                                <div className="NewItem__wrapIcon Newitem__Comment">
                                        <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} />
                                        <p className="Icon__mount">0</p>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="newItem__post">
                            <div className="post__a">
                            <a><img src={require("./../../../Asset/img/NewsIcon/lyhai.png").default} /></a>
                            </div>
                            <a><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
                        </div>
                        <div className="newItem__post">
                            <div className="post__a">
                            <a><img src={require("./../../../Asset/img/NewsIcon/lyhai.png").default} /></a>
                            </div>
                            <a><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
                        </div>
                    </div>
                    <div className="NewsBtn">
                    <button className="btn__views">Xem thêm</button>
                </div>
                </div>             
                </div>

            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.b..</div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">.c..</div>
        </>
    )
}
