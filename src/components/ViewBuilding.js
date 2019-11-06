import React from 'react';

class ViewBuilding extends React.Component {
	
	render() {
		let id
		if(this.props.id === 0){
			 id = 0;
		}else{
			 id = this.props.id-1;
		}
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					<td>
						<tr>{this.props.data[id].code}</tr>
						<tr>{this.props.data[id].name}</tr>
						<tr>{(this.props.data[id].coordinates)? <div>{this.props.data[id].coordinates.longitude}</div>:<div></div>}</tr>
						<tr>{(this.props.data[id].coordinates)? <div>{this.props.data[id].coordinates.latitude}</div>:<div></div>}</tr>
						<tr>{(this.props.data[id].address)? <p>{this.props.data[id].address}</p>:<p></p>}</tr>
					</td>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
