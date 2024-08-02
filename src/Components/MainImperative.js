import React, { useRef } from 'react'

const MainImperative = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    )
}

export default MainImperative