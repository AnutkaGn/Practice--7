import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState([new Date()]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>{currentTime}</p>
        </div>
    );
}

export default CurrentTime;