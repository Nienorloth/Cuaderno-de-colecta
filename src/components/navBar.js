import React from 'react';
import Login from '../components/login';
import Logo from  '../images/Logo.png';

class NavBar extends React.Component {
    render() {
        return (
        <div>
            <header className='App-header'>
            <img src={Logo} width='290'/> <span><Login /></span>
            </header>
        </div>
        );
    }
}

export default NavBar;