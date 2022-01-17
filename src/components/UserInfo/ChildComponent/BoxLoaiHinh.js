import React, { useRef, useEffect, useCallback } from 'react';

function BoxLoaiHinh({ showBoxLoaiHinh, setShowBoxLoaiHinh }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowBoxLoaiHinh(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showBoxLoaiHinh) {
        setShowBoxLoaiHinh(false);
      }
    },
    [setShowBoxLoaiHinh, showBoxLoaiHinh]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showBoxLoaiHinh ? (
        <div className="BoxLoaiHinh">
          <div className="overlay" ref={modalRef} onClick={closeModal}></div>
          <div className="option-lish">
            <span className="option-lish-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-option-item"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28235">
                  <g data-name="Group 28225">
                    <path
                      data-name="Rectangle 4477"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g data-name="Group 28223">
                      <g data-name="Group 28222">
                        <path
                          data-name="Path 9"
                          d="M19.855 8.806a9.721 9.721 0 001.144-3.191 2.624 2.624 0 00-5.247-.007v.007a9.737 9.737 0 001.144 3.191 1.828 1.828 0 00-1.1 1.152h-.039a.29.29 0 100 .58h.038a2.5 2.5 0 002.586 1.45c1.471 0 2.623-.763 2.623-1.74a1.68 1.68 0 00-1.149-1.442zm-3.52-3.191a2.041 2.041 0 014.081-.079v.079a13.124 13.124 0 01-1.8 4.209.3.3 0 01-.413.077.3.3 0 01-.077-.077 13.134 13.134 0 01-1.792-4.209zm2.041 5.8c-1.107 0-2.041-.535-2.041-1.16 0-.356.32-.706.831-.927.173.32.337.6.473.814a.875.875 0 001.2.268.886.886 0 00.27-.268c.135-.212.3-.5.473-.814.512.222.831.571.831.927 0 .624-.935 1.157-2.042 1.157z"
                        ></path>
                        <path
                          data-name="Path 10"
                          d="M19.688 5.691a1.457 1.457 0 10-1.457 1.447 1.453 1.453 0 001.457-1.447zm-2.333 0a.875.875 0 11.875.87.873.873 0 01-.874-.87z"
                        ></path>
                        <path
                          data-name="Path 11"
                          d="M9.121 12.068a2.332 2.332 0 10-2.333 2.321 2.327 2.327 0 002.333-2.321zm-4.081 0a1.749 1.749 0 111.749 1.74 1.745 1.745 0 01-1.749-1.74z"
                        ></path>
                        <path
                          data-name="Path 12"
                          d="M10.58 18.97h-.034c-.153-.622-.928-1.132-2.11-1.387.961-1.76 2.142-4.365 2.142-5.564a3.79 3.79 0 00-7.579 0c0 1.2 1.18 3.8 2.142 5.564-1.328.288-2.141.9-2.141 1.623 0 1.022 1.629 1.793 3.789 1.793 1.911 0 3.4-.6 3.724-1.45h.066a.29.29 0 100-.58zm-7-6.951a3.207 3.207 0 016.413-.1v.1c0 1.229-1.647 4.724-2.717 6.392a.582.582 0 01-.8.18.574.574 0 01-.181-.18c-1.064-1.668-2.712-5.164-2.712-6.392zm3.207 8.4c-1.835 0-3.207-.641-3.207-1.214 0-.376.642-.861 1.859-1.089.131.229.255.432.366.605a1.165 1.165 0 001.963 0c.111-.173.234-.382.366-.605 1.217.229 1.859.713 1.859 1.089 0 .573-1.372 1.214-3.207 1.214z"
                        ></path>
                        <path
                          data-name="Path 13"
                          d="M13.251 13.509a.29.29 0 00-.291-.29h-.3a1.055 1.055 0 01-.213-.022.29.29 0 10-.121.568 1.63 1.63 0 00.334.035h.3a.291.291 0 00.291-.29z"
                        ></path>
                        <path
                          data-name="Path 14"
                          d="M18.296 13.753a.289.289 0 00-.18-.367 3.155 3.155 0 00-.613-.141.29.29 0 10-.077.576 2.654 2.654 0 01.5.114.291.291 0 00.37-.182z"
                        ></path>
                        <path
                          data-name="Path 15"
                          d="M19.443 14.921a.289.289 0 00.249-.326.283.283 0 00-.059-.139 3.205 3.205 0 00-.432-.458.292.292 0 00-.411.039.289.289 0 00.027.4 2.667 2.667 0 01.354.373.292.292 0 00.272.111z"
                        ></path>
                        <path
                          data-name="Path 16"
                          d="M14.953 13.508a.29.29 0 00-.291-.29h-.574a.29.29 0 100 .58h.574a.291.291 0 00.291-.29z"
                        ></path>
                        <path
                          data-name="Path 17"
                          d="M20.191 15.563a.291.291 0 00-.562.153 2.6 2.6 0 01.084.505.291.291 0 00.291.271h.02a.29.29 0 00.271-.305 3.193 3.193 0 00-.104-.624z"
                        ></path>
                        <path
                          data-name="Path 18"
                          d="M19.95 17.037a.292.292 0 00-.37.18 2.626 2.626 0 01-.215.467.291.291 0 00.5.293 3.135 3.135 0 00.262-.57.289.289 0 00-.18-.368z"
                        ></path>
                        <path
                          data-name="Path 19"
                          d="M12.2 18.973h-.574a.29.29 0 100 .58h.574a.29.29 0 100-.58z"
                        ></path>
                        <path
                          data-name="Path 20"
                          d="M17.293 18.962h-.556a.29.29 0 100 .58h.393c.067 0 .132 0 .2-.006a.29.29 0 10-.036-.579z"
                        ></path>
                        <path
                          data-name="Path 21"
                          d="M16.656 13.508a.29.29 0 00-.291-.29h-.574a.29.29 0 100 .58h.574a.291.291 0 00.291-.29z"
                        ></path>
                        <path
                          data-name="Path 22"
                          d="M18.685 18.428a2.654 2.654 0 01-.438.27.29.29 0 10.258.52 3.207 3.207 0 00.536-.331.289.289 0 00.083-.4.292.292 0 00-.4-.083.246.246 0 00-.035.027z"
                        ></path>
                        <path
                          data-name="Path 23"
                          d="M13.908 18.973h-.575a.29.29 0 100 .58h.575a.29.29 0 100-.58z"
                        ></path>
                        <path
                          data-name="Path 24"
                          d="M15.613 18.973h-.575a.29.29 0 100 .581h.575a.29.29 0 100-.581z"
                        ></path>
                        <path
                          data-name="Path 25"
                          d="M11.779 11.551a.3.3 0 00.2-.076 1.03 1.03 0 01.383-.222.29.29 0 00-.177-.552 1.611 1.611 0 00-.6.349.289.289 0 00-.017.41.3.3 0 00.214.093z"
                        ></path>
                        <path
                          data-name="Path 26"
                          d="M13.656 10.485l.556-.139a.29.29 0 10-.14-.563l-.557.139a.29.29 0 00.14.563z"
                        ></path>
                        <path
                          data-name="Path 27"
                          d="M11.765 12.969a.29.29 0 00.007-.285 1.008 1.008 0 01-.116-.425.292.292 0 00-.583.029 1.572 1.572 0 00.184.668.292.292 0 00.394.122.287.287 0 00.113-.108z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              Tour
            </span>
            <span className="option-lish-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-option-item"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28272">
                  <path
                    data-name="Rectangle 4485"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 25252">
                    <g data-name="Rectangle 4295">
                      <path
                        data-name="Path 20305"
                        d="M20.608 21H8.869a.39.39 0 01-.391-.391V3.391A.391.391 0 018.869 3h11.739a.391.391 0 01.391.391v17.217a.391.391 0 01-.391.392zM9.26 20.217h10.957V3.783H9.261z"
                      ></path>
                    </g>
                    <g data-name="Rectangle 4296">
                      <path
                        data-name="Path 20306"
                        d="M8.871 21h-5.48A.39.39 0 013 20.609V8.087a.391.391 0 01.391-.391h5.48a.391.391 0 01.391.391v12.522a.391.391 0 01-.391.391zm-5.087-.783h4.7V8.479h-4.7z"
                      ></path>
                    </g>
                    <g data-name="Rectangle 4297">
                      <path
                        data-name="Path 20307"
                        d="M8.87 13.173H5.739a.39.39 0 01-.391-.391v-2.348a.391.391 0 01.391-.391h3.13a.391.391 0 01.391.391v2.348a.391.391 0 01-.39.391zm-2.739-.783h2.348v-1.564H6.131z"
                      ></path>
                    </g>
                    <g data-name="Rectangle 4298">
                      <path
                        data-name="Path 20308"
                        d="M8.87 17.869H5.739a.39.39 0 01-.391-.391V15.13a.391.391 0 01.391-.391h3.13a.391.391 0 01.391.391v2.348a.391.391 0 01-.39.391zm-2.739-.783h2.348v-1.564H6.131z"
                      ></path>
                    </g>
                    <g data-name="Rectangle 4299">
                      <path
                        data-name="Path 20309"
                        d="M16.695 21h-3.913a.39.39 0 01-.391-.391v-1.561a1.958 1.958 0 011.956-1.956h.783a1.959 1.959 0 011.957 1.956v1.565a.391.391 0 01-.392.387zm-3.522-.783h3.13v-1.169a1.175 1.175 0 00-1.174-1.174h-.783a1.175 1.175 0 00-1.172 1.174z"
                      ></path>
                    </g>
                    <g data-name="Line 2175">
                      <path
                        data-name="Path 20310"
                        d="M11.997 6.131h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2177">
                      <path
                        data-name="Path 20311"
                        d="M18.258 6.131h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2178">
                      <path
                        data-name="Path 20312"
                        d="M11.997 8.479h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2180">
                      <path
                        data-name="Path 20313"
                        d="M18.258 8.479h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2181">
                      <path
                        data-name="Path 20314"
                        d="M11.997 10.826h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2183">
                      <path
                        data-name="Path 20315"
                        d="M18.258 10.826h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2184">
                      <path
                        data-name="Path 20316"
                        d="M11.997 13.174h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2186">
                      <path
                        data-name="Path 20317"
                        d="M18.258 13.174h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2187">
                      <path
                        data-name="Path 20318"
                        d="M11.997 15.522h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2176">
                      <path
                        data-name="Path 20319"
                        d="M15.128 6.131h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2179">
                      <path
                        data-name="Path 20320"
                        d="M15.128 8.479h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2182">
                      <path
                        data-name="Path 20321"
                        d="M15.128 10.826h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2185">
                      <path
                        data-name="Path 20322"
                        d="M15.128 13.174h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2188">
                      <path
                        data-name="Path 20323"
                        d="M15.128 15.522h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                      ></path>
                    </g>
                    <g data-name="Line 2189">
                      <path
                        data-name="Path 20324"
                        d="M18.258 15.522h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              Khách sạn
            </span>
            <span className="option-lish-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-option-item"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28237">
                  <g data-name="Group 28227">
                    <path
                      data-name="Rectangle 4479"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g data-name="Group 12">
                      <path
                        data-name="Path 30"
                        d="M18.603 7.394l-5.547 3.345-6.055-2.745-1.449.873 4.38 3.761-3.53 2.126-3.263-1.231L2 14.464l4.187 2.556 7.126-3.236 8.355-5.039a.682.682 0 00.243-.932.665.665 0 00-.135-.165 2.73 2.73 0 00-3.173-.254z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              Vé Máy Bay
            </span>
            <span className="option-lish-item">
              <svg
                viewBox="0 0 24 24"
                className="icon-option-item"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M21.3 12.6c.3.3.4.8.4 1.2v5.1c0 .7-.5 1.2-1.2 1.2h-.8c-.7 0-1.2-.5-1.2-1.2v-1.2H5.6v1.2c0 .7-.5 1.2-1.2 1.2h-.8c-.7 0-1.2-.5-1.2-1.2v-5.1c0-.4.1-.9.4-1.2l1.6-2.1H3.2C2.6 10.5 2 10 2 9.3S2.6 8 3.2 8h2.6l1-2.7c.3-.8 1-1.3 1.8-1.3 2.3-.2 4.6-.2 6.9 0 .8 0 1.5.5 1.8 1.3l1 2.7h2.4c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.2-1.2 1.2h-1l1.5 2.1zm-2.4-3.8l.4.9h1.4c.2 0 .4-.2.4-.4s-.2-.4-.4-.4h-1.8zM6 9.7h12.2l-1.5-4c-.2-.5-.6-.8-1.2-.8-1.1-.1-2.3-.2-3.4-.2s-2.3 0-3.4.1c-.5 0-1 .3-1.2.8L6 9.7zm-1.3 0l.4-.9H3.2c-.2 0-.4.2-.4.5 0 .2.2.4.4.4h1.5zM21 13.8c0-.3-.1-.5-.3-.7l-2-2.6H5.5l-2 2.6c-.2.2-.3.5-.3.7v5.1c0 .2.2.4.4.4h.8c.2 0 .4-.2.4-.4v-1.6c0-.2.2-.4.4-.4h13.7c.2 0 .4.2.4.4v1.6c0 .2.2.4.4.4h.8c.2 0 .4-.2.4-.4v-5.1zm-2.2-1c-.2 0-.4.2-.4.4v1c0 .2-.1.3-.3.3h-1.8c-.2 0-.4.2-.4.4s.2.4.4.4h1.8c.6 0 1.1-.5 1.1-1.1v-1c0-.2-.2-.4-.4-.4zM7.9 14.5H6.1c-.2 0-.3-.1-.3-.3v-1c0-.2-.2-.4-.4-.4s-.4.2-.4.4v1c0 .6.5 1.1 1.1 1.1h1.8c.2 0 .4-.2.4-.4s-.2-.4-.4-.4z"></path>
              </svg>
              Thuê xe
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxLoaiHinh;
