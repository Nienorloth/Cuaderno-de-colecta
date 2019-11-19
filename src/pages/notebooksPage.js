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
        <body>
           
           <Link to='/pages/collectionPage1' className='Notebooks'><img alt='1' className='Collections' width='200' src={Insects}/><h3 className="notebookTitle">Insectos</h3></Link>
           
           <Link to='/pages/collectionPage2' className='Notebooks'><img alt='2' className='Collections'width='200' src={Plants}/><h3 className="notebookTitle">Plantas</h3></Link>
          
           <Link to='/pages/collectionPage3' className='Notebooks'><img alt='3' className='Collections'width='200' src={Fossils}/><h3 className="notebookTitle">Fósiles</h3></Link>
       
        </body>
        </div>
        );
    }
}
export default NotebooksPage;