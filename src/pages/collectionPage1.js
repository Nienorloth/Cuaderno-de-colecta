import React from 'react';
import Template from '../components/template';
import Back from '../components/back';

class CollectionPage1 extends React.Component {
    render() {
    return (
        <div>
            <Back/>
            <Template collection={'1'} />
        </div>
    )
    }
}
                

export default CollectionPage1;