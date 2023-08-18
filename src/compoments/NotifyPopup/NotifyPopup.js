import { useEffect } from 'react';
import './NotifyPopup.css';

const NotifyPopup = ({
  isOpen,
  setPopupOpened,
  textNotify
}) => {

  useEffect(() => {
    function handleKeyEsc (e) {
      e.key === 'Escape' && setPopupOpened(false);
    }
    isOpen && document.addEventListener('keydown', handleKeyEsc);

    return () => document.removeEventListener('keydown', handleKeyEsc);
  }, [isOpen]);

  function handleClickByOverlay (e) {
    e.currentTarget === e.target && setPopupOpened(false);
  }

  return (
    <section
      className={`notify-popup notify-popup_type_notify ${isOpen && 'notify-popup_opened'}`}
      onClick={handleClickByOverlay}
    >
      <div className={`notify-popup__container notify-popup__container_notify`}>
        <button
          type="button"
          className="notify-popup__close"
          onClick={() => setPopupOpened(false)}
        />
        <h3 className="notify-popup__notify-title">{textNotify}</h3>
        <button type='button' className='notify-popup__btn' onClick={() => setPopupOpened(false)}>Понятно.</button>
      </div>
    </section>
  );
};
export default NotifyPopup;
