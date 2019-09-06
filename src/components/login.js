import React, {Component} from 'react';
import withFirebaseAuth from  'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';


class Login extends Component {
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <div>
                {
                    user ?
                     <p>Hola, {user.displayName}</p>
                     : <p>Inicia sesión para abrir tu cuaderno</p>
                }
                {
                    user ?
                    <button onClick={signOut}>Cerrar sesión</button>
                    : <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
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