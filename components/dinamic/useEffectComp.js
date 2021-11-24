import React, { useEffect, useState } from 'react';

export default function useEffectAdvancedPage() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, [])

    return (
        <div className="text-4xl text-red-600">
            {windowHeight}
        </div>
    )
}