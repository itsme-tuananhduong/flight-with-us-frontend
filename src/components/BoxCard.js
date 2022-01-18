import React, { Fragment, useState } from 'react';
import Card from './Card';
import Post from './Post';

import './BoxCard.css';

function BoxCard() {
  const initialCart = [
    {
      id: 1,
      cardImage:
        'https://hl-vn-1.hlcdn.net/2022/01/04/14/04/3cd93b0c959f223ec19e94e3080e89f1-1641305094_autox480_high.jpg.webp',
      cardTitle: 'CHỞ MAI ĐÀO TRÊN NHỮNG CHUYẾN BAY XUÂN',
      cartContent: `Tết rộn ràng vì lòng người mong nhớ, vì cả hương sắc xuân vàng rực, hồng tươi trên những cánh hoa bay. Đón chào xuân Nhâm Dần đang tiến gần từng chút, Bamboo Airways tiếp tục giúp bạn gửi mai đào đi khắp muôn phương, ngay từ ngày 05/01/2022 đến hết 15/02/2022; cho những món quà gửi gắm phương xa thêm trọn vẹn, cho Tết về nhà thêm đong đầy ý nghĩa.

      Mỗi hành khách được vận chuyển 01 bó (tối đa 02 cành).
      Hành khách chú ý buộc hoa thành bó, có bao bọc bên ngoài. Không vận chuyển mai đào dạng cây hoặc có chậu, có đất kể cả đường hàng hoá.`,
    },
    {
      id: 2,
      cardImage:
        'https://hl-vn-1.hlcdn.net/2021/12/29/10/16/ec07e1d3fa1e8ac12b21230a80eea203-1640772996_autox480_high.jpg.webp',
      cardTitle:
        'CÙNG VIETRAVEL AIRLINES XUÂN CHỌN ĐOÀN VIÊN, TẾT THÊM SUNG TÚC',
      cartContent: `Chỉ còn hơn 30 ngày nữa thôi là Tết sẽ đến gõ cửa từng nhà rồi đấy, bạn đã đặt vé về quê bên gia đình đón Tết sum vầy chưa? Vườn cây cảnh của Ba đang chờ bạn về chăm chút, nồi bánh tét của Mẹ cũng đang thiếu người trông, còn Ông Bà đang chờ cháu về chở đi tảo mộ. Thế bạn đã sẵn sàng cùng Vietravel Airlines Xuân chọn đoàn viên cho Tết thêm sung túc chưa?

      Với mong muốn được cùng tất cả hành khách chở Tết Nhâm Dần về nhà và kết nối hương vị Xuân phương xa, Vietravel Airlines chính thức mở bán hàng nghìn vé ưu đãi với giá chỉ từ 518k (chưa bao gồm thuế, phí) trên tất cả các đường bay nội địa hãng đang khai thác.
      
      Thời gian mở bán: Từ ngày 29/12/2021 đến ngày 14/02/2022.`,
    },
    {
      id: 3,
      cardImage:
        'https://hl-vn-1.hlcdn.net/2021/12/28/13/31/0e4e3aba4beaa9c2a007c75121aead83-1640698273_autox480_high.jpg.webp',
      cardTitle: 'BAMBOO AIRWAYS GIẢM TỚI 70% GIÁ VÉ CHO CÁC ĐƯỜNG BAY',
      cartContent: `Nhu cầu di chuyển cuối năm của hành khách đang có sức tăng rất lớn. Theo đó, Bamboo Airways khởi chạy chương trình khuyến mãi dành cho một số đường bay hot dịp cuối năm. Với chương trình ưu đãi của Bamboo Airways, hành khách sẽ có thêm lựa chọn để trải nghiệm dịch vụ hàng không chất lượng cao với chi phí hợp lý.

      1. Thời gian đặt vé: Từ nay 01/01/2022 hết 15/01/2022. 
      
      2. Thời gian bay: Từ ngày 05/01/2022 - 15/01/2022.
      
      3. Chặng bay áp dụng khởi hành từ TP. Hồ Chí Minh và Hà Nội:
      
      Từ TP. Hồ Chí Minh đi Nha Trang, Buôn Mê Thuột, Quảng Ninh, Pleiku, Điện Biên, Đà Lạt, Đà Nẵng.
      Từ Hà Nội đi Cần Thơ, Huế, Kiên Giang, Tuy Hòa, Đồng Hới, Pleiku, Điện Biên.
      4. Điều kiện:
      
      Ưu đãi áp dụng cho hạng vé Economy Saver Max và Economy Saver.
      Ưu đãi áp dụng trên giá vé máy bay, chưa bao gồm thuế, phí, phụ thu.
      Ưu đãi không có giá trị quy đổi.
      Một người có thể sử dụng ưu đãi nhiều lần.
      5. Lưu ý:
      
      Số chỗ khuyến mại giới hạn trên từng chuyến bay.
      Chương trình có thể kết thúc trước thời hạn trên khi số chỗ dành cho khuyến mại đã bán hết.`,
    },
    {
      id: 4,
      cardImage:
        'https://hl-vn-1.hlcdn.net/2021/12/27/14/06/7c6fb1b2bf4c7913a740f5fbceeccf4a-1640614018_autox480_high.jpg.webp',
      cardTitle: 'TẾT NÀY BAY AN TOÀN CÙNG VIETJET THÔI!',
      cartContent: `Thịt mỡ, dưa hành, câu đối đỏ; thì thầm nói nhỏ “Tết này bay an toàn cùng Vietjet thôi”.

      Cả năm xa nhà rồi, Tết này về với nhà mình, với Cha Mẹ thôi. Cả năm ăn sơn hào hải vị, những hôm chạy deadline ăn mì gói rồi, về với những bữa cơm nhà ngày Tết có bánh chưng bánh tét, có canh măng, thịt kho. Vietjet hân hạnh đồng hành cùng những hành trình đi để trở về, mang đến niềm vui sum họp cùng gia đình, người thân cùng những chuyến du lịch trải nghiệm hấp dẫn trong dịp Tết Nhâm Dần 2022.
      
      Hàng trăm ngàn vé bay ưu đãi trên tất cả các đường bay phủ khắp Việt Nam mùa Lễ Tết, kết nối TP.HCM với Hà Nội, Vinh, Thanh Hóa, Hải Phòng, Đà Nẵng...
      
      Săn vé tại: https://flight.hahalolo.com/ `,
    },
    {
      id: 5,
      cardImage:
        'https://hl-vn-1.hlcdn.net/2022/01/15/09/37/a42ac083f6a37373805757578fa68112-1642239479_autox480_high.png.webp',
      cardTitle: 'VẬN CHUYỂN MAI ĐÀO - XUÂN VỀ NÔN NAO',
      cartContent: `Đón chào xuân Nhâm Dần đang tiến dần, các Hãng hàng không đồng loạt đưa ra dịch vụ đưa cành mai, cành đào về đến mọi nhà.`,
    },
    {
      id: 6,
      cardImage:
        'https://hl-vn-1.hlcdn.net/2020/12/11/17/08/5dbf806ef950bd6608e9d974201211170826Uh_autox480_high.jpg.webp',
      cardTitle: 'MÁCH BẠN GIÚP CƠ THỂ THOẢI MÁI HƠN KHI ĐI MÁY BAY',
      cartContent: `Với các tín đồ du lịch, chắc chắn không xa lạ với những chuyến bay đường dài. Các chuyến bay nhiều tiếng đồng hồ có thể gây ra sự mệt mỏi cho cơ thể bạn. 
﻿
      Việc ngồi hàng giờ ở một vị trí cố định sẽ khiến cho cơ bắp chúng ta bị đau và tê dại đi. HAHALOLO tổng hợp và chia sẻ tới bạn những lời khuyên hữu ích từ việc chuẩn bị, ăn uống trước chuyến bay cho đến những động tác cực đơn giản để vận động, tránh mệt mỏi giúp bạn luôn cảm thấy khỏe khoắn trong cả chuyến bay và sẵn sàng cho những cuộc vui trước mắt, hãy cùng theo dõi nhé !!!
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
