import React from "react";

function Button ({button_text, disabled}) {
    return (
        <button type="button"
        onClick={() => console.log({button_text})}
        disabled={disabled}>
        {button_text}
        </button>
    );
}

export default Button