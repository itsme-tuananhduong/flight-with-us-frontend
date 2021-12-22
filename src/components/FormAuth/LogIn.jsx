import React from 'react'
import Login from './component/Login';
import Content from './component/Content';
import Footer from './component/Footer';

import './formLogIn.css';
function LogIn() {
    return (
        <div className="container">
             <div className="container_main">
                <Content/>
                <Login/>
            </div>
            <Footer/>
        </div>
    )
}

export default LogIn

