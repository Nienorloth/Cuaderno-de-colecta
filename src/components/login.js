import React, {Component} from 'react';
import withFirebaseAuth from  'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import FBApp from '../FirestoreConfig';
import GoogleImg from '../images/google.png';
  


class Login extends Component {

    handleClick = () => {
        const {  signInWithGoogle } = this.props;
        signInWithGoogle().then(() =>
       this.props.history.push('/pages/notebooksPage')
        )
    }

    render() {
        const { user, signOut } = this.props;
        return (
            <div className='Login'>
                {
                    user ?
                     <p className='GoogLogText'>Hola, {user.displayName}</p>
                     : <p className='GoogLogText'>Inicia sesión </p>
                }
                {
                    user ?
                    <button  className='GoogLogButton' onClick={signOut}><img src={GoogleImg} width='25' className='GoogImg' /> Cerrar sesión</button>
                    : <button className='GoogLogButton' onClick={this.handleClick}><img src={GoogleImg} width='30' className='GoogImg' /> Iniciar sesión con Google</button>
                }
                
            </div>
        )
    }
}

const firebaseApp = FBApp;
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login);