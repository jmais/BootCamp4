import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from'./components/AddBuilding';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({filterText:value});
  }

  selectedUpdate(id) {
    this.setState({selectedBuilding:id});
  }

  deleteBuilding(id){
    this.setState({data:this.state.data.filter(directory=>directory.id!==id)})
  }

  addLocation(data){
    this.setState({data})
    console.log(this.state.data)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText ={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    deleteBuilding={this.deleteBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding data={this.props.data}
              id={this.state.selectedBuilding}
              />
            </div>
            <AddBuilding
            data={this.state.data}
            addLocation={this.addLocation.bind(this)}
            />
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
