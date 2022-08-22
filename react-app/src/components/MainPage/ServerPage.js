import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../CSS/ServerPage.css';


const ServerPage = ({ id }) => {
    const server = useSelector(state => state.server[id])

    useEffect(()=>{
        console.log(server)
    }, [])

    return (
        <div className='ServerPage-container'>
            <div className='ServerPage-NavBar'>
                <div className='ServerPage-name'>{server.name}</div>
                <div className='ServerPage-channel-name'></div>
                <div className='ServerPage-NavBar-buttons'></div>

            </div>
            <div className='ServerPage-left-container'>
                <div className='channels-main'>

                </div>
            </div>
            <div className='ServerPage-middle-container'>
                <div className='channel-chat'>

                </div>
            </div>
            <div className='ServerPage-right-container'>

            </div>
        </div>

    );

};

export default ServerPage;
