import React from 'react';
import FBApp from '../FirestoreConfig';
import 'firebase/firestore';
import 'firebase/storage';
import {Table, Button, Row, Col, Input, Fade, Form, FormGroup, Label} from 'reactstrap';

// const db = FBApp.firestore();
//db.settings({timestampsInSnapshots:true});
//const storage = FBApp.storage();

class CollectionPage1 extends React.Component {

    constructor(props)
    {
        super(props)
        this.db = FBApp.firestore();
        this.storage = FBApp.storage().ref('images');
        this.fileInput = React.createRef();
    }
    state = {
        items:[],
        inputValue:'',
        inputValue1:'',
        inputValue2:'',
        iputValue3:'',
        inputPicture:'',
        edit:false,
        id:'',
        fadeIn:false,
        message:'',
    }
    
    componentDidMount(){
        this.db.collection('1').onSnapshot((snapShots)=>{
            this.setState({
                items:snapShots.docs.map(doc=>{
                    return {id:doc.id,data:doc.data()}
                })
            })
        }, error => {
            console.log(error)
    });
  }

    changeValue = (key, val) => {
        this.setState({[key]:val})

   };

    save = () => {
        const { inputValue, inputValue1, inputValue2, inputValue3, inputPicture, edit } = this.state;
        let taskFile = this.storage.child(inputValue1 + '-'+ this.files[0].name).put(this.files[0])
        !edit ? 
        taskFile.then(snapshot => {
            console.log(snapshot)
            snapshot.ref.getDownloadURL()
            .then(data=> {
                //document.querySelector('#Pic').setAttribute('src', data);
                this.db.collection('1').add({
                    Orden: inputValue,
                    Género: inputValue1,
                    Especie: inputValue2,
                    Localidad: inputValue3,
                    url: data
                }).then(()=>{
                    this.message('Agregado')
                }).catch((e)=>{
                    console.log(e)
                    this.message('Error')
                });
            });
        }):
        this.update();
    };

getCol1=(id)=>{
    let docRef = this.db.collection('1').doc(id);
    docRef.get().then((doc)=>{
        if(doc.exists){
            this.setState({
                inputValue:doc.data().Orden,
                inputValue1:doc.data().Género,
                inputValue2:doc.data().Especie,
                inputValue3:doc.data().Localidad,
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
    this.db.collection('1').doc(id).delete()
    this.message('Eliminado')
}

update=()=>{
    const{ id,inputValue, inputValue1, inputValue2, inputValue3, inputPicture} = this.state;
    this.db.collection('1').doc(id).update({
        Orden: inputValue,
        Género: inputValue1,
        Especie: inputValue2,
        Localidad: inputValue3,
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
 
        const{id,inputValue, inputValue1, inputValue2, inputValue3, inputPicture} = this.state;
        //const storageRef = this.storage.ref('images');
        const picFile =this.storage.child(inputValue1 + '-'+ files[0].name);
        //const file=files.item(0);
        const task = picFile.put(files[0]);

        task.then(snapshot => {
            console.log(snapshot)
            snapshot.ref.getDownloadURL()
            .then(data=> document.querySelector('#Pic').setAttribute('src', data))
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
      const {items, inputValue, inputValue1, inputValue2, inputValue3, inputPicture} = this.state;
      
      return (
        <div>
        <div> 
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
                            <Label for='LocInput'>Localidad</Label><br/>
                            <Input type='text' name='Localidad' id='LocInput'
                            value3={inputValue3}
                            onChange={(e)=>{this.changeValue('inputValue3', e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for='exampleFile'>Agregar imagen</Label>
                        <Input type='file' id='Picture' ref={ this.fileInput } onChange={(e)=>{
                            this.files = e.target.files
                        }}/>
                        </FormGroup>
                        <Button color='info' onClick={this.save}>
                         {this.state.edit ? 'Guardar cambios' : 'Agregar'}
                        </Button>
                    </Form>
                    </Col>
              </Row>
                    <Fade in={this.state.fadeIn} tag='h6' className='mt-3 text-center text-success'>
                  {this.state.message}
              </Fade>
              <Table hover className='text-center'>
                  <thead>
                  </thead>
                  <tbody>
                    {items && items !== undefined ? items.map( (item, key) => (
                        <tr key={key}>
                         <td>{item.data.Orden}</td>
                         <td>{item.data.Género}</td>
                         <td>{item.data.Especie}</td>
                         <td>{item.data.Localidad}</td>
                         <td>{item.data.Imagen}</td>
                         <td><img id='Pic' src={item.data.url} width='300vw'/></td>
                         <td><Button color='warning' onClick={()=> this.getCol1(item.id)}>Editar</Button></td>
                         <td><Button color='danger'onClick={()=> this.deleteCol1(item.id)}>Eliminar</Button></td>
                        </tr>
                    )): null }
                    </tbody>
                </Table>
            </div>
        </div>
        </div>
        )
    }
  }
                

export default CollectionPage1;