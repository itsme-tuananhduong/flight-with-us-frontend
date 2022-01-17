import React, { useRef, useEffect, useCallback } from 'react';

function BoxAnhBia({ showBoxAnhBia, setShowBoxAnhBia }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowBoxAnhBia(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showBoxAnhBia) {
        setShowBoxAnhBia(false);
      }
    },
    [setShowBoxAnhBia, showBoxAnhBia]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showBoxAnhBia ? (
        <div className="AnhBia-Container">
          <div className="overlay" ref={modalRef} onClick={closeModal}></div>
          <div className="option-list-camera anhbia">
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
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxAnhBia;
