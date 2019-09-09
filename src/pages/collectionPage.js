import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import Insects from '../images/insects.png';
import Plants from '../images/plants.png';
import Fossils from '../images/fossils.png';


class Collection extends React.Component {
    render() {
        return (
            <div className='CollectionsBody'>
            <NavBar /> 
        <body >
        <h1 className='CollectionText'>
             Haz click para agrandar
            </h1>

            <href><img className='Collections' width='200' src={Insects}/> </href>
            <href><img className='Collections'width='200' src={Plants}/></href>
            <href><img className='Collections'width='200' src={Fossils}/></href>

        </body>
        <Footer />
         </div>
        );
    }
}
export default Collection;