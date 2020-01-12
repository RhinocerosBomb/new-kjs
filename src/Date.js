import React, { useState, useEffect } from 'react';

const getDateString = () => {
    const newDate = new Date();
    return newDate.getDate() + ' / ' + newDate.getMonth() + ' / ' + newDate.getFullYear();
}

export default function Clock() {

    const [date, setDate] = useState(getDateString());
    console.log(date)

   
return (<div className='date'>{date}</div>)
}