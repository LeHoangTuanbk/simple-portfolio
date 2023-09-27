'use client';

import React, { useRef } from 'react';

export default function Form() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleClick() {
        if (inputRef.current) {
            console.log(inputRef.current.style);

        }
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}
