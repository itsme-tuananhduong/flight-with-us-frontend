import React, { useRef, useEffect, useCallback } from 'react';

function BoxAnhDaiDien({ showBoxAnhDaiDien, setShowBoxAnhDaiDien }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowBoxAnhDaiDien(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showBoxAnhDaiDien) {
        setShowBoxAnhDaiDien(false);
      }
    },
    [setShowBoxAnhDaiDien, showBoxAnhDaiDien]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showBoxAnhDaiDien ? (
        <div className="boxAnhDaiDien">
          <div className="overlay" ref={modalRef} onClick={closeModal}></div>
          <div className="option-list-camera">
            <span className="option-lish-item">
              <svg
                className="icon-option-list"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <g
                  id="Group_28336"
                  data-name="Group 28336"
                  transform="translate(12732 11687)"
                >
                  <rect
                    id="Rectangle_4498"
                    data-name="Rectangle 4498"
                    width="24"
                    height="24"
                    transform="translate(-12732 -11687)"
                    fill="none"
                  ></rect>
                  <g
                    id="Group_28330"
                    data-name="Group 28330"
                    transform="translate(-12729 -11684)"
                  >
                    <g
                      id="Group_28019"
                      data-name="Group 28019"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_20187"
                        data-name="Path 20187"
                        d="M0,16.1A1.9,1.9,0,0,0,1.9,18H16.1A1.9,1.9,0,0,0,18,16.1V1.9A1.9,1.9,0,0,0,16.1,0H1.9A1.9,1.9,0,0,0,0,1.9Zm16.1,1H1.9a1,1,0,0,1-1-1V13.73l3.413-3.413,2.917,2.917a.448.448,0,0,0,.636,0l5.267-5.267L17.1,11.931V16.1A1,1,0,0,1,16.1,17.1ZM1.9.9H16.1a1,1,0,0,1,1,1v8.757L13.45,7.01a.448.448,0,0,0-.636,0L7.547,12.277,4.631,9.36a.448.448,0,0,0-.636,0L.9,12.454V1.9A1,1,0,0,1,1.9.9Z"
                        transform="translate(0 0)"
                      ></path>
                      <path
                        id="Path_20188"
                        data-name="Path 20188"
                        d="M91.724,76.149A2.324,2.324,0,1,0,89.4,73.824,2.327,2.327,0,0,0,91.724,76.149Zm0-3.735a1.41,1.41,0,1,1-1.41,1.41A1.412,1.412,0,0,1,91.724,72.414Z"
                        transform="translate(-86.128 -68.832)"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              Chọn ảnh
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
                <g data-name="Group 28522">
                  <path
                    data-name="Rectangle 4496"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 28326">
                    <path
                      data-name="Path 20184"
                      d="M12.002 3a.567.567 0 01.566.566v11.708a.567.567 0 11-1.133 0V3.566A.567.567 0 0112.002 3z"
                    ></path>
                    <path
                      data-name="Path 20185"
                      d="M12.002 3.079a.562.562 0 01.4.166l3.021 3.021a.567.567 0 01-.8.8l-2.621-2.621-2.621 2.621a.567.567 0 01-.8-.8l3.021-3.021a.568.568 0 01.4-.166z"
                    ></path>
                    <path
                      data-name="Path 20186"
                      d="M18.937 21H5.063A2.072 2.072 0 013 18.926v-3.4a.563.563 0 111.125 0v3.4a.942.942 0 00.938.944h13.874a.942.942 0 00.938-.944v-3.4a.563.563 0 111.125 0v3.4A2.072 2.072 0 0118.937 21z"
                    ></path>
                  </g>
                </g>
              </svg>
              Tải ảnh lên
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
                <g data-name="Group 28521">
                  <path
                    data-name="Rectangle 4528"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g
                    data-name="Group 28520"
                    stroke="currentColor"
                    stroke-width="0.2"
                  >
                    <path
                      data-name="Path 20468"
                      d="M20.289 10.67l-.577-.385a.494.494 0 01-.168-.628l.307-.621a1.617 1.617 0 00-1.345-2.331l-.692-.045a.493.493 0 01-.459-.459l-.045-.691a1.618 1.618 0 00-2.331-1.345l-.621.307a.494.494 0 01-.628-.172l-.385-.573a1.609 1.609 0 00-2.691 0l-.384.573a.494.494 0 01-.628.168l-.621-.307A1.618 1.618 0 006.69 5.51l-.045.69a.493.493 0 01-.459.459l-.692.045a1.617 1.617 0 00-1.345 2.332l.307.622a.494.494 0 01-.168.628l-.577.384a1.629 1.629 0 000 2.691l.577.385a.494.494 0 01.168.628l-.307.621a1.617 1.617 0 001.345 2.331l.692.045a.493.493 0 01.459.459l.045.692a1.618 1.618 0 002.331 1.345l.621-.307a.494.494 0 01.628.168l.385.577a1.649 1.649 0 002.691 0l.385-.577a.494.494 0 01.628-.168l.621.307a1.618 1.618 0 002.331-1.345l.045-.692a.493.493 0 01.459-.459l.692-.045a1.617 1.617 0 001.345-2.331l-.307-.622a.494.494 0 01.168-.628l.577-.385a1.629 1.629 0 000-2.691zm-.389 2.106l-.577.385a1.2 1.2 0 00-.408 1.524l.307.622a.914.914 0 01-.76 1.317l-.692.045a1.2 1.2 0 00-1.116 1.116l-.045.692a.915.915 0 01-1.317.76l-.622-.307a1.2 1.2 0 00-1.524.409l-.385.577a.947.947 0 01-1.521 0l-.385-.577a1.2 1.2 0 00-1.524-.408l-.621.307a.9.9 0 01-.86-.027.914.914 0 01-.457-.733l-.045-.692a1.2 1.2 0 00-1.116-1.116l-.692-.045a.914.914 0 01-.76-1.317l.307-.622a1.2 1.2 0 00-.408-1.524l-.579-.386a.926.926 0 010-1.521l.577-.385a1.2 1.2 0 00.408-1.524l-.307-.622a.914.914 0 01.76-1.317l.692-.045a1.2 1.2 0 001.117-1.115l.045-.692a.914.914 0 01.457-.733.9.9 0 01.86-.027l.622.307a1.2 1.2 0 001.524-.409l.385-.577a.906.906 0 011.521 0l.385.577a1.2 1.2 0 001.524.409l.622-.307a.9.9 0 01.86.027.914.914 0 01.457.733l.045.692a1.2 1.2 0 001.116 1.116l.692.045a.914.914 0 01.761 1.317l-.307.622a1.2 1.2 0 00.408 1.524l.577.385a.926.926 0 010 1.521z"
                    ></path>
                    <path
                      data-name="Path 20469"
                      d="M12 6.163a5.837 5.837 0 102.776 10.971.352.352 0 00-.335-.618 5.136 5.136 0 112.075-2.075.352.352 0 00.618.335A5.836 5.836 0 0012 6.163z"
                    ></path>
                    <path
                      data-name="Path 20470"
                      d="M17.012 9.007a5.837 5.837 0 10-8 8.009.352.352 0 00.359-.6 5.136 5.136 0 112.845.718.352.352 0 00.029.7 5.836 5.836 0 004.762-8.824z"
                    ></path>
                  </g>
                </g>
              </svg>
              Thêm khung
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxAnhDaiDien;
