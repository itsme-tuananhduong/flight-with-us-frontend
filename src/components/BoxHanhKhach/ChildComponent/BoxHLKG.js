import React, { useRef, useEffect, useCallback } from 'react';

function BoxHLKG({ showHLKG, setShowHLKG, getValueHLKG }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowHLKG(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showHLKG) {
        setShowHLKG(false);
      }
    },
    [setShowHLKG, showHLKG]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleHLKG = (e) => {
    getValueHLKG(e.target.innerHTML);
    setShowHLKG(false);
  };

  return (
    <>
      {showHLKG ? (
        <div className="quocgia">
          <div className="overlay" onClick={closeModal} ref={modalRef}></div>
          <div className="option-list-mdt">
            <span className="option-list-mdt-item" onClick={handleHLKG}>
              Baggage 25kg - 99.000 ₫
            </span>
            <span className="option-list-mdt-item" onClick={handleHLKG}>
              Baggage 30kg - 154.000 ₫
            </span>
            <span className="option-list-mdt-item" onClick={handleHLKG}>
              Baggage 35kg - 193.000 ₫
            </span>
            <span className="option-list-mdt-item" onClick={handleHLKG}>
              Baggage 40kg - 220.000 ₫
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxHLKG;
