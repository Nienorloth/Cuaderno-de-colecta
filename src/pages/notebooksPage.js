import React from 'react';
import NavBar from '../components/navBar';
import Insects from '../images/insects.png';
import Plants from '../images/plants.png';
import Fossils from '../images/fossils.png';
import Footer from '../components/footer';

class Notebooks extends React.Component {
    render() {
        return (
            <div className='NotebooksBody'>
            <NavBar /> 
            <h1 className='CollectionText'>
             Selecciona tu cuaderno
            </h1>
        <body >
            <a><img className='Collections' width='200' src={Insects}/> </a>
            <a><img className='Collections'width='200' src={Plants}/></a>
            <a><img className='Collections'width='200' src={Fossils}/></a>
        </body>
        <Footer />
        {/* <footer className='NotebooksFooter'>
            <button className='FooterButtons'>Nuevo cuaderno</button>
            <button className='FooterButtons'>Editar cuaderno</button>
            <button className='FooterButtons'>Eliminar cuaderno</button>
        </footer> */}
        </div>
        );
    }
}
export default Notebooks;