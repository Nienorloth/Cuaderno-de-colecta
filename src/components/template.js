import React from 'react';
import FBApp from '../FirestoreConfig';
import 'firebase/firestore';
import 'firebase/storage';
import {Button, Row, Col, Input, Fade, Form, FormGroup, Label} from 'reactstrap';

// const db = FBApp.firestore();
//db.settings({timestampsInSnapshots:true});
//const storage = FBApp.storage();

class Template extends React.Component {

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
        this.db.collection(this.props.collection).onSnapshot((snapShots)=>{
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
        console.log(this.state);
        const { inputValue, inputValue1, inputValue2, inputValue3, inputPicture, edit } = this.state;
        let taskFile = this.storage.child(inputValue1 + '-'+inputPicture.name).put(inputPicture)
        if(!edit) { 
        taskFile.then(snapshot => {
            console.log(snapshot)
            snapshot.ref.getDownloadURL()
            .then(data=> {
                //document.querySelector('#Pic').setAttribute('src', data);
                this.db.collection(this.props.collection).add({
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
        })
    } else {
        taskFile.then(snapshot => {
            snapshot.ref.getDownloadURL()
                .then(data => {
                    this.update(data);
                })
        })
    }
    };

getCol1=(id)=>{
    let docRef = this.db.collection(this.props.collection).doc(id);
    docRef.get().then((doc)=>{
        console.log(doc.exists);
        if(doc.exists){
            console.log(doc.data());
            this.setState({
                inputValue:doc.data().Orden,
                inputValue1:doc.data().Género,
                inputValue2:doc.data().Especie,
                inputValue3:doc.data().Localidad,
                inputPicture: doc.data().url,
                edit:true,
                id:doc.id
            })
        }
    }).catch((error)=>{
        console.log(error);
    })
};
deleteCol1=(id)=>{
    this.db.collection(this.props.collection).doc(id).delete()
    this.message('Eliminado')
}

update=(url)=>{
    const{ id,inputValue, inputValue1, inputValue2, inputValue3} = this.state;
    console.log('-->', url);
    this.db.collection(this.props.collection).doc(id).update({
        Orden: inputValue,
        Género: inputValue1,
        Especie: inputValue2,
        Localidad: inputValue3,
        url: url
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
    inputValue1:'',
    inputValue2:'',
    inputValue3:'',
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
        <div >
        <div> 
          <div className='ColNotes'>
              <Row> 
                  <Col xs='10'>
                    <Form className="Form">
                        <FormGroup>
                            <Label for='OrderInput'>Orden</Label><br/>
                            <Input type='text' name='Orden' id='OrderInput' 
                            value={inputValue} 
                            onChange={(e)=>{this.changeValue('inputValue', e.target.value)}} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='GenreInput'>Género</Label><br/>
                            <Input type='text' name='Género' id='GenreInput'
                            value={inputValue1}
                            onChange={(e)=>{this.changeValue('inputValue1', e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='SpInput'>Especie</Label><br/>
                            <Input type='text' name='Especie' id='SpInput'
                            value={inputValue2}
                            onChange={(e)=>{this.changeValue('inputValue2', e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='LocInput'>Localidad</Label><br/>
                            <Input type='text' name='Localidad' id='LocInput'
                            value={inputValue3}
                            onChange={(e)=>{this.changeValue('inputValue3', e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for='exampleFile'>Agregar imagen</Label>
                        <Input type='file' id='Picture' ref={ this.fileInput } onChange={(e)=>{
                           this.setState({inputPicture: e.target.files[0]});
                        }}/>
                        </FormGroup>
                        <Button className="AddButton" onClick={this.save}>
                         {this.state.edit ? 'Guardar cambios' : 'Agregar'}
                        </Button>
                    </Form>
                    </Col>
              </Row>
                    <Fade in={this.state.fadeIn} tag='h6' className='mt-3 text-center text-success'>
                  {this.state.message}
              </Fade>
              <div >
                  <div className='text-center'>
                    {items && items !== undefined ? items.map( (item, key) => (
                        <div className="flip-card" key={key}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                     <img id='Pic' src={item.data.url} width='300vw'/>
                                </div>
                                <div className="flip-card-back">
                                    <p>Orden: {item.data.Orden}</p>
                                    <p>Género: {item.data.Género}</p>
                                    <p>Especie: {item.data.Especie}</p>
                                    <p>Localidad: {item.data.Localidad}</p>
                                   {/* <Button className="itemButtonUp"  onClick={()=> this.getCol1(item.id)}>Editar</Button>*/}
                                    <Button className="itemButtonDel"  onClick={()=> this.deleteCol1(item.id)}>Eliminar</Button>
                                </div>
                             </div>
                        </div>
                    )): null }
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
  }
                

export default Template;