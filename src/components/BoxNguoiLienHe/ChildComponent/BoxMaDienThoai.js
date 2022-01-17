import React, { useRef, useEffect, useCallback } from 'react';

function BoxMaDienThoai({
  showMaDienThoai,
  setShowMaDienThoai,
  getvaluePhoneCode,
}) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowMaDienThoai(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showMaDienThoai) {
        setShowMaDienThoai(false);
      }
    },
    [setShowMaDienThoai, showMaDienThoai]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const phoneCode = [
    {
      id: 1,
      imgNational: 'https://media.hahalolo.com/other/flags/ve.png',
      nation: 'Vanuatu',
      code: '+678',
    },
    {
      id: 2,
      imgNational: 'https://media.hahalolo.com/other/flags/uz.png',
      nation: 'Uzbekistan',
      code: '+998',
    },
    {
      id: 3,
      imgNational: 'https://media.hahalolo.com/other/flags/uy.png',
      nation: 'Uruguay',
      code: '+598',
    },
    {
      id: 4,
      imgNational: 'https://media.hahalolo.com/other/flags/us.png',
      nation: 'United States',
      code: '+1',
    },
    {
      id: 5,
      imgNational: 'https://media.hahalolo.com/other/flags/vn.png',
      nation: 'Vietnam',
      code: '+84',
    },
    {
      id: 6,
      imgNational: 'https://media.hahalolo.com/other/flags/tk.png',
      nation: 'Tokelau',
      code: '+690',
    },
    {
      id: 7,
      imgNational: 'https://media.hahalolo.com/other/flags/tr.png',
      nation: 'Turkey',
      code: '+90',
    },
    {
      id: 8,
      imgNational: 'https://media.hahalolo.com/other/flags/to.png',
      nation: 'Tonga',
      code: '+676',
    },
    {
      id: 9,
      imgNational: 'https://media.hahalolo.com/other/flags/tv.png',
      nation: 'Tuvalu',
      code: '+688',
    },
    {
      id: 10,
      imgNational: 'https://media.hahalolo.com/other/flags/ua.png',
      nation: 'Ukraine',
      code: '+380',
    },
    {
      id: 11,
      imgNational: 'https://media.hahalolo.com/other/flags/gb.png',
      nation: ' United KingDom',
      code: '+44',
    },
  ];
  const handlePhoneCode = (e) => {
    const phon = e.target.innerText.split('(')[0];
    const newObj = phoneCode.filter((x) => x.nation === phon);
    getvaluePhoneCode(newObj[0]);
    setShowMaDienThoai(false);
  };
  return (
    <>
      {showMaDienThoai ? (
        <div className="madienthoai">
          <div className="overlay" onClick={closeModal} ref={modalRef}></div>
          <div className="option-list-mdt">
            {phoneCode.map((code) => (
              <span
                className="option-list-mdt-item"
                key={code.id}
                onClick={handlePhoneCode}
              >
                <img src={code.imgNational} alt="" />
                {code.nation}({code.code})
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxMaDienThoai;
