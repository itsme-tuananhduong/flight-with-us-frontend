import React, { Fragment, useState } from "react";
import Card from "../Card/Card";
import Post from "../Posts/Post";

import "./boxCard.css";

function BoxCard() {
  const initialCart = [
    {
      id: 1,
      cardImage:
        "https://hl-vn-1.hlcdn.net/2021/05/17/13/20/b0afe9ebe16b7d8e2a78156655d04b7e-1621257642_640xauto_high.jpg",
      cardTitle:
        "BAMBOO AIRWAYS MỞ BÁN VÉ BAY THẲNG TP HCM – ĐIỆN BIÊN, GIÁ TỪ 159.000 ĐỒNG",
      cartContent: `Với những hành trình bay bằng phản lực Embraer của Bamboo Airways,
    lần đầu tiên trong lịch sử, khoảng cách gần 2000km giữa TP HCM và
    Điện Biên sẽ chỉ còn gói gọn trong hơn 2 giờ bay thẳng. Với những
    hành trình bay bằng phản lực Embraer của Bamboo Airways, lần đầu
    tiên trong lịch sử, khoảng cách gần 2000km giữa TP HCM và Điện Biên
    sẽ chỉ còn gói gọn trong hơn 2 giờ bay thẳng.`,
    },
    {
      id: 2,
      cardImage:
        "https://hl-vn-1.hlcdn.net/2021/10/26/07/20/04d47aa7fcdbd94f6c207bdfb77d00d5-1635232823_640xauto_high.jpg",
      cardTitle: "HƯỚNG DẪN BAY AN TOÀN DÀNH CHO KHÁCH BAY NỘI ĐỊA",
      cartContent: `Theo Công văn số 11244/BGTVT-CYT của Bộ Giao thông Vận tải, các hành khách khi đi bay sẽ không phải thực hiện việc kê khai thông tin bằng Bản cam kết phòng chống dịch Covid-19 (bản cứng) từ 12h00 ngày 26/10/2010.`,
    },
    {
      id: 3,
      cardImage:
        "https://hl-vn-1.hlcdn.net/2021/10/11/03/19/429d21bdd41a5304967df5d6549944f8-1633922383_640xauto_high.jpg",
      cardTitle: "HAHALOLO TUYỂN ĐẠI LÝ VÉ MÁY BAY CẤP 2 TRÊN TOÀN QUỐC.",
      cartContent: `Hahalolo ra đời với mục tiêu trở thành trung tâm cung cấp đầy đủ thông tin về khách sạn, tour du lịch, địa điểm du lịch, địa điểm mua sắm và giải trí, các phương tiện đi lại, ... và đặc biệt là phần Trải nghiệm để chia sẻ về chuyến du lịch đầy lý thú trên Hahalolo dưới dạng mạng xã hội trực tuyến.`,
    },
    {
      id: 4,
      cardImage:
        "https://hl-vn-1.hlcdn.net/2021/05/17/13/20/b0afe9ebe16b7d8e2a78156655d04b7e-1621257642_640xauto_high.jpg",
      cardTitle: "CÓ NÊN MUA BẢO HIỂM HÀNG KHÔNG KHI ĐẶT VÉ MÁY BAY?",
      cartContent: `Nhiều Quý khách hàng luôn thắc mắc “Bảo hiểm hàng không là gì?” và “Có được những quyền lợi gì khi tham gia bảo hiểm”. Để giải đáp những thắc mắc trên, hãy cùng Hahalolo tìm hiểu kỹ hơn về bảo hiểm vé máy bay ở bài viết dưới đây nhé!

      `,
    },
  ];
  const [toggle, setToggle] = useState(true);
  const [card, setCart] = useState([]);
  const handleData = (e) => {
    setToggle(false);
    const card = initialCart.filter((x) => x.id === e);
    setCart(card);
  };
  const goback = () => {
    setToggle(true);
  };
  return (
    <Fragment>
      {toggle ? (
        <div className="boxCart-Component">
          {initialCart.map((card) => (
            <Card card={card} key={card.id} saveID={handleData} />
          ))}
        </div>
      ) : (
        <Post card={card} back={goback} />
      )}
    </Fragment>
  );
}

export default BoxCard;
