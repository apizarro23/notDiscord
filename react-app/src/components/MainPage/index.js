import React, { useState, useEffect } from 'react';
import ServerNav from './ServerNav';
import '../CSS/MainPage.css';
import { useSelector } from 'react-redux';
import ServerPage from './ServerPage';
import NoServerPage from './NoServerPage';


const MainPage = () => {
    const server = useSelector(state => state.server)



    return (
        <>
            <div className='main-server-container'>
                <div className='main-left-container'>
                    <ServerNav />
                </div>
                <div className='main-middle-container'>
                    {server ? (<ServerPage />) : (<NoServerPage />)}
                </div>
                <div className='main-right-container'>

                </div>
            </div>
        </>
    );

};

export default MainPage;
