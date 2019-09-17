import React from 'react';
import FBApp from '../FirestoreConfig';
import 'firebase/firestore';
import {Table, Button, Row, Col, InputGroup, Input} from 'reactstrap';

const db = FBApp.firestore();
db.settings({timestampsInSnapshots:true});

class CollectionPage extends React.Component {

    state = {
        items:[],
        inputValue: '',
        edit:false,
        id:'',
    }
    
    componentDidMount(){
        db.collection('Insectos').onSnapshot((snapShots)=>{
            this.setState({
                items:snapShots.docs.map(doc=>{
                    return {id:doc.id,data:doc.data()}
                })
            })
        }, error => {
            console.log(error)
    });
  }

changeValue=(e)=>{
this.setState({
    inputValue:e.target.value
})

};

action = () => {
    const { inputValue, edit } = this.state;

    !edit ? 
    db.collection('Insectos').add({
        item: inputValue
    }).then(()=>{
        console.log('Agregado')
    }).catch(()=>{
        console.log('error')
    }) :
    this.update();
};

getInsectos=(id)=>{
    let docRef=db.collection('Insectos').doc(id);

    docRef.get().then((doc)=>{
        if(doc.exists){
            this.setState({
                inputValue:doc.data().item,
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

update=()=>{
    const{id,inputValue} = this.state;
    db.collection('Insectos').doc(id).update({
        item:inputValue
    }).then(()=>{
        console.log('actualizado')
    }).catch((error)=>{
        console.log(error);
    })
}

  render() {
      const {items, inputValue} = this.state;
      return (
          <div className='InsectsCol'>
              <Row>
                  <Col xs='10'>
                      <InputGroup>
                        <Input 
                        placeholder='Agregar un nuevo Item'
                        value={inputValue}
                        onChange={this.changeValue}
                        />
                      </InputGroup>
                  </Col>
                  <Col xs='2'>
                    <div className='text-right'>
                        <Button color='info' onClick={this.action}>
                         {this.state.edit ? 'Guardar cambios' : 'Agregar'}
                        </Button>
                    </div>
                  </Col>
              </Row>
              <Table hover className='text-center'>
                  <thead>
                      <tr>
                          <th>Nombre</th>
                          <th>Editar</th>
                          <th>Eliminar</th>
                      </tr>
                  </thead>
                  <tbody>
                    {items && items !== undefined ? items.map( (item, key) => (
                        <tr key={key}>
                         <td>{item.data.item}</td>
                         <td><Button color='warning' onClick={()=> this.getInsectos(item.id)}>Editar</Button></td>
                         <td><Button color='danger'>Eliminar</Button></td>
                        </tr>
                    )): null }
                  </tbody>
              </Table>
          </div>
      )
  }
}

export default CollectionPage;