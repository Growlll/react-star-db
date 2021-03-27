import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Row from '../Row/Row';

class PeoplePage extends React.Component {

  state = {
    selectedPerson: 1
  }

  onPersonSelected = (id) => {
    this.setState({selectedPerson: id})
  }

  render() {
    const itemList = (
      <ItemList id={this.state.selectedPerson}
                getData={this.props.getData}
                onItemSelected={this.onPersonSelected}
                renderItem={({name, gender, birthYear}) => (
                  `${name} (${gender} ${birthYear})`)}/>
    )

    const itemInfo = (
      <ItemDetails getData={this.props.getData}
                   getAllItem={this.getAllItem}
                   id={this.state.selectedPerson}
                   getImageUrl={this.swapiService.getPersonImage}/>
    )

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemInfo}/>
      </ErrorBoundary>
    )
  }
}

export default PeoplePage;