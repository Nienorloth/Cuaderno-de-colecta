import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Back extends React.Component {
    render(){
        return (
            <div> 
           <Link to='/pages/notebooksPage' className='Notebooks'><Button color='info' className='BackButton'>Salir del cuaderno</Button></Link>
            </div>
                
        )
    }
}

export default Back;