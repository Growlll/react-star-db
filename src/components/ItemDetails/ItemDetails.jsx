import React, { Component } from 'react';
import styled from "styled-components";
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


export default class ItemDetails extends Component {

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
    const { itemId, getData, getImageUrl } = this.props
    if(!itemId) {
      return
    }

    getData(itemId)
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

    const { name } = item

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
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item })
              })
            }
          </ListStyle>

          <ErrorButton />
        </CardBodyStyle>
      </ItemDetailsStyle>
    )
  }
}

