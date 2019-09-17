import React from 'react';
import Insects from '../images/insects.png';
import Plants from '../images/plants.png';
import Fossils from '../images/fossils.png';
import { Link } from 'react-router-dom';

class NotebooksPage extends React.Component {
    render() {
        return (
            <div className='NotebooksBody'>
            <h1 className='CollectionText'>
             Selecciona cuaderno
            </h1>
        <body  >
           <Link to='/pages/collectionPage' className='Notebooks'><img alt='Insectos' className='Collections' width='200' src={Insects}/> </Link>
           <Link to='/pages/collectionPage' className='Notebooks'><img alt='Plantas' className='Collections'width='200' src={Plants}/></Link>
           <Link to='/pages/collectionPage' className='Notebooks'><img alt='Fósiles' className='Collections'width='200' src={Fossils}/></Link>
        </body>
        </div>
        );
    }
}
export default NotebooksPage;