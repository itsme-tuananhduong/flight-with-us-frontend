import React,{Fragment,useState} from 'react'

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const[checkPass,setCheckPass] = useState(false);

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
            <h3 className="title">Đăng Nhập</h3>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " value={userName} onChange={(e)=>setUserName(e.target.value)} />
              <label htmlFor="name" className="form-label"
                >Email hoặc Số điện thoại
                <span className='dausao'>*</span></label>
            </div>
            <div className="form-field">
              <input type={checkPass?"text":"password"} className="form-input" value={password} placeholder=" " onChange={(e)=>setPassword(e.target.value)} />
              <label htmlFor="name" className="form-label"
                >Mật khẩu <span className='dausao' >*</span></label
              >
              {(password !=="" && !checkPass)? <div className="showPassword" onClick={()=> setCheckPass(true)}>
                <svg className="showPassword-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
              </div> : null}
           

              {(password.length>0 && checkPass)? <div className="showPassword" onClick={()=> setCheckPass(false)}>
                <svg className="showPassword-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>
              </div>:null}
            </div>
            <button className="btn-login">Đăng Nhập</button>
            <p className="content-tilte">Quên Mật Khẩu</p>
            <p className="content-text">
              Bạn chưa có tài khoản ? <span className='content-text-span'> Đăng kí ngay tại đây</span>
            </p>
          </div>
        </div>
        </Fragment>
    )
}

export default Login
