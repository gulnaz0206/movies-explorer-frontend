import './Popup.css';



function Popup({isPopupOpened, onClosePopup}) {
    return(
        <div className={`popup ${isPopupOpened ? 'active' : ''}`}>
            <div className="popup__content">
                <button onClick={onClosePopup}>закрыть попап</button>

            </div>
        </div>
    )
}

export default Popup;