import React from 'react';
import NavBar from '../components/navBar';

class LoginPage extends React.Component {
    render() {
        return (
        <div className='LoginBack'>
            <NavBar /> 
        <body className='Content'>
            <p className='Text'>
             Registra, almacena y organiza tus colectas. Puedes agregar y actualizar los datos en cualquier momento.
            </p>
        </body>

        </div>
        
        );
  }
}

export default LoginPage;