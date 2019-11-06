import React, { Component } from 'react';

class RemoveBuilding extends Component {
    state = {  }
    render() { 
        return (
            <button onClick={()=>this.props.deleteLocation(this.props.id)}>Delete</button> 

        );
    }
}
 
export default RemoveBuilding;