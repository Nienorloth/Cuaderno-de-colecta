import React from 'react';

class Footer extends React.Component {
    handleClick = () => {
         this.props.history.push('/pages/formPage');
    }
    render(){
        return (
            <footer>
                <button onClick={ this.handleClick } className='FooterButtons'>Nuevo cuaderno</button>
                <button className='FooterButtons'>Editar cuaderno</button>
                <button className='FooterButtons'>Eliminar cuaderno</button>
            </footer>
                
        )
    }
}

export default Footer;