import React from 'react';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import styled from 'styled-components';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const InfoStyle = styled.div`
  margin: 0 auto;
  display: flex;

  & > .col-md-12 {
    padding: 0;
  }
`

const Row = ({ left, right} ) => {
  return (
    <InfoStyle className='row mb2'>
      <div className='col-lg-6'>
        {left}
      </div>

      <div className='col-lg-6'>
        {right}
      </div>
    </InfoStyle>
  )
}

class PeoplePage extends React.Component {

  state = {
    selectedPerson: 1,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  onPersonSelected = (id) => {
    this.setState({selectedPerson: id})
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const itemList = (
      <ItemList id={this.state.selectedPerson}
                getData={this.props.getData}
                onItemSelected={this.onPersonSelected}
                renderItem={({name, gender, birthYear}) => (
                  `${name} (${gender} ${birthYear})`)}/>
    )

    const itemInfo = (
      <PersonDetails getAllItem={this.getAllItem} personId={this.state.selectedPerson}/>
    )

    return (
      <div>
        <Row left={itemList} right={itemInfo}/>
      </div>
    )
  }
}


export default PeoplePage;