



         <div class="flip-card">
         {items ? items.map( (item, key) => {
                   console.log(item);
                   return (
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img id="cardPic" src={item.data.Imagen} height="220" width="280"/>
      </div>
      <div class="flip-card-back">
        <p>{item.data.Orden}</p>
        <p>{item.data.Género}</p> 
        <p>{item.data.Especie}</p>
        <Button color='warning' onClick={()=> this.getCol1(item.id)}>Editar</Button>
        <Button color='danger'onClick={()=> this.deleteCol1(item.id)}>Eliminar</Button>
      </div>
    </div>
    //    <div id={item.id}myModal className="modal">
    //    <div className="modal-content">
    //      <span className="close" id={item.id}close">&times;</span>
    //    </div>
    //  </div>     
