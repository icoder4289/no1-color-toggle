import React, { useState, useEffect } from 'react';

export default function Toggle() {
    const [isOpen, setIsOpen] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['red', 'yellow', 'green'];

    useEffect(() => {
        let interval;
        if (isOpen) {
          
            interval = setInterval(() => {
            setColorIndex((colorIndex + 1) % colors.length);
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [isOpen, colorIndex]);
  
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>

            {isOpen && <div style={{ backgroundColor: colors[colorIndex], width: '100px', height: '100px' }}></div>}
        </div>
  )
}
