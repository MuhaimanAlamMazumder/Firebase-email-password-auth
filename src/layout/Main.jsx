import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Login from '../Components/login/login';
import Register from '../Components/Register/Register';

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Register></Register>
        </div>
    );
};

export default Main;