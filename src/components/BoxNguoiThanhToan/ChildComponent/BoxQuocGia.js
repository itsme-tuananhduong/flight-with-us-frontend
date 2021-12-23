import React,{ useRef, useEffect, useCallback } from 'react'

function BoxQuocGia({showQuocGia,setShowQuocGia}) {

    const modalRef = useRef();
    const closeModal = (e) => {
      if (modalRef.current === e.target) {
        setShowQuocGia(false);
      }
    };
  
    const keyPress = useCallback(
      (e) => {
        if (e.key === "Escape" && showQuocGia) {
          setShowQuocGia(false);
        }
      },
      [setShowQuocGia, showQuocGia]
    );
  
    useEffect(() => {
      document.addEventListener("keydown", keyPress);
      return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);
  
    return (
        <>
        
        {
            showQuocGia?(
                <div className='madienthoai'>
                    <div className="overlay" onClick={closeModal}
                    ref={modalRef}></div>
                    <div className='option-list-mdt' >
                        <span className="option-list-mdt-item">
                          <img src="https://media.hahalolo.com/other/flags/ve.png" alt="" />HaNoi(+67)
        
                        </span>
                        <span className="option-list-mdt-item">
                          <img src="https://media.hahalolo.com/other/flags/vu.png" alt="" /> Vanuatu(+678)
                        </span>
                        <span className="option-list-mdt-item">
                          <img src="https://media.hahalolo.com/other/flags/uz.png" alt="" />Uzbekistan(+998)
                        </span>
                        <span className="option-list-mdt-item">
                          <img src="https://media.hahalolo.com/other/flags/uy.png" alt="" />Uruguay(+598)
                        </span>
                        <span className="option-list-mdt-item">
                          <img src="https://media.hahalolo.com/other/flags/us.png" alt="" />United States(+1)
                        </span>
                        <span className="option-list-mdt-item">
                        <img  src="https://media.hahalolo.com/other/flags/vn.png" alt="" /> VietNam(+7)
                        </span>
                        <span className="option-list-mdt-item">
                        <img  src="https://media.hahalolo.com/other/flags/tk.png" alt="" /> Tokelau(+690)
                        </span>
                        <span className="option-list-mdt-item">
                        <img  src="https://media.hahalolo.com/other/flags/tr.png" alt="" /> Turkey(+90)
                        </span>
                        <span className="option-list-mdt-item">
                        <img  src="https://media.hahalolo.com/other/flags/to.png" alt="" /> Tonga(+676)
                        </span>
                        <span className="option-list-mdt-item">
                        <img  src="https://media.hahalolo.com/other/flags/tv.png" alt="" /> Tuvalu(+688)
                        </span>
                        <span className="option-list-mdt-item">
                        <img  src="https://media.hahalolo.com/other/flags/ua.png" alt="" /> Ukraine(+380)
                        </span>
                        <span className="option-list-mdt-item">
                        <img  src="https://media.hahalolo.com/other/flags/gb.png" alt="" /> United KingDom(+44)
                        </span>
                      </div>
                </div>

            ):null
        }
        </>
    )
}

export default BoxQuocGia

