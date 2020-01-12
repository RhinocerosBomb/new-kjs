import React, { useState, useEffect } from 'react';

const getDateString = () => {
    const newDate = new Date();

    return newDate.getHours() + ' : ' + newDate.getMinutes() + ' : ' + newDate.getSeconds();
}

export default function Clock() {

    const [date, setDate] = useState(getDateString());


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDate(getDateString());
        }, 1000);

        return () => clearTimeout(timeoutId)
    }, [date]);
return (<div className='clock'>{date}</div>)
}