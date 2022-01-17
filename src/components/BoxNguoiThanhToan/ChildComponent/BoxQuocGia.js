import React, { useRef, useEffect, useCallback } from 'react';

function BoxQuocGia({ showQuocGia, setShowQuocGia, getValueNational }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowQuocGia(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showQuocGia) {
        setShowQuocGia(false);
      }
    },
    [setShowQuocGia, showQuocGia]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleNational = (e) => {
    getValueNational(e.target.innerHTML);
    setShowQuocGia(false);
  };

  return (
    <>
      {showQuocGia ? (
        <div className="quocgia">
          <div className="overlay" onClick={closeModal} ref={modalRef}></div>
          <div className="option-list-mdt">
            <span className="option-list-mdt-item" onClick={handleNational}>
              United Kingdom
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Vanuatu
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Uzbekistan
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Uruguay
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              United States
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Vietnam
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Tokelau
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Turkey
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Thailand
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Tuvalu
            </span>
            <span className="option-list-mdt-item" onClick={handleNational}>
              Ukraine
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxQuocGia;
