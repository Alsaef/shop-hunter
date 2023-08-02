// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountdownTimer from '../Time/Time';
const Oppo = () => {
    const targetDate = new Date('2023-12-31T23:59:59');
    return (
        <div className='text-center fw-bold my-5'>
            <h1>Coming Soon</h1>
         <CountdownTimer targetDate={targetDate}></CountdownTimer>
        </div>
    );
};

export default Oppo;