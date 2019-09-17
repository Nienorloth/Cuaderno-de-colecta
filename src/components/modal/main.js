// import React from 'react';
// //install Styled-Components and Transition Events

// class Main extends React.Component {
//     state = {
//         isModalOpen: false
//     };
//     toggleState = e => {
//         this.ListeningStateChangedEvent({
//             isModalOpen: !this.state.isModalOpen
//         });
//     };
    
//     render () {
//         return (
//             <div>
//                 <button onClick={this.toggleState}>Open Modal</button>
//                 <div>Modal is: {this.state.isModalOpen ? 'Open' : 'Closed'}
//                 </div>
//                 {this.state.isModalOpen && (
//                     <Modal
//                       id='modal'
//                       isOpen={this.state.isModalOpen}
//                       onClose={this.toggleState}
//                       class='my-class'
//                     >
//                     <div className='box-body'>I am thecontent of the modal </div>
//                     </Modal>                      
//                 )}
//             </div>
//         );
//     }
// }
//  export default Main;