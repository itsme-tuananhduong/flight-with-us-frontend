import React, { useContext, useState } from 'react';
import { ThemeContext } from '../shared/context/ThemeProvider';

import DatePicker from 'react-datepicker';

import './HinhThucThanhToan.css';

function HinhThucThanhToan(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [toggleKhung, setToggleKhung] = useState(true);
  const [keep, setKeep] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      className={
        theme === 'dark'
          ? 'BoxHinhThucThanhToan__container dark'
          : 'BoxHinhThucThanhToan__container'
      }
    >
      <div>
        <h4 className="BoxHinhThucThanhToan-title">Hình thức thanh toán</h4>
      </div>
      <div className="BoxHinhThucThanhToan-content">
        <span>(Ghi chú: Phí thanh toán 0 ₫)</span>
        <div className="khung">
          <div className="khung-header">
            {toggleKhung ? (
              <svg
                data-name="Group 29041"
                onClick={() => (setToggleKhung(false), setKeep(true))}
                className="icon-khung"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.24 15.238l5.66-5.66a.345.345 0 00-.03-.48.348.348 0 00-.45 0L12 14.518l-5.42-5.42a.344.344 0 00-.48 0 .349.349 0 00-.1.24.349.349 0 00.1.24l5.66 5.66a.344.344 0 00.48 0z"></path>
              </svg>
            ) : (
              <svg
                data-name="Group 29042"
                onClick={() => (setKeep(false), setToggleKhung(true))}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-khung"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M11.743 9.098l-5.66 5.66a.345.345 0 00.03.48.348.348 0 00.45 0l5.42-5.42 5.42 5.42a.344.344 0 00.48 0 .349.349 0 00.1-.24.349.349 0 00-.1-.24l-5.66-5.66a.344.344 0 00-.48 0z"></path>
              </svg>
            )}
            <span
              className={toggleKhung ? 'khung-title' : 'khung-title active'}
            >
              Thẻ ATM hoặc iBanking của các ngân hàng
            </span>
          </div>
          {toggleKhung ? null : (
            <div className="khung-display">
              <p>Hỗ trợ các cổng thanh toán</p>
              <div className="khung-display-atm">
                <input type="radio" className="display-radio" />
                <img
                  src="https://flight.hahalolo.com/dc074cd08f0bd4365f1b38e901b25a6b.svg"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div className="khung">
          <div className="khung-header">
            {keep ? (
              <svg
                data-name="Group 29041"
                onClick={() => (setKeep(false), setToggleKhung(true))}
                className="icon-khung"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.24 15.238l5.66-5.66a.345.345 0 00-.03-.48.348.348 0 00-.45 0L12 14.518l-5.42-5.42a.344.344 0 00-.48 0 .349.349 0 00-.1.24.349.349 0 00.1.24l5.66 5.66a.344.344 0 00.48 0z"></path>
              </svg>
            ) : (
              <svg
                data-name="Group 29042"
                onClick={() => (setKeep(true), setToggleKhung(false))}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon-khung"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M11.743 9.098l-5.66 5.66a.345.345 0 00.03.48.348.348 0 00.45 0l5.42-5.42 5.42 5.42a.344.344 0 00.48 0 .349.349 0 00.1-.24.349.349 0 00-.1-.24l-5.66-5.66a.344.344 0 00-.48 0z"></path>
              </svg>
            )}
            <span className={keep ? 'khung-title' : 'khung-title active'}>
              Thẻ thanh toán quốc tế (Visa/Master)
            </span>
          </div>
          {keep ? null : (
            <div className="khung-display">
              <p>Hỗ trợ các loại thẻ</p>
              <div className="CacLoaiThe">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAMAAAD886zOAAAAflBMVEXt7e7k5+oqKirr6+zOz9CKi4snKChHcEzl6e7o6+78/v/////y+P0BQ5b5/P/x9/zv9v32+v0APZO+0OYWU6BqkcNEdrPo7fQtZKmkvdvW4vD5mByRrtN9oMt0msdYhbv5yoz627T4wnykgFCkiGT3r1GqmIDLjTwxX5Y/WXuFjx7DAAAACnRSTlPsuxS8nVUFAOnsy77iMAAAA6ZJREFUSMfVV9l2ozAMpUuaVMYOtgEDZelyOsv//+BoM2knfavnYQQnWEa+kq5k51Adjw+Hu1NVQB7vDg/HY3W8vQdTSOD+9lg93POwABr93D9UBzB0Gfj2xfehugNUiom5q04EVwBSw8TymmIhEhJWG4rKvwJ0377zgwFdgTv/KGC+vjGQHwa84Lk88PvE1Ssn+V0Ze5nNgB8ku9Md5XRXCvaHKXWWNx6rCuj8y/Prs8iLdyIwrsuyrNFMy8pPnDMwjV0/DEPfjQnYzEwzmc2qCqA36eX1SeVVXaU2oNhoZnqGGQFNWnmSZTFkZ6YhqJ2sw1MMBx4jTs/vgpjE8xystWFzpqMBLTARF1uVMBo2k7dZdfDIgM4jpSb9YMAXVHGqV5yaBqGdwEwtT0mArYQ0tYrfUcq4TgCxTjg26++fCPjMniOb9bVJA8EMCUBctH23dr1FD5TZoiGHQblnQI8R0tsY7NvT0zuqDjgVZA4mtt9qEzmYNnosaTONNVmlNlNADrzfARmUg0FE79QyYFzkBUerMaPEzA2CjSNE09zAqEyiZ0Cvl/MbLn4jErUkWEkZ2VkBceSFfg6Q6Agzs0xV1wg9Cz7E4U8EPDNf7YRh5yJD1PT6WIMsYR9YrzUw3QS0c8iojvn6/ZpLsuFCUGjwbtMOQUjmy3MnhM2MQejxOWUJEK+GU/jhIYflnWSFNfSQ+lxSu1I4wG7RSmKPoBH6iwAFb38lKQklIYmGno1TZzNkR/qmkSmVTMRnQCU+MpdYtzwTVjZ2ELcMGUGamgunqV8DAm8GLduQuE5c7lHLAHXsrfJruBZtTCnxaDhfAwrNduAlkoKyCbvPhmuD/ag7Ec8eaUTqCQGs9+uylfL7vX9qB05pUcA58xn28+GLCON+mnQc1L5jpm2cGjxN/dRLz9fD7ltXrHuEF5Eu4XaNgLrXnYzlwAMGj4V140Sxm0f7l4S+wSQ/p1xnzug0IB20yAYoQTlKZQPW0pTzyNIxSUkBL3i1IlDPUIA1CKcjuO5DgsEuLh9vcDnsbHQM+CFjjHCSQ35oWIdNznfnO7sf/rj1nNvkjwFkmfxfLKj9BYjvlo4EnZGcZ1LWVNcpzhv/PW1zbJxPbLZOuQCsju4LQMnB+UarxEKO+NnUquoL/2kVadeA35T/A/BcUIoDnh+rU9kIT9XpXB6wKXidqhsEbMrdN9WhKSjn5oAfj16GBe7G48cjft6Wi5A+b+kD/OZURG7oA/wPbFHZxQZtagUAAAAASUVORK5CYII="
                  alt=""
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAMAAAD886zOAAAAZlBMVEVHcEwnJydxnb1dbHhWms9xqNIpitRMlM1Ik81EkcwkJym6ytVdbnkAccsAc8v+//8AbckPe84oidPn8voZgdCLwOh4teTz+f3A3fPQ5vat0u/c7PhnrOCbyOtapd41kNZQn9xDmNm2eeDmAAAADXRSTlMABZ1U2bv46+zpFFVVTgwU/wAAA8tJREFUSMftV+1y3CoM3aSTpLc3gMT3hzHm/V+yB7xO2m53ZzrjH/1RzRiBEGeFkMRyuVye3l/eTqGX96cL6NvzqziJXp+/wb5nFvIkEvz8dHl/PQ1PSnr9//JyIh5sfLm8nQv4dvl6LuDXf4BnAv4Y8vKPk+Q3gHqQnS1yR9+Q5TnJOxsC+9ke2fYJSM0opUIOaFWlRd1SKlMjHeOSpzSOdqFfAYVTznuAVu9TaNE470L0g2pwk0dVPDDi0CvOAWhvjcu3gMKaKAR5pRrRppJyRGwcwTuw3U7OMWLKCRIyrkQ6qExkixrSG0BAreRZG9Wk5qRCY2sB6EtKJVgbU1rJRbEWyzWlyG2hDEArVxXFLaDgVIC2QamxFwtUt21YuNZaIwCTMauIAMxjF8pTTbJDa5nSW8CxFVoA0GFhalygNwEFEWR66gxb1koVXtMcDRQBWGTP8jdbjkETMxOnLkuljXvo/LllXvwCMw8LK0lmuAmAyovtFhBGZKHXdW3k8cM4BJnVDhhjTNhyGCgVgInZxSY3KLPFrmCtuD0UUUOnEVVQZ5ngIhxh5/JxymxiyQDE0srwQ9tjr414zbeAQoeQcWYtq5gzYtuM6I05JDeoqjGZTDYzqktF9IWtGQPdFBA2Of4K6BS2FDbqM09CNviQFmEOJ8MPlknJ5QRWJbk5jusY4hB/2jJiDoTx5BbpOj6+jubHB43zgF9QDvax4Ot4FojDh0fFuPKP1YzR0ZWH+ENyiI6Ze/VQjDC+kqet7L2S895JNV4ny7UX95ksxR1AHLHZPaaCM9f+KEZpEJxrjk5BVEVoD2biA8Ckd6eNKuasni7tMU1X8RrqqMCklZdIJIpRD7bcBUQQJqlRr5YRZ5WaF21ZOunIvCHFKQ+Z9w5Ri/heUxcdLD+0UC4BZJrYWCMVkW5Il8waFq8D0I/pKFsxiKnGebCHFs7IWVWxZJOqoju3UIcUZtseHM1ppBe4D04g3raS+JGFellWpyLKRQQg49pYsWIEqlgBCB8sSIfsF43yEx080kN75MNR9VREmWGbcMWMLakkmwmljy27PYfGmc0CqRJq/koPLLRw/2ZFxaHoBWtKzCmJpkpAca3ETevNdN20FNlp3SzKZaf7Frb9pnTKKIdVTm0sammrqqXqnOfkANS61+DBmg+PfPhxdeYW906nUapRFZO6Q6WJe6nH/qDFkt57Voht1LLNu5/J912yWHH3v824SK4kjoG4in+YO1Q+VP/9nftrAU9/Vpz+8Dn1aSZev5z/eDz9ebs/wP87gd5evsC+71qg+/98HqeVAAAAAElFTkSuQmCC"
                  alt=""
                />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAMAAAD886zOAAABsFBMVEVHcEx/f3/q6uoqKir8/P3u7u4nJyfv7+/v7+/t7e3R0dHQ0NDs7Ox/f3/r6+vQ0NDc3Nz////08/MBarYIWqE6nzgGYakCZrEOTZJQqjMikToPSY0SRokSQoUUPoC+EzSxFzPEEDTKDjTpAC/I5bu3FTOqGTPQCzSlzef39vYolDr0VnrWCTUWOnyjGzHdBzXjBDUtlzn89/gdjjsKVJpNqDVFW48YizwzmjhIpTYSM3VCojedHzIMUJYDgTqHISzBkZaXIjMTiT6QJDL2+/rx8fANhj7F0uFZrzYlkVhZrjby6erK3ezX7NXI4sz0y9Tnxsvy3ODp7u2GwJcPhzf//PmUx458vHk5m1xkr4Barkhgkb7O4tLU5NhJkcW9ZnWvUmDfgZTiXXowl0sZb7MLOX5Ko2PNoKbkCDmu1afLgY7c5OyRGyyBncDRZHmcutUJQohmf6kSMnXg7uBRbJy7xdfjRmjKGj4wUoyp07hCiL642b/vrbvCPVbURmOjrcW4GDeyKEFIeq4PL3Phoa1hr2GXN0P1gJq/ipDXDDgTiUMZVZbqEUK82bRBV4wOLnKVQkpRAAAAEXRSTlMAVLoU/uQF7Onsnpy8VbubVUzE2xYAAANDSURBVEjH7df5WxJBGAdwxAVL09rJk0rtbig11yu1zGo3zAV0l/sS5AyBkLzvIzW7/+Vml0PYAZ7lefZ56ge/v8Cz7H54mdl52VGpVNrmFs1VBaJpadaqUOqbCFKhEI31qL5GUsE0alXNhJIgvKG6hh/kjYWA7CGK5eby4QqnmXymXGDhYrVKI+ESqdXOzlfDra3t7R03bz4RuRP/Ue9hz917j78NfLz/VDxtxRLV6wdftE1Ojo90zTwoXK5RNZR6a5uR5VulIOd/2f+o96EAPht4ngW3QtYxnQC2CeDsBdggAde6I3dul4JsIImBO9+tY0NyQDA60S0Fz5NvpCDvnHorD0x/7pOC7Nk7DNyaei8TzHzBwPnXOOiSC9pW8QpjZUCnXJAYncDA6TLgh0vwH4BZMQ8mcXDKml8q8sBjj5BwhwieBfx+/yeUYDC4jpoDQbvEOFwOlFNZoAEwDEMtCGDsnGMZAFkOvdD0LgJp4UOfEAa94+Ml3aYSCAEAWZCFEHGxvb29/f3gyaIIAsBEQ6GQ08Kgt8AxUgtoA+gixl88hiLotA7pdIM7FDrNLq9CJguiKwCM9VcBoV1mhUwBZAISEI1ddAj9ZgePPvW6axpDAWQDeIU+r9frA+iHmN3jXbVWyJap0OWMRqMWVCEfr1ghAeFqth/+SAgVMtv5MZwuN4bCjb1VdVIIAA/6hL+AZY8ws5QhLM6yWGLZSdHr4sKk/Kp4Y9NI3ERgJiGUxW+LS49BxUJu6eiwZ2NjPxjM34dO9KenP10B1W8byNv4tbQBGZAybuc6doylIU2z83McC3IrBVLQZ0azwlAQUuYqs0xnDhLAZrNB3pAKF5pDwL+EsigmKK5lSy52FIe72tL7/Wczk0qlPMfDwxftK1mh2+gK3abqbROJLKNHh9r64YzSDfYS/B9Bs1wwnMDBrzjoXpEJdiwQGPiTw8ARBym3QiOJgahAKThrkgumSQxcBzgYJyuDRc+HreE0gYFBlpSAbe5iD4GaChWGPUbxWBG4sb5rIyWg224qeerXlG58DIUY+dx3sPP5zHFU7jSvOR8TI9nmqBXemhF1Cm8er2uV3d421QsbZm2zWnNFgWjUdai+v3RtI6T47DHOAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>

              <div className="Khung-Nhap1">
                <div className="form-field">
                  <input type="text" className="form-input" placeholder=" " />
                  <label htmlFor="name" className="form-label">
                    Số Thẻ
                  </label>
                  <span className="message-error"></span>
                </div>
                <div className="form-field">
                  <input type="text" className="form-input" placeholder=" " />
                  <label htmlFor="name" className="form-label">
                    Tên Chủ Thẻ
                  </label>
                  <span className="message-error"></span>
                </div>
              </div>

              <div className="khung-nhap2">
                <div className="form-field">
                  {/* handleDate */}
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="form-input time"
                    minDate={new Date()}
                  />
                  <label htmlFor="name" className="form-label label-time">
                    Ngày hết hạn
                  </label>

                  <span className="message-error"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="time-icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28552" fill="none">
                      <path data-name="Rectangle 4592" d="M0 0h24v24H0z"></path>
                      <g transform="translate(4 3)" stroke="currentColor">
                        <rect
                          data-name="Rectangle 4333"
                          width="16"
                          height="16"
                          rx="1"
                          transform="translate(0 2)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></rect>
                        <path
                          data-name="Line 2214"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M0 6h16"
                        ></path>
                        <path
                          data-name="Line 2215"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 0v3"
                        ></path>
                        <path
                          data-name="Line 2216"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2 0v3"
                        ></path>
                        <g
                          data-name="Group 25385"
                          transform="translate(2.556 9.145)"
                        >
                          <circle
                            data-name="Ellipse 938"
                            cx="1.027"
                            cy="1.027"
                            r="1.027"
                          ></circle>
                          <circle
                            data-name="Ellipse 939"
                            cx="1.027"
                            cy="1.027"
                            r="1.027"
                            transform="translate(4.429)"
                          ></circle>
                          <circle
                            data-name="Ellipse 940"
                            cx="1.027"
                            cy="1.027"
                            r="1.027"
                            transform="translate(9.102)"
                          ></circle>
                          <circle
                            data-name="Ellipse 941"
                            cx="1.027"
                            cy="1.027"
                            r="1.027"
                            transform="translate(0 4.239)"
                          ></circle>
                          <circle
                            data-name="Ellipse 942"
                            cx="1.027"
                            cy="1.027"
                            r="1.027"
                            transform="translate(4.429 4.239)"
                          ></circle>
                          <circle
                            data-name="Ellipse 943"
                            cx="1.027"
                            cy="1.027"
                            r="1.027"
                            transform="translate(9.102 4.239)"
                          ></circle>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="form-field">
                  <input
                    type="password"
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="form-label">
                    Mã CVC
                  </label>
                  <span className="message-error"></span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="footer">
          <div className="footer-content">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="footer-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28884">
                  <g data-name="Group 28879">
                    <path
                      data-name="Rectangle 4692"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                  </g>
                  <g data-name="Group 28883">
                    <g data-name="Group 28882">
                      <path
                        data-name="Path 20623"
                        d="M22 8.402a1.405 1.405 0 00-.287-.865l-1.585-2.028A1.363 1.363 0 0019.055 5a1.321 1.321 0 00-.7.2l-1.545.961a1.41 1.41 0 01-.71.173 1.287 1.287 0 01-.544-.107l-1.513-.733a1.823 1.823 0 00-.79-.166 1.967 1.967 0 00-1.111.32l-.177.124-.6-.3a2.267 2.267 0 00-.985-.2 2.358 2.358 0 00-.9.166l-1.031.44a1.884 1.884 0 01-.7.119 1.883 1.883 0 01-.7-.119L6.013 5.43a1.5 1.5 0 00-.589-.115 1.793 1.793 0 00-.67.131 1.523 1.523 0 00-.565.389l-1.878 2.1a1.22 1.22 0 00.119 1.749l1.752 1.495-.831.867a1.238 1.238 0 00.042 1.754l.169.16a1.236 1.236 0 00.55.3 1.224 1.224 0 00.231 1.487l.169.161a1.254 1.254 0 001.346.244 1.225 1.225 0 00.345.6l.169.161a1.252 1.252 0 001.551.133 1.23 1.23 0 00.324.532l.169.161a1.253 1.253 0 001.762-.042l.735-.767 1 .924a1.252 1.252 0 001.761-.063l.159-.171a1.229 1.229 0 00.279-.5l.387.357a1.254 1.254 0 001.762-.065l.158-.17a1.225 1.225 0 00.318-.685 1.22 1.22 0 001.223-.351l.159-.17a1.235 1.235 0 00.332-.844 1.266 1.266 0 00-.034-.278 1.235 1.235 0 00.747-.378l.159-.171a1.24 1.24 0 00-.065-1.754l-.3-.275 2.689-2.973A1.416 1.416 0 0022 8.402zM4.422 13.625a.566.566 0 01-.391-.155l-.169-.16a.564.564 0 01-.02-.8l1.7-1.776a.571.571 0 01.8-.019l.168.16a1.067 1.067 0 01.175.409.561.561 0 01-.1.319L4.752 13.52a.573.573 0 01-.33.105zm1.359 1.772a.572.572 0 01-.8.019l-.169-.161a.565.565 0 01-.019-.8s2.269-2.362 2.288-2.385a.568.568 0 01.783 0l.169.161a.565.565 0 01.019.8zm1.86 1a.571.571 0 01-.8.019l-.17-.161a.56.56 0 01-.049-.759L8.2 13.85a.566.566 0 01.769.008l.17.161a.564.564 0 01.019.8zm3-.174l-.959 1a.571.571 0 01-.8.019l-.169-.161a.564.564 0 01-.019-.8l.958-1a.571.571 0 01.8-.019l.17.161a.565.565 0 01.019.8zm8.33-2.714a.558.558 0 01-.151.383l-.159.17a.571.571 0 01-.8.029l-2.677-2.476-.463.5 2.866 2.655a.564.564 0 01.029.8l-.158.17a.571.571 0 01-.8.029l-2.678-2.476-.462.5 2.376 2.2a.563.563 0 01.023.789l-.159.17a.572.572 0 01-.8.03l-2.372-2.19-.462.5.009.008 1.188 1.1a.558.558 0 01.01.772l-.159.171a.57.57 0 01-.8.029l-1.032-.973a1.221 1.221 0 00-.245-1.458l-.17-.161a1.246 1.246 0 00-.859-.341c-.024 0-.048.005-.071.007v-.017a2.367 2.367 0 00-.385-.9l-.169-.16a1.242 1.242 0 00-.627-.32 1.222 1.222 0 00-.314-1.308l-.169-.161a1.248 1.248 0 00-.86-.342c-.036 0-.071.007-.107.01a1.235 1.235 0 00-.381-.859l-.169-.16a1.253 1.253 0 00-1.762.041l-.4.419-1.779-1.518a.546.546 0 01-.053-.78l1.878-2.1a.857.857 0 01.314-.212 1.118 1.118 0 01.413-.081.824.824 0 01.321.06l1.031.44a2.537 2.537 0 00.967.174 2.537 2.537 0 00.967-.174l1.031-.44a1.688 1.688 0 01.637-.111 1.618 1.618 0 01.681.131l.275.137-1.051.739a1.214 1.214 0 00-.277 1.723l.139.187a1.357 1.357 0 001.086.532 1.318 1.318 0 00.679-.185l.629-.377a1.035 1.035 0 01.522-.127 1.087 1.087 0 01.615.173l1.739 1.247a17.371 17.371 0 011.367 1.115l2.013 1.861a.561.561 0 01.178.409zm2.169-4.611l-2.681 2.965-1.217-1.125A17.915 17.915 0 0015.81 9.57l-1.737-1.24a1.757 1.757 0 00-1.012-.3 1.712 1.712 0 00-.874.224l-.628.377a.638.638 0 01-.328.088.678.678 0 01-.54-.258l-.138-.186a.539.539 0 01.123-.767l1.859-1.306a1.308 1.308 0 01.718-.2 1.151 1.151 0 01.492.1l1.513.733a1.954 1.954 0 00.842.175 2.07 2.07 0 001.069-.28l1.546-.962a.642.642 0 01.34-.093.686.686 0 01.536.248l1.585 2.028a.738.738 0 01.144.45.752.752 0 01-.178.5z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span>
              Tiếp tục thực hiện bước tiếp theo, tôi xác nhận đã xem và chấp
              thuận các
              <a> Điều khoản & Chính sách</a> và <a> Chính sách riêng tư</a> của
              Hahalolo
            </span>
          </div>
          <span
            className="footer-btn"
            onClick={() => {
              props.onPay();
            }}
          >
            Thanh Toán
          </span>
        </div>
      </div>
    </div>
  );
}

export default HinhThucThanhToan;
