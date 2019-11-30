import React, {Component} from 'react';
import withFirebaseAuth from  'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import FBApp from '../FirestoreConfig';
import GoogleImg from '../images/google.png';
import { withRouter } from "react-router-dom";
  
//   const Nav = (props) => {
//       const {history} = props;
  


class Login extends Component {
 
    handleClick = (props) => {
        const {  signInWithGoogle, history } = this.props;
        signInWithGoogle().then(() =>
        this.props.history.push('/pages/notebooksPage')
        )
    }
    handleClickOut = (props) => {
        const {  signOut, history } = this.props;
        signOut().then(() =>
        this.props.history.push('/')
        )
    }
    render() {
    
        const { user, signOut, history } = this.props;
        return (
            <div className='Login'>
                {
                    user ?
                     <p className='GoogLogText'>Hola, {user.displayName}</p>
                     : <p className='GoogLogText'>Inicia sesión </p>
                }
                {
                    user ?
                    <button  className='GoogLogButton' onClick={this.handleClickOut}><img src={GoogleImg} width='50' className='GoogImg' /> Cerrar sesión</button>
                    : <button className='GoogLogButton1' onClick={this.handleClick}><img src={GoogleImg} width='50' className='GoogImg' /> Iniciar sesión con Google</button>
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


export default withRouter(withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login));