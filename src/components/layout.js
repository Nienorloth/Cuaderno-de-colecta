import React from 'react';
import NavBar from './navBar';

function Layout (props) {
    // const children = props.children;
    return (
        <div className='Layout'>
            <NavBar />
            {props.children}
        </div>
    )
}

export default Layout;