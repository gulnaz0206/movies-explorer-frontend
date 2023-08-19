import React from "react";
import './ButtonMore.css';

function ButtonMore ({ onClickButtonMore }) {
    return (
        <button type='button' className="movies__button" onClick={onClickButtonMore}>Ещё</button>
    );
}
export default ButtonMore;
