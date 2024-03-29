import React, { useRef, useEffect, useCallback } from 'react';

function BoxTuyChon({ showBoxTuyChon, setShowTuyChon }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowTuyChon(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showBoxTuyChon) {
        setShowTuyChon(false);
      }
    },
    [setShowTuyChon, showBoxTuyChon]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showBoxTuyChon ? (
        <div className="BoxTuyChon">
          <div className="overlay" ref={modalRef} onClick={closeModal}></div>
          <div className="option-lish-tuychon">
            <span className="option-lish-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-option-list"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28312">
                  <path
                    data-name="Rectangle 4393"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 27888">
                    <path
                      data-name="Path 20090"
                      d="M8.77 17.222a4.375 4.375 0 01-1.465-1.059.4.4 0 00-.166-.085 2.558 2.558 0 01-1.317-.959c-.143-.219-.324-.415-.466-.635a1.911 1.911 0 01-.117-2.032c.606-1.132 1.271-2.234 1.919-3.344.2-.343.418-.677.643-1a.244.244 0 00-.015-.349 7.29 7.29 0 01-1.17-1.981 1.315 1.315 0 01.2-1.525 1.639 1.639 0 011.66-.373 4.029 4.029 0 011.458.774c.069.052.14.1.218.158.292-.331.571-.658.863-.974a7.207 7.207 0 011.873-1.565 1.86 1.86 0 011.4-.21 1.36 1.36 0 011 1.771 6.6 6.6 0 01-1.16 2.141c-.4.552-.812 1.1-1.249 1.688a6.565 6.565 0 00.534.387 2.53 2.53 0 011.475 1.627 2.057 2.057 0 011.509.319 1.851 1.851 0 01.827 1.236 2.858 2.858 0 01.007.777c-.012.12 0 .185.1.253a2.416 2.416 0 01.822 2.857c-.263.59-.474 1.2-.683 1.816a4.136 4.136 0 01-.728 1.327.527.527 0 00-.146.333 1.789 1.789 0 01-.275.987c-.293.607-.606 1.2-.923 1.8a1.106 1.106 0 01-1.037.622H8.725a1.21 1.21 0 01-1.168-1.684c.399-1.026.802-2.048 1.213-3.098zm1.868-7.967c.3-.431.6-.84.881-1.263.389-.591.749-1.2 1.143-1.787.426-.634.89-1.242 1.309-1.88a2.579 2.579 0 00.324-.782c.084-.335-.03-.478-.373-.518a.675.675 0 00-.39.073 6.233 6.233 0 00-.882.579 15.1 15.1 0 00-2.246 2.513 50.276 50.276 0 00-3.16 4.749 35.04 35.04 0 00-1.063 1.939.859.859 0 00-.118.586 2.346 2.346 0 001.629 1.719.689.689 0 01.319.215 2.907 2.907 0 002.688 1.1.951.951 0 01.845.251 2.183 2.183 0 001.458.615 1.014 1.014 0 01.688.295 1.741 1.741 0 00.936.472 1.085 1.085 0 001.061-.239 3.237 3.237 0 00.75-1.123c.258-.712.526-1.421.792-2.13a1.312 1.312 0 00-.663-1.621l-.625-.3c.025-.082.045-.142.06-.2a5.1 5.1 0 00.227-.936.918.918 0 00-.828-.9c-.3-.054-.594.165-.773.58a22.3 22.3 0 01-.221.5.626.626 0 01-.779.341.511.511 0 01-.224-.727 7.7 7.7 0 01.374-.793.912.912 0 00-.113-1.1 4.566 4.566 0 00-.594-.444.858.858 0 00-1.161.194c-.15.2-.3.408-.456.624zm4.749 9.888a3.068 3.068 0 01-2.391-.74.315.315 0 00-.174-.056 3.319 3.319 0 01-1.541-.521 1.426 1.426 0 00-.458-.2c-.29-.057-.589-.069-.882-.113a.177.177 0 00-.231.134c-.386 1-.782 2-1.169 3-.089.23 0 .341.256.345s.518 0 .777 0h4.637c.091 0 .232-.035.266-.1.304-.557.592-1.13.91-1.748zM9.54 5.612c-.24-.163-.468-.342-.718-.481a2.46 2.46 0 00-.7-.289.7.7 0 00-.531.11c-.082.072-.056.334.006.475.165.374.369.733.571 1.091.1.176.226.336.352.521z"
                    ></path>
                  </g>
                </g>
              </svg>
              Lượt Haha
            </span>
            <span className="option-lish-item">
              <svg
                className="icon-option-list"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g
                  id="Group_27933"
                  data-name="Group 27933"
                  transform="translate(12761 11725)"
                >
                  <rect
                    id="Rectangle_4410"
                    data-name="Rectangle 4410"
                    width="24"
                    height="24"
                    transform="translate(-12761 -11725)"
                    fill="none"
                  ></rect>
                  <g
                    id="Vector_Smart_Object"
                    data-name="Vector Smart Object"
                    transform="translate(-12757.998 -11722)"
                  >
                    <g
                      id="Path_19386"
                      data-name="Path 19386"
                      transform="translate(-0.002)"
                    >
                      <path
                        id="Path_20114"
                        data-name="Path 20114"
                        d="M15.27,18a.385.385,0,0,1-.225-.072L9,13.582,2.951,17.928a.389.389,0,0,1-.446,0,.35.35,0,0,1-.136-.405L4.64,11,.133,7.4A.349.349,0,0,1,.021,7a.376.376,0,0,1,.353-.238h6L8.643.246A.375.375,0,0,1,9,0H9a.375.375,0,0,1,.356.246l2.267,6.516h6A.375.375,0,0,1,17.975,7a.349.349,0,0,1-.113.4L13.356,11l2.271,6.528a.351.351,0,0,1-.137.405A.379.379,0,0,1,15.27,18ZM9,12.772a.384.384,0,0,1,.225.072l5.31,3.817-1.971-5.668a.35.35,0,0,1,.116-.39l3.907-3.121H11.35a.375.375,0,0,1-.356-.246L9,1.5,7,7.236a.374.374,0,0,1-.356.246H1.411L5.318,10.6a.35.35,0,0,1,.116.39L3.462,16.661l5.31-3.817A.385.385,0,0,1,9,12.772Z"
                        transform="translate(0.002)"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              Đánh giá
            </span>
            <span className="option-lish-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-option-list"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 29038">
                  <path
                    data-name="Rectangle 4716"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 28138">
                    <path
                      data-name="Path 20236"
                      d="M19.875 11.988H4.125A1.124 1.124 0 013 10.866v-2.99a1.124 1.124 0 011.125-1.121h15.75A1.124 1.124 0 0121 7.876v2.99a1.124 1.124 0 01-1.125 1.122zM4.125 7.503a.375.375 0 00-.375.374v2.99a.375.375 0 00.375.374h15.75a.375.375 0 00.375-.374v-2.99a.375.375 0 00-.375-.374z"
                    ></path>
                    <path
                      data-name="Path 20237"
                      d="M17.628 20.999H6.371a1.875 1.875 0 01-1.876-1.869v-7.475a.375.375 0 01.75 0v7.475a1.125 1.125 0 001.126 1.121h11.257a1.125 1.125 0 001.126-1.121v-7.475a.375.375 0 01.75 0v7.475a1.875 1.875 0 01-1.876 1.869z"
                    ></path>
                    <path
                      data-name="Path 20238"
                      d="M12 20.999a.374.374 0 01-.374-.374v-8.97a.374.374 0 01.747 0v8.97a.374.374 0 01-.373.374z"
                    ></path>
                    <path
                      data-name="Path 20239"
                      d="M11.991 7.484a.37.37 0 01-.081-.009c-.471-.1-2.853-.657-3.483-1.286a1.868 1.868 0 010-2.642 1.87 1.87 0 012.642 0c.629.629 1.182 3.012 1.286 3.483a.375.375 0 01-.365.454zM9.749 3.748a1.121 1.121 0 00-.793 1.914 8.321 8.321 0 002.53.945 8.342 8.342 0 00-.945-2.53 1.113 1.113 0 00-.792-.329z"
                    ></path>
                    <path
                      data-name="Path 20240"
                      d="M12.008 7.484a.377.377 0 01-.265-.109.373.373 0 01-.1-.345c.1-.472.657-2.854 1.286-3.483a1.869 1.869 0 112.643 2.642c-.629.629-3.012 1.182-3.483 1.286a.434.434 0 01-.081.008zm2.242-3.737a1.119 1.119 0 00-.793.327 8.342 8.342 0 00-.945 2.53 8.322 8.322 0 002.53-.945 1.12 1.12 0 00-.792-1.913zm-1.057.064z"
                    ></path>
                  </g>
                </g>
              </svg>
              Tặng thưởng
            </span>
            <span className="option-lish-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-option-list"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 29040">
                  <path
                    data-name="Rectangle 4718"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 28162">
                    <g data-name="Group 28160">
                      <path
                        data-name="Path 20251"
                        d="M20.066 2H4.613A1.617 1.617 0 003 3.619v17.046a1.337 1.337 0 001.332 1.338H20.35a1.337 1.337 0 001.333-1.338V3.619a1.617 1.617 0 00-1.613-1.617zM3.879 3.619a.737.737 0 01.734-.738h15.453a.737.737 0 01.734.738v2.612H3.879zm16.922 17.046a.457.457 0 01-.453.459H4.332a.457.457 0 01-.453-.459V7.108h16.922z"
                      ></path>
                      <path
                        data-name="Path 20252"
                        d="M16.141 4.11h-.589a.439.439 0 100 .877h.589a.439.439 0 000-.877z"
                      ></path>
                      <path
                        data-name="Path 20253"
                        d="M18.877 4.11h-.589a.439.439 0 100 .877h.589a.439.439 0 100-.877z"
                      ></path>
                      <path
                        data-name="Path 20254"
                        d="M10.377 4.11H6.125a.439.439 0 000 .877h4.252a.439.439 0 000-.877z"
                      ></path>
                    </g>
                    <path
                      data-name="Path 20255"
                      d="M14.097 14.121a2.259 2.259 0 10-3.508 0 1.977 1.977 0 00-1.035 1.732v1.5a.439.439 0 00.439.439h4.7a.439.439 0 00.439-.439v-1.5a1.979 1.979 0 00-1.035-1.732zm-1.754-2.805a1.382 1.382 0 11-1.382 1.382 1.384 1.384 0 011.382-1.382zm1.912 5.6h-3.824v-1.065a1.1 1.1 0 011-1.088 2.259 2.259 0 001.825 0 1.1 1.1 0 011 1.088v1.065z"
                    ></path>
                  </g>
                </g>
              </svg>
              Site của bạn
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxTuyChon;
