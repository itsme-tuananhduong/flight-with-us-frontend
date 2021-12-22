import React,{Fragment} from 'react'

function Register() {
    return (
        <Fragment>
            <div className="container_main-introduce-logo logo-form">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="MuiSvgIcon-root jss6"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28306">
                <path
                  data-name="Rectangle 4447"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <g data-name="Vector Smart Object">
                  <g data-name="Group 1">
                    <path
                      data-name="Path 1"
                      d="M20.999 12.066v7.73a1.2 1.2 0 01-1.2 1.2h-7.8a8.979 8.979 0 01-6.869-3.187l-.064-.077a8.731 8.731 0 01-.525-.7l-.042-.062a9 9 0 016.906-13.954l.12-.007a9.1 9.1 0 018.984 6.093 8.79 8.79 0 01.482 2.528q.01.218.01.436z"
                    ></path>
                    <path
                      data-name="Path 2"
                      d="M13.381 11.007a6.936 6.936 0 00-1.075 1.561 16.72 16.72 0 00-.838 1.873q-.344.921-.7 2.011-.127.431-.283.93t-.168.541a.38.38 0 01-.087.155c-.009.009-.036.011-.041 0s.035.1.1.126a.1.1 0 00.082-.008 2.265 2.265 0 00.194-.428 44.188 44.188 0 012.377-5.57 4.315 4.315 0 01.875-1.19 1.3 1.3 0 01.552-.594 1.805 1.805 0 00-.988.593z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="Path 3"
                      d="M10.394 17.979a.2.2 0 01-.107-.116.279.279 0 01-.02-.1.867.867 0 01.025-.142l3.088-12.02a.149.149 0 00-.118-.18.173.173 0 00-.083 0l-1.7.478a.286.286 0 00-.2.2l-2.5 9.939a2.322 2.322 0 00-.13.757 2.029 2.029 0 00.16.817 1.484 1.484 0 00.419.573.857.857 0 00.547.208.8.8 0 00.685-.426.1.1 0 01-.066.012z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="Path 4"
                      d="M14.153 17.271a3.52 3.52 0 01.1-1.248l.91-3.423a5.1 5.1 0 00.158-1.183 1.729 1.729 0 00-.22-.93.768.768 0 00-.7-.346 1.157 1.157 0 00-.192.016l-.034.017-.031.018-.031.019-.026.017-.015.011-.031.024-.016.013-.027.023-.026.024-.037.036-.018.018-.034.037-.016.018c-.017.021-.035.042-.05.063l-.017.023-.008.012-.02.029-.011.017q-.031.047-.052.084l-.008.015c-.026.047-.039.077-.039.077a.149.149 0 01-.01.035.089.089 0 01-.006.017c0 .011-.009.03-.025.088s-.02.077-.027.112l-1.095 4.153q-.1.5-.158.824a3.655 3.655 0 00-.056.594 1.753 1.753 0 00.447 1.247 2.015 2.015 0 001.37.47 3.621 3.621 0 002.771-1.462c.088-.107.01-.32-.1-.24a5.44 5.44 0 01-1.8.894c-.544.125-.739-.059-.82-.213z"
                      fill="#fff"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span className="container_main-introduce-textlogo">Hahalolo</span>
          </div>
            <div className="container_main-form">
          <div className="container_main-form-content">
            <h3 className="title">Đăng kí</h3>
            <div className="user">
              <div className="form-field">
                <input type="text" className="form-input" placeholder=" " />
                <label htmlFor="name" className="form-label"
                  >Tên <span className='dausao'>*</span></label
                >
              </div>
              <div className="form-field">
                <input type="text" className="form-input" placeholder=" " />
                <label htmlFor="name" className="form-label"
                  >Họ <span className='dausao'>*</span></label
                >
              </div>
            </div>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label htmlFor="name" className="form-label"
                >Điện thoại hoặc Email <span className='dausao'>*</span></label
              >
            </div>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label htmlFor="name" className="form-label"
                >Mật khẩu <span className='dausao'>*</span></label
              >
            </div>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label htmlFor="name" className="form-label"
                >Nhập lại mật khẩu <span className='dausao'>*</span></label
              >
            </div>
            <button className="btn-login">Đăng kí</button>
            <p className="content-text">
              Bằng cách nhấp vào Đăng ký, bạn đồng ý với <span className='content-text-span'>
                Điều khoản dịch vụ </span>,<span className='content-text-span'>Chính sách dữ liệu </span> ,<span className='content-text-span'> Chính sách cookie </span> và <span className='content-text-span'> Tiêu chuẩn cộng đồng của chúng tôi </span>
            </p>
            <p className="content-text">
              Bạn đã có tài khoản? <span className='content-text-span' > Đăng nhập</span>
            </p>
          </div>
        </div>
        </Fragment>
    )
}

export default Register
