import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b> F</b>in</span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b> F</b>inaceiro
            </span>            
        </a>        
        <nav className='navbar navbar-static-top'>
            <Navbar />
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)