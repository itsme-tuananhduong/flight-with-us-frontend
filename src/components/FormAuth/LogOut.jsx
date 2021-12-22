import React from 'react'
import Register from './component/Register';
import Content from './component/Content';
import Footer from './component/Footer';

import './formLogIn.css';

function LogOut() {
    return (
        <div className="container">
        <div className="container_main">
           <Content/>
           <Register/>
       </div>
       <Footer/>
   </div>
    )
}

export default LogOut
