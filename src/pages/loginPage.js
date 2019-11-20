import React from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
    render() {
        return (
        <div className='LoginBack'>
        <body className='Content'>
            <p className='Text'>
             Registra, almacena y organiza tus colectas. 
            </p>
            <Link to='/pages/notebooksPage'><button className='EnterButton'>Entrar</button></Link>
        </body>

        </div>
        
        );
  }
}

export default LoginPage;