import React from 'react';
import NewsItem from './NewsItem';
export default function News() {
    return (
        <section className="News container" id="News">
            <ul class="nav nav-tabs" id="myNews" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Điện ảnh 24h</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Review</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Khuyến mãi</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <NewsItem />
            </div>
        </section>
    )
}
