// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Loading from '../Loding/Loading';

const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            <h2 className='text-center mt-2 text-warning'>Phone Hunter</h2>
            <div>{navigation.state == 'loading'&& <Loading></Loading>}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;