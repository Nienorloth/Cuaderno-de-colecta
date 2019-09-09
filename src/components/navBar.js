import React from 'react';
import Login from '../components/login'


class NavBar extends React.Component {
    render() {
        return (
        <div>
            <header className='App-header'>
            <code>Cuaderno de colecta</code> <span><Login /></span>
            </header>
        </div>
        );
    }
}

export default NavBar;