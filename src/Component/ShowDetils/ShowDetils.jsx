// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetils = () => {
    const Loaddata=useLoaderData()
    console.log(Loaddata)
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default ShowDetils;