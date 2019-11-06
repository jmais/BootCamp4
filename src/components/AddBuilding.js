import React, { Component } from 'react';

class AddBuilding extends Component {
    
    addLocation(){
        this.props.data.push({address: this.refs.locationAddress.value,
            code: this.refs.locationCode.value,
            coordinates: {
                latitude: this.refs.locationLatitude.value,
                longitude: this.refs.locationLongitude.value
            },
            id:this.props.data.length+1,
            name: this.refs.locationName.value})
           console.log(this.props.data);
    }

    render() { 
        return ( 
        <form className = "column3" form onSubmit = {(e) => e.preventDefault()}>
    
        <input type ="text" placeholder="Building Code" ref="locationCode"></input>
        <input type="text" placeholder="Building Name" ref="locationName"></input>
        <input type="text" placeholder="Building Longitude" ref="locationLongitude"></input>
        <input type="text" placeholder="Building Latitude" ref ="locationLatitude"></input>
        <input type="text" placeholder="Building Address" ref="locationAddress"></input>
        <button onClick={(e)=>{this.addLocation(e)}}>Add Building</button> 
        </form>
        );
    }
}
 
export default AddBuilding;