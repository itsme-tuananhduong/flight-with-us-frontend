import React from 'react'
import { DatePicker } from "antd";
import moment from "moment";


import './hinhThucThanhToan.css'

function HinhThucThanhToan() {
    function disabledDate(current) {
        return current && current < moment().startOf("day");
      }
    return (
        <div className='BoxHinhThucThanhToan__container'>
             <div>
                <h4 className='BoxHinhThucThanhToan-title'>Thông tin người thanh toán</h4>
            </div>
            <div className='BoxHinhThucThanhToan-content'>
                <span>(Ghi chú: Phí thanh toán 0 ₫)</span>
                <div className='khung'>
                    <div className='khung-header'>
                        <svg data-name="Group 29041" className='icon-khung' xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="MuiSvgIcon-root MuiSvgIcon-colorAction" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.24 15.238l5.66-5.66a.345.345 0 00-.03-.48.348.348 0 00-.45 0L12 14.518l-5.42-5.42a.344.344 0 00-.48 0 .349.349 0 00-.1.24.349.349 0 00.1.24l5.66 5.66a.344.344 0 00.48 0z"></path></svg>
                        <span className='khung-title'>Thẻ ATM hoặc iBanking của các ngân hàng</span>
                    </div>
                    <div className='khung-display'>
                        <p>Hỗ trợ các cổng thanh toán</p>
                        <div className='khung-display-atm'>
                            <input type="radio" className='display-radio' />
                            <img src="https://flight.hahalolo.com/dc074cd08f0bd4365f1b38e901b25a6b.svg" alt="" />
                        </div>
                    </div>

                </div>
                <div className='khung'>
                    <div className='khung-header'>
                        <svg data-name="Group 29041" className='icon-khung' xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="MuiSvgIcon-root MuiSvgIcon-colorAction" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.24 15.238l5.66-5.66a.345.345 0 00-.03-.48.348.348 0 00-.45 0L12 14.518l-5.42-5.42a.344.344 0 00-.48 0 .349.349 0 00-.1.24.349.349 0 00.1.24l5.66 5.66a.344.344 0 00.48 0z"></path></svg>
                        <span className='khung-title'>Thẻ thanh toán quốc tế (Visa/Master)</span>
                    </div>
                <div className='khung-display'>
                    <p>Hỗ trợ các loại thẻ</p>
                    <div className='CacLoaiThe'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAMAAAD886zOAAACNFBMVEVHcExIg8BIb6szWaJIe7hIc69IgLxMisVEZ6NId7QnJydxjrBdZ3Nxi7ZOcKhNisVwnswkJigpe8tGaaQkdMO6xtT/hQDlKDbLICb4mB0AOJMAOpUAX8AANpEAMo4AXbwAYb7/UFD/hwEAYL4AN5EAPZkAW7oAV7X4lxkAP5sAX7z/twAAQp4BWbfKHyUASKUAVLIARKEATKne6urZIy7/ggDe5uYAUbDKGScAT63c6u77mxzmITD/T03SHyQANpfnXyHf4uHg8fH7oxv6nTTf3Nzi9PbdSCLwNT7tJzPnTVjKFx8AYsP1uHHm2cPSLSbllJrr+PnZOif9qwnb6/Pq07MdQ4ibMVIAXcTlLjyFOGL1//7scB7RP0bf1dbRTVP259//jRHNKzPfrK8MPJH6nQr1qEfshQ/oY23ty53mh43+/v3k3c7NMUMZWqdoY2H9liTwUVjpvsH0REraUlzTfx/pd4Deih8VRZrgtrn0lBzgzc72woXZoaPmN0QZN4nzx5QYZauvezvCgi/0rl7y8vLzztDYYGXUbHItT5vOUl9fOXEsZp1BVHNTVZTvqq74hgXfw8WyU296b17xsLSAZ061MEntLTjzhCHhUxjVeH7gbXJDNXcyOoSUVHu0mjovUIDCIzGChl3cMD/+SEn5lZf9qU3jSk7npKjm5OLYj5H/37xaVmZXfHthUYmheERdanH9slfmwLP/xQDVgoXVqB8Pa8b2sweYcUTdPyr/ZGTjZzKKxLtoAAAAFnRSTlMA7Oz87Ozs7OnsBZ1Vu+TkuxT56fhVVaAasAAABxRJREFUSMet1/lb2loaB3BabzvT1i63d25EpTKGolgFWyNRI6DJJdwCFwoWUKDsFhFQkcd939datWqt2sXudm+f9i4z88/NOYGwKT/MM/16kMgxH97kJCcJh8M5nXvh/N++Q85fyD3NAfnxzEUB77tEcPHMj6C+M38I/vm/Bqx91MeCP86c5uRe5AsOhcf7jSf4DYZ3qKelpYV3ZfIKfMvsFPD/8TPnAv9KRngCcc7Hx/fuNdtsto+dYh4vpavlyuSHZ0+ePOmdnpp6dmcytY8J/wLnfAk/LTx+zuOeYrlcfr1aoVBwufeXF3mCeF/L5Icnf5aXl9+sRxEUtP6NOy28tLVLznOOZYA597rl8uLi4ut51RIuiELxtHkx9lWTz34vh7mZL0IRJmjbpztpYskxAKaE1/m4G2rQi4OMaesUlPA/xDjgJUBIbpTwUwQAipN/8XOWYpwceEkQkPcXxc/+THgpICCnJhOiWAzAUjGbkrvdKV4qKFE8nS5PemkggvbeKWGJ0lQww0sFuZLGVC8dRJD+hMiA8SS84piXVmFT21Db7YSXCSK9neK4coxz8mpsSdzZk1ZfOiipra29cZv1DoHop7h39WQCLL2X4SVBCRhneEzusN4hEEE/ixNgzVWY0rvFadubVmHjbSai/Kwg0t9ZCpmaBFgTO2CS9aWAN27Gx2MoO4huZIB3izO9lApvsLmVFUTaOlmwrgaG2YNpXhKsTeRf2UH081XA1J3k/FBXA8jFbjAfvNjOy5PJZBlgbdMtkEYmsEIRTCYolSLTsK66HwAIUvNRLv/3y5dBq7XPYOizsqAEkFpt29evX8t/iaVelD/Tbp7wZ4KvvkT6O2uABMAqCD6Wv3gZMpJWzSxB+WCRoFVzvV6u92DzPzs7O7/G0xhpxwiTSY9KERRUJZXCX+DHbR9BPgOwKg7WLRW/WA1htDVI4YSh++XqQZ9VFvAND3/rCdl3vd6F3YUOrXevZ2lvgsL07fr2iG5iQhdBX31RzniUI7qIm9IhXSxYVVVX1SPfjtpxeiyK4Vhwzk4RVDAAilW93QtR9PwgpaKGHfOhWTLqJsxKkVI5YleZTGZlKETrdW9MpjBJvkI26gAVBwd6ro/NGWln4A1JkoG+vj0fsb5pdy7sOoJ2enRVNbgwTL0NAntulvSLwLi8mpnR0bguNEu0g69ox3A6gvwVA09VgrdFh0zjxodpAxnF6DHNXnAQg+CSVrtp/OZwU99cPsoXtdNLB8ZwPjhhRB6/boLEJ0LEzIgx7PGYiTCKTAGo8lQc7JAFZoejOL1uIIb7SAps+GC3m8JGvXPUQo8dp8A+GJ0zjko2jXp45Pj1JgLHyXfGcOSdakSKtINhQj6xIMhAh6zP6PNhmGEQGyaxg8Ccyid77cPwBZp0zdtJ3+jo6K6beqtdhRWKRGaTfkZnDLtV7Z53Kp3UoycmEHSrCkhxsOq+2qAyGDAy4MSiYC9qnJhB83wex0dpJwDxea7XMf8GX9AGjfiE368DgGfEZHabRpB3KrNShxEzUrQrDl6D4n11lAoaqMHXOGagwc7E8M1ZGsecgzhOu+ZUtG9wHXxdh/a1m8BwwmwmSD1GmMOETjqiwnECJ/wABM61OFhl23bigSDW9xonAwcYtk7jqxSGOXddNEV6HVFMpVp/q3J6a3e+hAkC0+lIIqzH9G9wpdRjNmF6Aiy07bMgSOWjbY3GOqaxWjXMawy2HpdDInG4HFyt1+VyOTrAUu0tkdLv9+eDI9ETUUaUShSResAyaEhvJZROcU4wIBiV2Pkmi71gq9aCU1mi1d5oTGaImRvyRUjstJPGJga4gG4x4AnOiQr4fs2mzstMYvp68Aub+uzT19o+ZCogCFNpeZ4VrG1ip4ZfH2QHpyquQYgFK44oMXmRYufXpqGs4NoK40GwLCYOdKizgVxuUyy3sm4y+lfMKwOgsIxJxfJ2drCR2YH1Wa96aK+lglGESbCsInOjU29FGsFV4EF+NhBdW4l5EDzOgmUDzeqsILxxYMAhpuVngF2sITwOwEQyxLSbJUVTSoEZFQIvYQCwMCm22vLUR4OK5vf99Sli6v1hW1dSKIRgMkLh8nP1EaCCa2sV7k+BUYlvcWqF0/vASYQBhYmfQqGlOU+tTgcViuaHoKuhsKs/MdDsPTbattUKuQQAwILC1DQIHzV3MOR2NXvP/rA13mfpmh5izFiFKNq7ZWlIW73gOOfcpYL0FBaOL9s6nsPrsoT7tHn5Efi3eBoaClY2pvuHhgC4tta79b4VfJKWS+c4ZzNBuGJB6/j4o4cPx8fHLyc5mMsNDa0Wy/7K+xWL5ZAGwbOc3Jyiy0cE9IHVQTuUS7Cngek+lKKcXPDwOFB06TulaAA8PILH25yi75Qc+HgLH8DPnvvp7/93fjp3Fj6A/xeRGQXlBMhuswAAAABJRU5ErkJggg==" alt="" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAMAAAD886zOAAAAflBMVEXt7e7k5+oqKirr6+zOz9CKi4snKChHcEzl6e7o6+78/v/////y+P0BQ5b5/P/x9/zv9v32+v0APZO+0OYWU6BqkcNEdrPo7fQtZKmkvdvW4vD5mByRrtN9oMt0msdYhbv5yoz627T4wnykgFCkiGT3r1GqmIDLjTwxX5Y/WXuFjx7DAAAACnRSTlPsuxS8nVUFAOnsy77iMAAAA6ZJREFUSMfVV9l2ozAMpUuaVMYOtgEDZelyOsv//+BoM2knfavnYQQnWEa+kq5k51Adjw+Hu1NVQB7vDg/HY3W8vQdTSOD+9lg93POwABr93D9UBzB0Gfj2xfehugNUiom5q04EVwBSw8TymmIhEhJWG4rKvwJ0377zgwFdgTv/KGC+vjGQHwa84Lk88PvE1Ssn+V0Ze5nNgB8ku9Md5XRXCvaHKXWWNx6rCuj8y/Prs8iLdyIwrsuyrNFMy8pPnDMwjV0/DEPfjQnYzEwzmc2qCqA36eX1SeVVXaU2oNhoZnqGGQFNWnmSZTFkZ6YhqJ2sw1MMBx4jTs/vgpjE8xystWFzpqMBLTARF1uVMBo2k7dZdfDIgM4jpSb9YMAXVHGqV5yaBqGdwEwtT0mArYQ0tYrfUcq4TgCxTjg26++fCPjMniOb9bVJA8EMCUBctH23dr1FD5TZoiGHQblnQI8R0tsY7NvT0zuqDjgVZA4mtt9qEzmYNnosaTONNVmlNlNADrzfARmUg0FE79QyYFzkBUerMaPEzA2CjSNE09zAqEyiZ0Cvl/MbLn4jErUkWEkZ2VkBceSFfg6Q6Agzs0xV1wg9Cz7E4U8EPDNf7YRh5yJD1PT6WIMsYR9YrzUw3QS0c8iojvn6/ZpLsuFCUGjwbtMOQUjmy3MnhM2MQejxOWUJEK+GU/jhIYflnWSFNfSQ+lxSu1I4wG7RSmKPoBH6iwAFb38lKQklIYmGno1TZzNkR/qmkSmVTMRnQCU+MpdYtzwTVjZ2ELcMGUGamgunqV8DAm8GLduQuE5c7lHLAHXsrfJruBZtTCnxaDhfAwrNduAlkoKyCbvPhmuD/ag7Ec8eaUTqCQGs9+uylfL7vX9qB05pUcA58xn28+GLCON+mnQc1L5jpm2cGjxN/dRLz9fD7ltXrHuEF5Eu4XaNgLrXnYzlwAMGj4V140Sxm0f7l4S+wSQ/p1xnzug0IB20yAYoQTlKZQPW0pTzyNIxSUkBL3i1IlDPUIA1CKcjuO5DgsEuLh9vcDnsbHQM+CFjjHCSQ35oWIdNznfnO7sf/rj1nNvkjwFkmfxfLKj9BYjvlo4EnZGcZ1LWVNcpzhv/PW1zbJxPbLZOuQCsju4LQMnB+UarxEKO+NnUquoL/2kVadeA35T/A/BcUIoDnh+rU9kIT9XpXB6wKXidqhsEbMrdN9WhKSjn5oAfj16GBe7G48cjft6Wi5A+b+kD/OZURG7oA/wPbFHZxQZtagUAAAAASUVORK5CYII=" alt="" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAMAAAD886zOAAAAZlBMVEVHcEwnJydxnb1dbHhWms9xqNIpitRMlM1Ik81EkcwkJym6ytVdbnkAccsAc8v+//8AbckPe84oidPn8voZgdCLwOh4teTz+f3A3fPQ5vat0u/c7PhnrOCbyOtapd41kNZQn9xDmNm2eeDmAAAADXRSTlMABZ1U2bv46+zpFFVVTgwU/wAAA8tJREFUSMftV+1y3CoM3aSTpLc3gMT3hzHm/V+yB7xO2m53ZzrjH/1RzRiBEGeFkMRyuVye3l/eTqGX96cL6NvzqziJXp+/wb5nFvIkEvz8dHl/PQ1PSnr9//JyIh5sfLm8nQv4dvl6LuDXf4BnAv4Y8vKPk+Q3gHqQnS1yR9+Q5TnJOxsC+9ke2fYJSM0opUIOaFWlRd1SKlMjHeOSpzSOdqFfAYVTznuAVu9TaNE470L0g2pwk0dVPDDi0CvOAWhvjcu3gMKaKAR5pRrRppJyRGwcwTuw3U7OMWLKCRIyrkQ6qExkixrSG0BAreRZG9Wk5qRCY2sB6EtKJVgbU1rJRbEWyzWlyG2hDEArVxXFLaDgVIC2QamxFwtUt21YuNZaIwCTMauIAMxjF8pTTbJDa5nSW8CxFVoA0GFhalygNwEFEWR66gxb1koVXtMcDRQBWGTP8jdbjkETMxOnLkuljXvo/LllXvwCMw8LK0lmuAmAyovtFhBGZKHXdW3k8cM4BJnVDhhjTNhyGCgVgInZxSY3KLPFrmCtuD0UUUOnEVVQZ5ngIhxh5/JxymxiyQDE0srwQ9tjr414zbeAQoeQcWYtq5gzYtuM6I05JDeoqjGZTDYzqktF9IWtGQPdFBA2Of4K6BS2FDbqM09CNviQFmEOJ8MPlknJ5QRWJbk5jusY4hB/2jJiDoTx5BbpOj6+jubHB43zgF9QDvax4Ot4FojDh0fFuPKP1YzR0ZWH+ENyiI6Ze/VQjDC+kqet7L2S895JNV4ny7UX95ksxR1AHLHZPaaCM9f+KEZpEJxrjk5BVEVoD2biA8Ckd6eNKuasni7tMU1X8RrqqMCklZdIJIpRD7bcBUQQJqlRr5YRZ5WaF21ZOunIvCHFKQ+Z9w5Ri/heUxcdLD+0UC4BZJrYWCMVkW5Il8waFq8D0I/pKFsxiKnGebCHFs7IWVWxZJOqoju3UIcUZtseHM1ppBe4D04g3raS+JGFellWpyLKRQQg49pYsWIEqlgBCB8sSIfsF43yEx080kN75MNR9VREmWGbcMWMLakkmwmljy27PYfGmc0CqRJq/koPLLRw/2ZFxaHoBWtKzCmJpkpAca3ETevNdN20FNlp3SzKZaf7Frb9pnTKKIdVTm0sammrqqXqnOfkANS61+DBmg+PfPhxdeYW906nUapRFZO6Q6WJe6nH/qDFkt57Voht1LLNu5/J912yWHH3v824SK4kjoG4in+YO1Q+VP/9nftrAU9/Vpz+8Dn1aSZev5z/eDz9ebs/wP87gd5evsC+71qg+/98HqeVAAAAAElFTkSuQmCC" alt="" />
                        <img src="data:image/png;base64,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" alt="" />
                        <img src="data:image/png;base64,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" alt="" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAMAAAD886zOAAABsFBMVEVHcEx/f3/q6uoqKir8/P3u7u4nJyfv7+/v7+/t7e3R0dHQ0NDs7Ox/f3/r6+vQ0NDc3Nz////08/MBarYIWqE6nzgGYakCZrEOTZJQqjMikToPSY0SRokSQoUUPoC+EzSxFzPEEDTKDjTpAC/I5bu3FTOqGTPQCzSlzef39vYolDr0VnrWCTUWOnyjGzHdBzXjBDUtlzn89/gdjjsKVJpNqDVFW48YizwzmjhIpTYSM3VCojedHzIMUJYDgTqHISzBkZaXIjMTiT6QJDL2+/rx8fANhj7F0uFZrzYlkVhZrjby6erK3ezX7NXI4sz0y9Tnxsvy3ODp7u2GwJcPhzf//PmUx458vHk5m1xkr4Barkhgkb7O4tLU5NhJkcW9ZnWvUmDfgZTiXXowl0sZb7MLOX5Ko2PNoKbkCDmu1afLgY7c5OyRGyyBncDRZHmcutUJQohmf6kSMnXg7uBRbJy7xdfjRmjKGj4wUoyp07hCiL642b/vrbvCPVbURmOjrcW4GDeyKEFIeq4PL3Phoa1hr2GXN0P1gJq/ipDXDDgTiUMZVZbqEUK82bRBV4wOLnKVQkpRAAAAEXRSTlMAVLoU/uQF7Onsnpy8VbubVUzE2xYAAANDSURBVEjH7df5WxJBGAdwxAVL09rJk0rtbig11yu1zGo3zAV0l/sS5AyBkLzvIzW7/+Vml0PYAZ7lefZ56ge/v8Cz7H54mdl52VGpVNrmFs1VBaJpadaqUOqbCFKhEI31qL5GUsE0alXNhJIgvKG6hh/kjYWA7CGK5eby4QqnmXymXGDhYrVKI+ESqdXOzlfDra3t7R03bz4RuRP/Ue9hz917j78NfLz/VDxtxRLV6wdftE1Ojo90zTwoXK5RNZR6a5uR5VulIOd/2f+o96EAPht4ngW3QtYxnQC2CeDsBdggAde6I3dul4JsIImBO9+tY0NyQDA60S0Fz5NvpCDvnHorD0x/7pOC7Nk7DNyaei8TzHzBwPnXOOiSC9pW8QpjZUCnXJAYncDA6TLgh0vwH4BZMQ8mcXDKml8q8sBjj5BwhwieBfx+/yeUYDC4jpoDQbvEOFwOlFNZoAEwDEMtCGDsnGMZAFkOvdD0LgJp4UOfEAa94+Ml3aYSCAEAWZCFEHGxvb29/f3gyaIIAsBEQ6GQ08Kgt8AxUgtoA+gixl88hiLotA7pdIM7FDrNLq9CJguiKwCM9VcBoV1mhUwBZAISEI1ddAj9ZgePPvW6axpDAWQDeIU+r9frA+iHmN3jXbVWyJap0OWMRqMWVCEfr1ghAeFqth/+SAgVMtv5MZwuN4bCjb1VdVIIAA/6hL+AZY8ws5QhLM6yWGLZSdHr4sKk/Kp4Y9NI3ERgJiGUxW+LS49BxUJu6eiwZ2NjPxjM34dO9KenP10B1W8byNv4tbQBGZAybuc6doylIU2z83McC3IrBVLQZ0azwlAQUuYqs0xnDhLAZrNB3pAKF5pDwL+EsigmKK5lSy52FIe72tL7/Wczk0qlPMfDwxftK1mh2+gK3abqbROJLKNHh9r64YzSDfYS/B9Bs1wwnMDBrzjoXpEJdiwQGPiTw8ARBym3QiOJgahAKThrkgumSQxcBzgYJyuDRc+HreE0gYFBlpSAbe5iD4GaChWGPUbxWBG4sb5rIyWg224qeerXlG58DIUY+dx3sPP5zHFU7jSvOR8TI9nmqBXemhF1Cm8er2uV3d421QsbZm2zWnNFgWjUdai+v3RtI6T47DHOAAAAAElFTkSuQmCC" alt="" />
                    </div>

                    <div className='Khung-Nhap1'>
                        <div className="form-field">
                            <input type="text" className="form-input" placeholder=" " />
                            <label htmlFor="name" className="form-label"
                                >Số Thẻ</label>
                            <span className="message-error"></span>
                        </div>
                        <div className="form-field">
                            <input type="text" className="form-input" placeholder=" " />
                            <label htmlFor="name" className="form-label"
                                >Tên Chủ Thẻ</label>
                            <span className="message-error"></span>
                        </div>
                    </div>

                    <div>
                        <div className="form-field">
                            <DatePicker
                                bordered={false}
                                placeholder="Nhập ngày"
                                className="form-input border"
                                format="YYYY"
                                disabledDate={disabledDate}
                            />
                            <label htmlFor="name" className="form-label"
                                >Số Thẻ</label>
                            <span className="message-error"></span>
                        </div>
                        <div className="form-field">
                            <input type="text" className="form-input" placeholder=" " />
                            <label htmlFor="name" className="form-label"
                                >Tên Chủ Thẻ</label>
                            <span className="message-error"></span>
                        </div>
                    </div>

                </div>

                </div>
            </div>

        </div>
    )
}

export default HinhThucThanhToan
