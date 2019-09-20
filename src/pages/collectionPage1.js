import React from 'react';
import FBApp from '../FirestoreConfig';
import 'firebase/firestore';
import 'firebase/storage';
import {Table, Button, Row, Col, Input, Fade, Form, FormGroup, Label, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';

const db = FBApp.firestore();
db.settings({timestampsInSnapshots:true});
const storage = FBApp.storage();

class CollectionPage1 extends React.Component {

    state = {
        items:[],
        inputValue:'',
        inputValue1:'',
        inputValue2:'',
        inputPicture:'',
        edit:false,
        id:'',
        fadeIn:false,
        message:'',
    }
    
    componentDidMount(){
        db.collection('1').onSnapshot((snapShots)=>{
            this.setState({
                items:snapShots.docs.map(doc=>{
                    return {id:doc.id,data:doc.data()}
                })
            })
        }, error => {
            console.log(error)
    });
  }

changeValue=(key, val)=>{
this.setState({
[key]:val
})

};

action = () => {
    const { inputValue, inputValue1, inputValue2, inputPicture, edit } = this.state;
    !edit ? 
    db.collection('1').add({
        Orden: inputValue,
        Género: inputValue1,
        Especie: inputValue2,
        Imagen: inputPicture
    }).then(()=>{
        this.message('Agregado')
    }).catch(()=>{
        this.message('Error')
    }) :
    this.update();
};

getCol1=(id)=>{
    let docRef=db.collection('1').doc(id);
    docRef.get().then((doc)=>{
        if(doc.exists){
            this.setState({
                inputValue:doc.data().Orden,
                inputValue1:doc.data().Género,
                inputValue2:doc.data().Especie,
                inputPicture: doc.data().Imagen,
                edit:true,
                id:doc.id
            })
        } else {
            console.log('El documento no existe')
        }
    }).catch((error)=>{
        console.log(error);
    })
};
deleteCol1=(id)=>{
    db.collection('1').doc(id).delete()
    this.message('Eliminado')
}

update=()=>{
    const{id,inputValue, inputValue1, inputValue2, inputPicture} = this.state;
    db.collection('1').doc(id).update({
        Orden:inputValue,
        Género:inputValue1,
        Especie: inputValue2,
        Imagen: inputPicture
    }).then(()=>{
        this.message('Actualizado')
        this.setState({
            edit:false
        })
    }).catch((error)=>{
        this.message('Error');
    })
}
uploadPic=(files)=>{
    const{id,inputValue, inputValue1, inputValue2, inputPicture} = this.state;

    const storageRef = storage.ref('images');
    const picFile = storageRef.child('inputPicture');
    //const file=files.item(0);
    const task = picFile.put(files[0]);

    task.then(snapshot => {
        console.log(snapshot)
        snapshot.ref.getDownloadURL()
        .then(data => document.querySelector('#Pic').setAttribute('src', data))
        
    })
}

message=(message)=>{
this.setState({
    inputValue:'',
    fadeIn: true,
    message: message
})

setTimeout(()=>{
    this.setState({
        fadeIn:false,
        message:''
    })
},3000);
}
  render() {
      const {items, inputValue, inputValue1, inputValue2, inputPicture} = this.state;
      return (
          <div className='ColNotes'>
              <Row>
                  <Col xs='10'>
                    <Form>
                        <FormGroup>
                            <Label for='OrderInput'>Orden</Label><br/>
                            <Input type='text' name='Orden' id='OrderInput' 
                            value={inputValue} 
                            onChange={(e)=>{this.changeValue('inputValue', e.target.value)}} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='GenreInput'>Género</Label><br/>
                            <Input type='text' name='Género' id='GenreInput'
                            value1={inputValue1}
                            onChange={(e)=>{this.changeValue('inputValue1', e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='SpInput'>Especie</Label><br/>
                            <Input type='text' name='Especie' id='SpInput'
                            value2={inputValue2}
                            onChange={(e)=>{this.changeValue('inputValue2', e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for='exampleFile'>Agregar imagen</Label>
                        <Input type='file' id='Picture' value={inputPicture} onChange={(e)=>{
                            console.log("files", e.target.files);
                            this.uploadPic(e.target.files, e.target)
                        }}/>
                        </FormGroup>
                        <img id='Pic' src='' width='100vw'/>
                        <Button color='info' onClick={this.action}>
                         {this.state.edit ? 'Guardar cambios' : 'Agregar'}
                        </Button>
                    </Form>
                  </Col>
                  <Col xs='2'>
                    <div className='text-right'>
                        {/* <Button color='info' onClick={this.action}>
                         {this.state.edit ? 'Guardar cambios' : 'Agregar'}
                        </Button> */}
                    </div>
                  </Col>
              </Row>
              <Fade in={this.state.fadeIn} tag='h6' className='mt-3 text-center text-success'>
                  {this.state.message}
              </Fade>
              <Table hover className='text-center'>
                  <thead>
                  </thead>
                  <tbody>
                    {items ? items.map( (item, key) => {
                        console.log(item);
                        return (
                        <tr key={key}>
                         <td>{item.data.Orden}</td>
                         <td>{item.data.Género}</td>
                         <td>{item.data.Especie}</td>
                         <td>{item.data.Imagen}</td>
                         <td><Button color='warning' onClick={()=> this.getCol1(item.id)}>Editar</Button></td>
                         <td><Button color='danger'onClick={()=> this.deleteCol1(item.id)}>Eliminar</Button></td>
                        </tr>
                    )
                    }): null }
                  </tbody>
              </Table>
          </div>
      )
  }
}

export default CollectionPage1;