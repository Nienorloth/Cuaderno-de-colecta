import React, {Component} from 'react';
import withFirebaseAuth from  'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';
// import './styles/Login.css';


class Login extends Component {
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <div className='Login'>
                {
                    user ?
                     <p className='GoogLogText'>Hola, {user.displayName}</p>
                     : <p className='GoogLogText'>Inicia sesión para abrir tu cuaderno</p>
                }
                {
                    user ?
                    <button  className='GoogLogButton' onClick={signOut}>Cerrar sesión</button>
                    : <button  className='GoogLogButton' onClick={signInWithGoogle}>Iniciar sesión con Google</button>
                }
            </div>
        )
    }
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login);