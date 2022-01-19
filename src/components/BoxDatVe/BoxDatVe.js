import { useState, useContext, useEffect, useRef } from 'react';

import { ThemeContext } from '../../shared/context/ThemeProvider';

import BoxNguoiLienHe from '../BoxNguoiLienHe/BoxNguoiLienHe';
import BoxHanhKhach from '../BoxHanhKhach/BoxHanhKhach';
import HinhThucThanhToan from '../HinhThucThanhToan';
import BoxNguoiThanhToan from '../BoxNguoiThanhToan/BoxNguoiThanhToan';
import FlightInfoBox from '../FlightInfoBox';
import ChildModal from './ChildComponent/Modal';
import axios from 'axios';
import Modal from '../../shared/components/Modal';
import { AuthContext } from '../../shared/context/auth-context';

import { useSearchParams, useNavigate } from 'react-router-dom';
import { timeDiffCalc } from '../../shared/util/util-function';

import './BoxDatVe.css';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const BoxDatVe = ({ setIsLoading, setError }) => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const [showModal, setShowModal] = useState(false);

  const [showMyModal, setShowMyModal] = useState(false);

  const [step, setStep] = useState(0);

  const [HLKG, setHLKG] = useState('0kg - 0 ₫');

  const changeHLKGHandler = (HLKG) => {
    setHLKG(HLKG);
  };

  const resetStepHandler = () => {
    setStep(0);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const IdVeMayBay = parseInt(searchParams.get('idvemaybay'));

  const IdChuyenBay = parseInt(searchParams.get('idchuyenbay'));

  const SLVeConLai = parseInt(searchParams.get('slvcl'));

  const GiaVe = parseFloat(searchParams.get('giave'));

  const Thue = parseFloat(searchParams.get('thue'));

  const passengers = {
    adult: parseInt(searchParams.get('ps').split('.')[0]),
    child: parseInt(searchParams.get('ps').split('.')[1]),
    baby: parseInt(searchParams.get('ps').split('.')[2]),
  };

  const tongTien =
    (passengers.adult + passengers.child + passengers.baby) *
    (GiaVe + GiaVe * (Thue / 100));

  const ddkh = searchParams.get('ddkh');
  const ddhc = searchParams.get('ddhc');
  const tgkh = searchParams.get('tgkh');
  const tghc = searchParams.get('tghc');
  const tgdc = timeDiffCalc(new Date(tghc), new Date(tgkh));
  const lhb = searchParams.get('loaihinhbay');
  const hanghk = searchParams.get('hanghk');

  const LoaiVe = searchParams.get('loaive');
  const SHMayBay = searchParams.get('shmaybay');

  // const [adultPassenger, setAdultPassenger] = useState([]);
  // const [childPassenger, setChildPassenger] = useState([]);
  // const [babyPassenger, setBabyPassenger] = useState([]);

  // useEffect(() => {
  //   //

  //   for (let i = 1; i <= passengers.adult; i++) {
  //     setAdultPassenger((prevState) => [
  //       ...prevState,
  //       <BoxHanhKhach
  //         step={step}
  //         changeHLKGHandler={changeHLKGHandler}
  //         HLKG={HLKG}
  //         resetStepHandler={resetStepHandler}
  //         passenger={`người lớn ${i}`}
  //         key={`adult ${i}`}
  //       />,
  //     ]);
  //   }

  //   for (let i = 1; i <= passengers.child; i++) {
  //     setChildPassenger((prevState) => [
  //       ...prevState,
  //       <BoxHanhKhach
  //         step={step}
  //         changeHLKGHandler={changeHLKGHandler}
  //         HLKG={HLKG}
  //         resetStepHandler={resetStepHandler}
  //         passenger={`trẻ em ${i}`}
  //         key={`child ${i}`}
  //       />,
  //     ]);
  //   }

  //   for (let i = 1; i <= passengers.baby; i++) {
  //     setBabyPassenger((prevState) => [
  //       ...prevState,
  //       <BoxHanhKhach
  //         step={step}
  //         changeHLKGHandler={changeHLKGHandler}
  //         HLKG={HLKG}
  //         resetStepHandler={resetStepHandler}
  //         passenger={`em bé ${i}`}
  //         key={`baby ${i}`}
  //       />,
  //     ]);
  //   }
  // }, [step]);

  const [passengerInfo, setPassengerInfo] = useState(
    Array.from(
      { length: passengers.adult + passengers.child + passengers.baby },
      () => ({ name: '', gender: '' })
    )
  );

  let adultPassenger_0 = [],
    adultPassenger_1 = [],
    childPassenger_0 = [],
    childPassenger_1 = [],
    babyPassenger_0 = [],
    babyPassenger_1 = [];

  for (let i = 1; i <= passengers.adult; i++) {
    adultPassenger_0.push(
      <BoxHanhKhach
        step={0}
        changeHLKGHandler={changeHLKGHandler}
        HLKG={HLKG}
        resetStepHandler={resetStepHandler}
        passenger={`người lớn ${i}`}
        key={`adult-${i}`}
        id={`adult-${i}`}
        pos={i - 1}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
      />
    );
    adultPassenger_1.push(
      <BoxHanhKhach
        step={1}
        changeHLKGHandler={changeHLKGHandler}
        HLKG={HLKG}
        resetStepHandler={resetStepHandler}
        passenger={`người lớn ${i}`}
        key={`adult-${i}`}
        id={`adult-${i}`}
        pos={i - 1}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
      />
    );
  }
  for (let i = 1; i <= passengers.child; i++) {
    childPassenger_0.push(
      <BoxHanhKhach
        step={0}
        changeHLKGHandler={changeHLKGHandler}
        HLKG={HLKG}
        resetStepHandler={resetStepHandler}
        passenger={`trẻ em ${i}`}
        key={`child-${i}`}
        id={`child-${i}`}
        pos={passengers.adult + i - 1}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
      />
    );
    childPassenger_1.push(
      <BoxHanhKhach
        step={1}
        changeHLKGHandler={changeHLKGHandler}
        HLKG={HLKG}
        resetStepHandler={resetStepHandler}
        passenger={`trẻ em ${i}`}
        key={`child-${i}`}
        id={`child-${i}`}
        pos={passengers.adult + i - 1}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
      />
    );
  }
  for (let i = 1; i <= passengers.baby; i++) {
    babyPassenger_0.push(
      <BoxHanhKhach
        step={0}
        changeHLKGHandler={changeHLKGHandler}
        HLKG={HLKG}
        resetStepHandler={resetStepHandler}
        passenger={`em bé ${i}`}
        key={`baby-${i}`}
        id={`baby-${i}`}
        pos={passengers.adult + passengers.child + i - 1}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
      />
    );
    babyPassenger_1.push(
      <BoxHanhKhach
        step={1}
        changeHLKGHandler={changeHLKGHandler}
        HLKG={HLKG}
        resetStepHandler={resetStepHandler}
        passenger={`em bé ${i}`}
        key={`baby-${i}`}
        id={`baby-${i}`}
        pos={passengers.adult + passengers.child + i - 1}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
      />
    );
  }

  const [contactInfo, setContactInfo] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    gender: 'null',
    email: '',
    phone: '',
    address: '',
    nation: '',
    state: '',
  });

  const [isPassenger, setIsPassenger] = useState(false);

  useEffect(() => {
    if (isPassenger) {
      setPassengerInfo((prevState) => [
        ...prevState.slice(0, 0),
        {
          name: contactInfo.name,
          gender: contactInfo.gender,
        },
        ...prevState.slice(1),
      ]);
    }
  }, [isPassenger]);

  const continueHandler = () => {
    setError(null);
    // let isValid = true;
    for (const property in contactInfo) {
      if (contactInfo[property] === '') {
        // isValid = false;
        setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
        return;
      }
    }
    for (const passenger of passengerInfo) {
      for (const property in passenger) {
        if (passenger[property] === '') {
          // isValid = false;
          setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
          return;
        }
      }
    }
    if (!validateEmail(contactInfo.email)) {
      // isValid = false;
      setError('Email không hợp lệ');
      return;
    }
    setStep(1);
    // if (isValid) {
    // }
  };

  const onPay = () => {
    // let isValid = true;
    for (const property in paymentInfo) {
      if (paymentInfo[property] === '') {
        // isValid = false;
        setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
        return;
      }
    }
    if (!validateEmail(paymentInfo.email)) {
      // isValid = false;
      setError('Email không hợp lệ');
      return;
    }
    // if (!isValid) return;
    setIsLoading(true);
    let IdHoaDon, IdNguoiLienHe;
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: '/contact-infos',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        HoTen: contactInfo.name,
        GioiTinh: contactInfo.gender,
        Email: contactInfo.email,
        SDT: contactInfo.phone,
        DiaChi: contactInfo.address,
      },
    })
      .then((res) => {
        IdNguoiLienHe = res.data.IdNguoiLienHe;
        return axios({
          method: 'post',
          baseURL: process.env.REACT_APP_BACKEND_URL,
          url: '/payers',
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          data: {
            HoTen: paymentInfo.name,
            GioiTinh: paymentInfo.gender,
            Email: paymentInfo.email,
            SDT: paymentInfo.phone,
            DiaChi: paymentInfo.address,
            QuocGia: paymentInfo.nation,
            ThanhPho: paymentInfo.state,
          },
        });
      })
      .then((res) => {
        return axios({
          method: 'post',
          baseURL: process.env.REACT_APP_BACKEND_URL,
          url: '/invoices',
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          data: {
            TongTien: tongTien,
            IdNguoiThanhToan: res.data.IdNguoiThanhToan,
          },
        });
      })
      .then((res) => {
        IdHoaDon = res.data.id;
        return axios({
          method: 'put',
          baseURL: process.env.REACT_APP_BACKEND_URL,
          url: `/tickets/${IdVeMayBay}`,
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          data: {
            TrangThai: 'Đã bán',
          },
        });
      })
      // .then((res) => {
      //   return axios({
      //     method: 'post',
      //     baseURL: process.env.REACT_APP_BACKEND_URL,
      //     url: `/tickets/search`,
      //     headers: {
      //       Authorization: `Bearer ${auth.token}`,
      //     },
      //     data: {
      //       IdVeMayBay: IdVeMayBay,
      //     },
      //   });
      // })
      .then((res) => {
        return axios({
          method: 'put',
          baseURL: process.env.REACT_APP_BACKEND_URL,
          url: `/flights/${IdChuyenBay}`,
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          data: {
            SLVeConLai: SLVeConLai - 1,
          },
        });
      })
      .then((res) => {
        let promiseArr = [];
        for (
          let i = 0;
          i < passengers.adult + passengers.child + passengers.baby;
          i++
        ) {
          promiseArr.push(
            axios({
              method: 'post',
              baseURL: process.env.REACT_APP_BACKEND_URL,
              url: '/passengers',
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
              data: {
                HoTen: passengerInfo[i].name,
                GioiTinh: passengerInfo[i].gender,
                NgaySinh: new Date().toString(),
                IdNguoiLienHe: IdNguoiLienHe,
              },
            })
              .then((res) => {
                return axios({
                  method: 'post',
                  baseURL: process.env.REACT_APP_BACKEND_URL,
                  url: '/invoice-details',
                  headers: {
                    Authorization: `Bearer ${auth.token}`,
                  },
                  data: {
                    Thue: Thue,
                    ThanhTien: GiaVe + GiaVe * (Thue / 100),
                    IdVeMayBay: IdVeMayBay,
                    IdHanhKhach: res.data.id,
                    IdHoaDon: IdHoaDon,
                  },
                });
              })
              .then((res) => {})
          );
        }
        return Promise.all(promiseArr);
      })
      .then((res) => {
        const storedFlightData = JSON.parse(localStorage.getItem('flightData'))
          ? JSON.parse(localStorage.getItem('flightData'))
          : [];
        storedFlightData.push({
          ddkh: ddkh,
          ddhc: ddhc,
          tgkh: tgkh,
          tghc: tghc,
          tgdc: tgdc,
          lhb: lhb,
          tongTien: tongTien,
          passengers: passengers,
          hanghk: hanghk,
        });
        localStorage.setItem('flightData', JSON.stringify(storedFlightData));
        setIsLoading(false);
        setShowMyModal(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const closeModal = () => {
    setShowMyModal(false);
    if (auth.userId) {
      navigate(`/user/${auth.userId}`);
    } else {
      navigate(`/user/@guest`);
    }
  };

  return (
    <div
      className={
        theme === 'dark' ? 'box-dat-ve-wrapper dark' : 'box-dat-ve-wrapper'
      }
    >
      <Modal onCancel={closeModal} header="Thông báo" show={showMyModal}>
        <p>Đặt vé thành công</p>
      </Modal>
      <ChildModal showModal={showModal} setShowModal={setShowModal} />
      <div className="box-dat-ve-info">
        <div>
          <p>Thông tin đặt vé</p>
          <br />
          <div className="info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28011">
                <path
                  data-name="Rectangle 4480"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <g data-name="Vector Smart Object21">
                  <g
                    data-name="Group 21"
                    transform="translate(2 4)"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      data-name="Path 44"
                      d="M15.605 4.332a2.62 2.62 0 11-5.232 0V2.757a2.62 2.62 0 115.232 0z"
                    ></path>
                    <ellipse
                      data-name="Ellipse 9"
                      cx="2.18"
                      cy="2.216"
                      rx="2.18"
                      ry="2.216"
                      transform="translate(3.84 .443)"
                    ></ellipse>
                    <path
                      data-name="Path 45"
                      d="M8.805 10.302a5.085 5.085 0 00-3.653-1.45 5.261 5.261 0 00-5.136 4.3.872.872 0 00.863 1.019h5"
                    ></path>
                    <path
                      data-name="Path 46"
                      d="M12.984 9.734h0a7.015 7.015 0 00-6.907 6.082.886.886 0 00.871 1.007H19.02a.886.886 0 00.871-1.007 7.015 7.015 0 00-6.907-6.082z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>

            {passengers.adult !== 0 ? (
              <span>&nbsp;{passengers.adult} người lớn</span>
            ) : null}
            {passengers.child !== 0 ? (
              <span>,&nbsp;{passengers.child} trẻ em</span>
            ) : null}
            {passengers.baby !== 0 ? (
              <span>,&nbsp;{passengers.baby} em bé</span>
            ) : null}
          </div>
        </div>
        <button
          className="box-dat-ve-btn"
          onClick={() => setShowModal((e) => !e)}
        >
          Thay đổi tìm kiếm
        </button>
      </div>

      <div className="box-dat-ve__content">
        <div className="box-dat-ve__main">
          {step === 0 && (
            <BoxNguoiLienHe
              step={0}
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
              isPassenger={isPassenger}
              setIsPassenger={setIsPassenger}
            />
          )}
          {step === 1 && (
            <BoxNguoiLienHe
              step={1}
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
              isPassenger={isPassenger}
              setIsPassenger={setIsPassenger}
            />
          )}

          {/* {step === 0 && (
            <BoxHanhKhach
              step={0}
              changeHLKGHandler={changeHLKGHandler}
              HLKG={HLKG}
              resetStepHandler={resetStepHandler}
              passenger={'người lớn 1'}
            />
          )}
          {step === 1 && (
            <BoxHanhKhach
              step={1}
              changeHLKGHandler={changeHLKGHandler}
              HLKG={HLKG}
              resetStepHandler={resetStepHandler}
              passenger={'người lớn 1'}
            />
          )} */}

          {/* {adultPassenger}
          {childPassenger}
          {babyPassenger} */}

          {step === 0 && adultPassenger_0}
          {step === 1 && adultPassenger_1}
          {step === 0 && childPassenger_0}
          {step === 1 && childPassenger_1}
          {step === 0 && babyPassenger_0}
          {step === 1 && babyPassenger_1}

          {step === 1 && (
            <div className="step-2">
              <BoxNguoiThanhToan
                paymentInfo={paymentInfo}
                setPaymentInfo={setPaymentInfo}
              />
              <HinhThucThanhToan onPay={onPay} />
            </div>
          )}
          {step === 0 && (
            <div className="box-btn">
              <button className="box-dat-ve-btn" onClick={continueHandler}>
                Tiếp tục
              </button>
            </div>
          )}
          {step === 0 && (
            <div className="box-dat-ve__footer">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="MuiSvgIcon-root MuiSvgIcon-colorError"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g data-name="Group 29023">
                    <path
                      data-name="Rectangle 4400"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g
                      data-name="Group 13375"
                      transform="translate(-23.117 -635.564)"
                      stroke="currentColor"
                    >
                      <path
                        data-name="Path 759"
                        d="M36.8 639.557a1.925 1.925 0 00-3.369 0l-8.212 14.826a.963.963 0 00.861 1.394h18.072a.963.963 0 00.861-1.394z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        data-name="Line 495"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M35.117 643.668v6.871"
                      ></path>
                      <circle
                        data-name="Ellipse 203"
                        cx="0.429"
                        cy="0.429"
                        r="0.429"
                        transform="translate(34.687 652.771)"
                        fill="#ff0406"
                      ></circle>
                    </g>
                  </g>
                </svg>
                <span>Lưu ý</span>
              </div>
              <ul>
                <li>
                  Đối với chuyến bay quốc tế hoặc quá cảnh quốc tế, hộ chiếu
                  phải còn hiệu lực ít nhất 06 tháng trước ngày khởi hành.
                </li>
                <li>
                  Vietnam Airlines và Bamboo Airways: Từ chối vận chuyển hành
                  khách mang thai từ 36 tuần trở lên. Vietjet Air và Vietravel
                  Airlines: Từ chối vận chuyển hành khách mang thai từ 32 tuần
                  trở lên.
                </li>
                <li>
                  Em bé từ 14 ngày đến dưới 02 tuổi cần đi cùng người lớn từ 18
                  tuổi trở lên.
                </li>
                <li>
                  Độ tuổi của trẻ em/em bé sẽ được tính từ ngày sinh đến ngày
                  khởi hành chuyến bay, căn cứ vào Giấy khai sinh/hộ chiếu của
                  trẻ.
                </li>
                <li>
                  Trường hợp trẻ em đi một mình vui lòng liên hệ trực tiếp đại
                  lý để được tư vấn dịch vụ trẻ em đi một mình trên chuyến bay.
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="box-dat-ve__side">
          <FlightInfoBox
            IdVeMayBay={IdVeMayBay}
            LoaiVe={LoaiVe}
            GiaVe={GiaVe}
            HangHK={hanghk}
            SHMayBay={SHMayBay}
            ThoiGianKhoiHanh={tgkh}
            ThoiGianHaCanh={tghc}
            DiaDiemKhoiHanh={ddkh}
            DiaDiemHaCanh={ddhc}
            LoaiHinhBay={lhb}
            passengers={passengers}
            Thue={Thue}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxDatVe;
