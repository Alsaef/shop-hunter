/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const Iphone = () => {
    const Loaddata=useLoaderData()
   console.log(Loaddata)
    return (
        <div className='container'>
        <h3 className='text-center'>I phone: {Loaddata.length}</h3>
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2'>
    {
          Loaddata.map(phone=><LoadDataPhone phone={phone} key={phone.slug}></LoadDataPhone>)
        }
    </div>
        </div>
    );
};

function LoadDataPhone({phone}) {
    return(
        <div className='col'>
          <Card className='p-2'>
      <Card.Img variant="top" src={phone.image} />
      <Card.Body>
        <Card.Title>{phone.brand}</Card.Title>
        <Card.Text>
           <p className='fw-bold'>Name: {phone.phone_name}</p>
        </Card.Text>
      <p className='btn'> <Link to={`/phone${phone.slug}`}>see more</Link></p>
      </Card.Body>
       </Card>
        </div>
    )
}
export default Iphone;