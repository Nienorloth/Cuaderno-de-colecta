import React from 'react';
import { Link } from 'react-router-dom';

class Back extends React.Component {
    render(){
        return (
            <div className="Back"> 
           <Link to='/pages/notebooksPage' style={{ textDecoration: 'none' }}><button className='BackButton'>Salir</button></Link>
            </div>        
        )
    }
}

export default Back;