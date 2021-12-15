import React, { Fragment } from "react";

import "./card.css";

function Card() {
  return (
    <Fragment>
      <div className="card">
        <img
          className="card-img-top"
          src="https://hl-vn-1.hlcdn.net/2021/05/17/13/20/b0afe9ebe16b7d8e2a78156655d04b7e-1621257642_640xauto_high.jpg"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            BAMBOO AIRWAYS MỞ BÁN VÉ BAY THẲNG TP HCM – ĐIỆN BIÊN, GIÁ TỪ
            159.000 ĐỒNG
          </h5>
          <p className="card-text">
            Với những hành trình bay bằng phản lực Embraer của Bamboo Airways,
            lần đầu tiên trong lịch sử, khoảng cách gần 2000km giữa TP HCM và
            Điện Biên sẽ chỉ còn gói gọn trong hơn 2 giờ bay thẳng. Với những
            hành trình bay bằng phản lực Embraer của Bamboo Airways, lần đầu
            tiên trong lịch sử, khoảng cách gần 2000km giữa TP HCM và Điện Biên
            sẽ chỉ còn gói gọn trong hơn 2 giờ bay thẳng.
          </p>
          <p className="card-button">chi tiết</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
