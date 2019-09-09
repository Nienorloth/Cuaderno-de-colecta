import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <button className='FooterButtons'>Nueva entrada</button>
                <button className='FooterButtons'>Editar entrada</button>
                <button className='FooterButtons'>Eliminar entrada</button>
            </footer>
                
        )
    }
}

export default Footer;