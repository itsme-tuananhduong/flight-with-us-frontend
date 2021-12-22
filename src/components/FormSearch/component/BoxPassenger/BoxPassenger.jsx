import React, { useState, useRef, useEffect, useCallback } from "react";

function BoxPassenger({ showBoxPassenger, setShowBoxPassenger, onKetqua }) {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  const[checkHind,setCheckHind] = useState(false);
  const[checkHind1,setCheckHind1] = useState(false);



  const handleQuantily = () => {
    const quantilyPassenger = { adult, child, baby };
    onKetqua(quantilyPassenger);
    setShowBoxPassenger(false);
  };
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowBoxPassenger(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showBoxPassenger) {
        setShowBoxPassenger(false);
      }
    },
    [setShowBoxPassenger, showBoxPassenger]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showBoxPassenger ? (
        <div className="Passenger-child">
          <div
            className="overlay-Passenger"
            onClick={closeModal}
            ref={modalRef}
          ></div>
          <div className="boxPassenger">
            <div className="boxPassenger-item">
              <div className="boxPassenger-item-content">
                <p className="boxPassenger-item-title">Người lớn
                
                </p>
                <p className="boxPassenger-item-title2">Từ 12 tuổi trở lên</p>
              </div>
              <div className="boxPassenger-item-count">
                <div
                  className={
                    adult > 1 && adult > baby ? "decrease active" : "decrease"
                  }
                  onClick={() =>
                    adult > 1 && adult > baby
                      ? setAdult(adult - 1)
                      : setAdult(adult)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-count"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28561" fill="none">
                      <path data-name="Rectangle 4424" d="M0 0h24v24H0z"></path>
                      <g data-name="Group 28558" stroke="currentColor">
                        <g data-name="Ellipse 990" transform="translate(3 3)">
                          <circle cx="9" cy="9" r="9" stroke="none"></circle>
                          <circle cx="9" cy="9" r="8.5"></circle>
                        </g>
                        <path
                          data-name="Line 2233"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.507 12.078H7.859"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="count">{adult}</span>
                <div
                  className={
                    adult + child + baby < 9 && adult < 9
                      ? "increase active"
                      : "increase"
                  }
                  onClick={() =>
                    adult + child + baby < 9 && adult >= 0
                      ? setAdult(adult + 1)
                      : setAdult(adult)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-count"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28560" fill="none">
                      <path data-name="Rectangle 4657" d="M0 0h24v24H0z"></path>
                      <g data-name="Group 28606" stroke="currentColor">
                        <g data-name="Ellipse 989" transform="translate(3 3)">
                          <circle cx="9" cy="9" r="9" stroke="none"></circle>
                          <circle cx="9" cy="9" r="8.5"></circle>
                        </g>
                        <g
                          data-name="Group 28559"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path data-name="Line 36" d="M12.5 8v8.382"></path>
                          <path data-name="Line 37" d="M17 12H8"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="boxPassenger-item">
              <div className="boxPassenger-item-content">
                <p className="boxPassenger-item-title">Trẻ em
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="hind-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  onMouseOver={()=>setCheckHind(true)}
                  onMouseOut={()=>setCheckHind(false)}
                >
                  <g data-name="Group 29249">
                    <g data-name="Group 29248">
                      <g data-name="Group 29032">
                        <path
                          data-name="Rectangle 4657"
                          fill="none"
                          d="M0 0h24v24H0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      data-name="Component 7 \u2013 1"
                      transform="translate(3 3)"
                    >
                      <circle
                        data-name="Ellipse 1 copy 2"
                        cx="9"
                        cy="9"
                        r="9"
                      ></circle>
                      <text
                        data-name="?"
                        transform="translate(12.413 14)"
                        fill="#fff"
                        fontSize="15"
                        fontFamily="Roboto-Medium, Roboto"
                        fontWeight="500"
                      >
                        <tspan x="-7.295" y="0">
                          ?
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
                {checkHind ?<div className="hind">
                <span>
                  Hành khách trẻ em phải có người lớn trên 18 tuổi đi cùng
                </span>
              </div>:null}
                </p>
                <p className="boxPassenger-item-title2">Độ tuổi từ 2 - 12</p>
              </div>
              <div className="boxPassenger-item-count">
                <div
                  className={child > 0 ? "decrease active" : "decrease"}
                  onClick={() =>
                    child > 0 ? setChild(child - 1) : setChild(child)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-count"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28561" fill="none">
                      <path data-name="Rectangle 4424" d="M0 0h24v24H0z"></path>
                      <g data-name="Group 28558" stroke="currentColor">
                        <g data-name="Ellipse 990" transform="translate(3 3)">
                          <circle cx="9" cy="9" r="9" stroke="none"></circle>
                          <circle cx="9" cy="9" r="8.5"></circle>
                        </g>
                        <path
                          data-name="Line 2233"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.507 12.078H7.859"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="count">{child}</span>
                <div
                  className={
                    adult + child + baby < 9 && child < 9
                      ? "increase active"
                      : "increase"
                  }
                  onClick={() =>
                    adult + child + baby < 9 && child >= 0
                      ? setChild(child + 1)
                      : setChild(child)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-count"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28560" fill="none">
                      <path data-name="Rectangle 4657" d="M0 0h24v24H0z"></path>
                      <g data-name="Group 28606" stroke="currentColor">
                        <g data-name="Ellipse 989" transform="translate(3 3)">
                          <circle cx="9" cy="9" r="9" stroke="none"></circle>
                          <circle cx="9" cy="9" r="8.5"></circle>
                        </g>
                        <g
                          data-name="Group 28559"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path data-name="Line 36" d="M12.5 8v8.382"></path>
                          <path data-name="Line 37" d="M17 12H8"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="boxPassenger-item">
              <div className="boxPassenger-item-content">
                <p className="boxPassenger-item-title">Em bé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="hind-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  onMouseOver={()=>setCheckHind1(true)}
                  onMouseOut={()=>setCheckHind1(false)}
                >
                  <g data-name="Group 29249">
                    <g data-name="Group 29248">
                      <g data-name="Group 29032">
                        <path
                          data-name="Rectangle 4657"
                          fill="none"
                          d="M0 0h24v24H0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      data-name="Component 7 \u2013 1"
                      transform="translate(3 3)"
                    >
                      <circle
                        data-name="Ellipse 1 copy 2"
                        cx="9"
                        cy="9"
                        r="9"
                      ></circle>
                      <text
                        data-name="?"
                        transform="translate(12.413 14)"
                        fill="#fff"
                        fontSize="15"
                        fontFamily="Roboto-Medium, Roboto"
                        fontWeight="500"
                      >
                        <tspan x="-7.295" y="0">
                          ?
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
                {checkHind1 ?<div className="hind1">
                <span>
                  Hành khách trẻ sơ sinh phải có người lớn trên 18 tuổi đi cùng
                </span>
              </div>:null}
                </p>
                <p className="boxPassenger-item-title2">Dưới 2 tuổi</p>
              </div>
              <div className="boxPassenger-item-count">
                <div
                  className={baby > 0 ? "decrease active" : "decrease"}
                  onClick={() => (baby > 0 ? setBaby(baby - 1) : setBaby(baby))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-count"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28561" fill="none">
                      <path data-name="Rectangle 4424" d="M0 0h24v24H0z"></path>
                      <g data-name="Group 28558" stroke="currentColor">
                        <g data-name="Ellipse 990" transform="translate(3 3)">
                          <circle cx="9" cy="9" r="9" stroke="none"></circle>
                          <circle cx="9" cy="9" r="8.5"></circle>
                        </g>
                        <path
                          data-name="Line 2233"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.507 12.078H7.859"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="count">{baby}</span>
                <div
                  className={
                    adult + child + baby < 9 && adult > 0 && adult > baby
                      ? "increase active"
                      : "increase"
                  }
                  onClick={() =>
                    adult + child + baby < 9 && adult > 0 && adult > baby
                      ? setBaby(baby + 1)
                      : setBaby(baby)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-count"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28560" fill="none">
                      <path data-name="Rectangle 4657" d="M0 0h24v24H0z"></path>
                      <g data-name="Group 28606" stroke="currentColor">
                        <g data-name="Ellipse 989" transform="translate(3 3)">
                          <circle cx="9" cy="9" r="9" stroke="none"></circle>
                          <circle cx="9" cy="9" r="8.5"></circle>
                        </g>
                        <g
                          data-name="Group 28559"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path data-name="Line 36" d="M12.5 8v8.382"></path>
                          <path data-name="Line 37" d="M17 12H8"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="btn-count-passenger">
              <span className="count-btn" onClick={handleQuantily}>
                Đồng ý
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxPassenger;
