import React, { useRef, useEffect, useCallback } from 'react';

function BoxTinhThanh({
  showTinhThanh,
  setShowTinhThanh,
  national,
  getValueProvince,
}) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowTinhThanh(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showTinhThanh) {
        setShowTinhThanh(false);
      }
    },
    [setShowTinhThanh, showTinhThanh]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const provinces = [
    {
      nation: 'VietNam',
      province: [
        'Lạng Sơn',
        'Sơn La',
        'Hà Nội',
        'Thái Bình',
        'Ninh Bình',
        'Thanh Hóa',
        'Đà Nẵng',
        'Huế',
        'Hồ Chí Minh',
        'Bình Dương',
      ],
    },
    {
      nation: 'United Kingdom',
      province: ['England', 'Northern Ireland', 'Scotland', 'Wales'],
    },
    {
      nation: 'Turkey',
      province: [
        'Adana',
        'Adıyaman',
        'Afyonkarahisar',
        'Aksaray',
        'Ankara',
        'Bilecik',
        'Bilecik',
        'Batman',
      ],
    },
    {
      nation: 'ThaiLand',
      province: [
        'Bangkok',
        'Changwat Amnat Charoen',
        'Changwat Ang Thong',
        'Changwat Bueng Kan',
        'Changwat Chumphon',
        'Changwat Maha Sarakham',
      ],
    },
    {
      nation: 'Uzbekistan',
      province: [
        'Andijan Region',
        'Bukhara Region',
        'Fergana Region',
        'Karakalpakstan',
        'Karakalpakstan',
        'Namangan Region',
        'Navoiy Region',
      ],
    },
    {
      nation: 'Ukraine',
      province: [
        'Autonomous Republic of Crimea',
        'Cherkasy Oblast',
        'Chernihivska Oblast',
        'Sebastopol City',
      ],
    },
    {
      nation: 'Tuvalu',
      province: [
        'Nanumanga',
        'Nanumea',
        'Niutao',
        'Nui',
        'Nukufetau',
        'Vaitupu',
      ],
    },
    {
      nation: 'United States',
      province: [
        'Alabama',
        'Arizona',
        'California',
        'Connecticut',
        'Connecticut',
        'Kansas',
      ],
    },
    {
      nation: 'Vanuatu',
      province: [
        'Malampa Province',
        'Penama Province',
        'Sanma Province',
        'Shefa Province',
        'Tafea Province',
      ],
    },
  ];
  const handleProvinces = (e) => {
    getValueProvince(e.target.innerHTML);
    setShowTinhThanh(false);
  };

  return (
    <>
      {showTinhThanh ? (
        <div className="quocgia">
          <div className="overlay" onClick={closeModal} ref={modalRef}></div>

          <div className="option-list-mdt">
            {provinces
              .filter((x) => x.nation === national)
              .map((nation) =>
                nation.province.map((province, index) => (
                  <span
                    className="option-list-mdt-item"
                    key={index}
                    onClick={handleProvinces}
                  >
                    {province}
                  </span>
                ))
              )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxTinhThanh;
