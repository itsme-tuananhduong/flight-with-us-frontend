import React,{Fragment} from 'react'

function BoxContentTabMain({thoiGian}) {
    return (
        <Fragment>
             <div className='page-content'>
                        <img src="https://www.hahalolo.com/d09f9d088f6f49562ad0bf37b511b9b4.png" alt="" />
                        <p>{(thoiGian === 0)?"Hiện tại bạn chưa có đơn hàng vé máy bay nào.":(`Hiện tại bạn chưa có đơn hàng vé máy bay nào trong ${thoiGian} ngày gần đây` )}</p>
                        <span>
                            <a href="https://flight.hahalolo.com/">Tìm Kiếm & Đặt vé ngay</a>
                        </span>
                    </div>
        </Fragment>
    )
}

export default BoxContentTabMain
