import React from 'react';

class Footer extends React.Component {
    handleClick = () => {
         this.props.history.push('/pages/formPage');
    }
    render(){
        return (
            <footer>
                <button onClick={ this.handleClick } className='FooterButtons'>Nueva entrada</button>
                <button className='FooterButtons'>Editar entrada</button>
                <button className='FooterButtons'>Eliminar entrada</button>
            </footer>
                
        )
    }
}

export default Footer;