import React from 'react';
import Insects from '../images/insects.png';
import Plants from '../images/plants.png';
import Fossils from '../images/fossils.png';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

class NotebooksPage extends React.Component {
    render() {
        return (
            <div className='NotebooksBody'>
            <h1 className='CollectionText'>
             Selecciona cuaderno
            </h1>
        <body>
           <Link to='/pages/collectionPage1' className='Notebooks'><img alt='1' className='Collections' width='200' src={Insects}/> </Link>
           <Link to='/pages/collectionPage2' className='Notebooks'><img alt='2' className='Collections'width='200' src={Plants}/></Link>
           <Link to='/pages/collectionPage3' className='Notebooks'><img alt='3' className='Collections'width='200' src={Fossils}/></Link>
        </body>
        <Footer />
        </div>
        );
    }
}
export default NotebooksPage;