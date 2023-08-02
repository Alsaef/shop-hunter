// eslint-disable-next-line no-unused-vars
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const Loading = () => {
    return (
        <div className='mt-5 mx-5 text-center'>
            <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <p>Loading..</p>
        </div>
    );
};

export default Loading;