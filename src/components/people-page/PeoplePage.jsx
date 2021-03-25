import React from 'react';
import ItemList from "../item-list/ItemList";
import PersonDetails from "../person-details/PersonDetails";
import styled from "styled-components";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

const InfoStyle = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;

  & > .col-md-12 {
    padding: 0;
  }
`

class PeoplePage extends React.Component {

  state = {
    selectedPerson: 1,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
        <InfoStyle className='row mb-12'>
          <div className='col-md-6 pl-0'>
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>

          <div className='col-md-6 pr-0'>
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </InfoStyle>
    )
  }
}

export default PeoplePage;