import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Back extends React.Component {
    render(){
        return (
            <div> 
           <Link to='/pages/notebooksPage' className='Notebooks'><button className='BackButton'>Salir</button></Link>
            </div>
                
        )
    }
}

export default Back;