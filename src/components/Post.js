import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../shared/context/ThemeProvider';

import './Post.css';

function Post({ card, back }) {
  const myRef = useRef(null);
  const { id, cardImage, cardTitle, cartContent } = card[0];
  const { theme, toggleTheme } = useContext(ThemeContext);

  const executeScroll = () => myRef.current.scrollIntoView();
  const goback = () => {
    back();
  };
  return (
    <div ref={myRef}>
      <div
        className={theme === 'dark' ? 'post-container dark' : 'post-container'}
      >
        <div>
          <b className="post-title">{cardTitle}</b>
          <p className="post-time">19/11/2021</p>
          <b className="post-title-2">{cardTitle}</b>
        </div>
        <img src={cardImage} alt="" />
        <div className="content">
          <p className="content-1">{cartContent}</p>
          <hr className="content-divider" />
          <p className="post-title-2">Hành khách lưu ý</p>
          <ul className="post-list">
            <li>
              Người đã tiêm đủ liều vắc xin phòng COVID-19 (thẻ xanh trên Sổ Sức
              khoẻ điện tử hoặc giấy chứng nhận tiêm đủ liều vắc xin của cơ quan
              có thẩm quyền cấp) hoặc đã khỏi bệnh COVID-19 trong vòng 06 tháng
              tính đến thời điểm về địa phương (có giấy ra viện/giấy xác nhận
              khỏi bệnh COVID-19): tự theo dõi sức khoẻ ở nhà, nơi lưu trú trong
              vòng 07 ngày kể từ ngày về địa phương và nghiêm túc thực hiện
              Thông điệp 5K, thực hiện xét nghiệm SARS-CoV-2 vào ngày thứ nhất.
              Nếu có dấu hiệu bất thường về sức khoẻ như ho, sốt, khó thở, đau
              rát họng, mất vị giác thì báo cho cơ quan y tế để theo dõi và xử
              trí theo quy định.
            </li>
            <li>
              Người tiêm chưa đủ liều vắc xin phòng COVID-19 (thẻ vàng trên Sổ
              Sức khoẻ khoẻ điện tử hoặc giấy chứng nhận tiêm chủng của cơ quan
              có thẩm quyền cấp(sad) thực hiện cách ly tại nơi cư trú, lưu trú
              07 ngày kể từ ngày về địa phương, tiếp tục theo dõi sức khoẻ trong
              07 ngày tiếp theo và luôn thực hiện Thông điệp 5K; xét nghiệm
              SARS-CoV-2 vào ngày thứ nhất, ngày thứ 07 kể từ ngày về địa
              phương.
            </li>
            <li>
              Người chưa tiêm vắc xin phòng COVID-19: Thực hiện cách ly 14 ngày
              kể từ ngày về địa phương, tiếp tục theo dõi sức khoẻ trong 14 ngày
              tiếp theo và nghiêm túc thực hiện Thông điệp 5K; xét nghiệm
              SARS-CoV-2 vào ngày thứ nhất, ngày thứ 07 và ngày thứ 14 kể từ
              ngày về địa phương.
            </li>
            <li>
              Người đã tiêm chủng vắc xin phòng COVID-19 tại nước ngoài thì việc
              kiểm tra và công nhận giấy chứng nhận tiêm chủng, giấy xác nhận
              khỏi bệnh COVID-19 hoặc giấy tờ tương đương khác của nước ngoài
              theo hướng dẫn của Bộ Ngoại giao.
            </li>
          </ul>
          <p className="content-1">
            Cập nhật các quy định kiểm soát dịch bệnh tại các địa phương trong
            nước:{' '}
            <a
              href="https://www.vietnamairlines.com/vn/vi/vietnam-airlines/press-room/travel-advisory/2021/0514-VI-Cap-nhat-quy-dinh-kiem-soat-dich-benh-trong-nuoc?fbclid=IwAR3NOErgDONeZppxktfyq6fjmimxq1POVgMp-vckcZInJVjuOh3OYSdOsEo"
              className="title-link"
            >
              tại đây
            </a>
          </p>
          <h4 className="post-title-2">
            HAHALOLO luôn sát cánh trên mọi chuyến bay của bạn.
          </h4>
          <p className="content-1">
            Mọi thông tin chi tiết và mua vé máy bay vui lòng liên hệ qua Mạng
            xã hội du lịch Hahalolo:
          </p>
          <p className="content-1">Hotline đặt vé: (+84) 915 820 933</p>
          <p className="content-1">Tổng đài đặt vé: 1900 57 12 48</p>
          <p className="content-1">
            Website đặt vé:{' '}
            <a href="https://flight.hahalolo.com/" className="title-link">
              VÉ MÁY BAY HAHALOLO
            </a>
          </p>
          <p>
            Website hỗ trợ:{' '}
            <a href="https://www.hahalolo.com/u/chamsockhachhang">
              <b className="title-link">
                TRUNG TÂM CHĂM SÓC KHÁCH HÀNG HAHALOLO
              </b>
            </a>
          </p>
        </div>
      </div>
      <div className="post-btn">
        <span className="post-btn-back" onClick={goback}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="post-btn-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 27983">
              <path
                data-name="Rectangle 4399"
                fill="none"
                d="M0 0h24v24H0z"
              ></path>
              <g data-name="Group 27944">
                <g data-name="Group 27943">
                  <path
                    data-name="Path 20143"
                    d="M20.884 10.8H5.819l3.915-3.9a1.116 1.116 0 00-1.575-1.582l-5.832 5.8a1.117 1.117 0 000 1.58l5.832 5.8a1.116 1.116 0 001.575-1.582l-3.915-3.9h15.065a1.116 1.116 0 000-2.232z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
        <span onClick={executeScroll} className="post-btn-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="post-btn-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28556">
              <path
                data-name="Rectangle 4399"
                fill="none"
                d="M0 24V0h24v24z"
              ></path>
              <g data-name="Group 27944">
                <g data-name="Group 27943">
                  <path
                    data-name="Path 20143"
                    d="M10.8 20.884V5.82L6.9 9.735A1.116 1.116 0 015.318 8.16l5.8-5.832a1.117 1.117 0 011.58 0l5.8 5.832a1.116 1.116 0 01-1.582 1.575l-3.9-3.915v15.064a1.116 1.116 0 01-2.232 0z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Post;
