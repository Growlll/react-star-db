import React from 'react';
import styled from "styled-components";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/spinner";
import ErrorButton from "../ErrorButton/ErrorButton";

const ItemDetailsStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto 20px;
  background: #303030;
  border-radius: 5px;
  padding: 15px;
`
const ImageBlockStyle = styled.div`
  width: 150px;
  margin-right: 1.5rem;
  
  & > img {
    width: 100%;
    border-radius: 5px;
  }
`
const TitleStyle = styled.h4`
  margin-bottom: 1rem;
`
const ListStyle = styled.ul`
  padding-left: 1rem;
  
  & > .list-group-item {
    border: none;
    border-top: 1px solid grey;
    padding: 0;
    list-style-type: none;
    margin-bottom: 0.5rem;
  }
`
const CardBodyStyle = styled.div`
  padding-top: 0;
`
const TermStyle = styled.span`
  color: #bbbcbc;
`

class ItemDetails extends React.Component {

  state = {
    item: null,
    loading: true,
    itemUrl: null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson()
      this.setState({ loading: true })
    }
  }

  componentDidMount() {
    this.updatePerson()
    this.setState({ loading: false })
  }

  updatePerson = () => {
    const { id, getData, getImageUrl } = this.props
    if(!id) {
      return
    }

    getData(id)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          itemUrl: getImageUrl(item)
        })
      })
  }

  render() {
    const { item, itemUrl } = this.state
    if(!item) {
      return <>Select a person from list</>
    }

    if(this.state.loading) {
      return <Spinner />
    }

    const { name, gender, birthYear, eyeColor } = item

    return (
      <ItemDetailsStyle className='person-details card'>
        <ImageBlockStyle>
          <img className='person-image'
               src={itemUrl}
               alt=""/>
        </ImageBlockStyle>

        <CardBodyStyle className='card-body'>
          <TitleStyle>{ name }</TitleStyle>
          <ListStyle>
            <li className='list-group-item'>
              <TermStyle className='term'>Gender: </TermStyle>
              <span>{ gender }</span></li>
            <li className='list-group-item'>
              <TermStyle className='term'>Birth Year: </TermStyle>
              <span>{ birthYear }</span></li>
            <li className='list-group-item'>
              <TermStyle className='term'>Eye color: </TermStyle>
              <span>{ eyeColor }</span></li>
          </ListStyle>

          <ErrorButton />
        </CardBodyStyle>
      </ItemDetailsStyle>
    )
  }
}

export default ItemDetails;