import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	deleteLocation(id){
		this.props.deleteBuilding(id)
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data,filterText,selectedUpdate} = this.props;
		

		const buildingList = data
		.filter(directory=>{
			return directory.name.indexOf(filterText)>= 0
		})
		.map(directory => {
			return (
				<tr key={directory.id} >
					<td>{directory.code}</td>
					<td onClick={()=>selectedUpdate(directory.id)}> {directory.name}</td>
					<RemoveBuilding deleteLocation={this.deleteLocation.bind(this)} id={directory.id}/>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
