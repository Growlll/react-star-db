import React from 'react';
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 10px 20px;
  background-color: darkred;
  border: transparent;
  border-radius: 3px;
  font-size: 20px;
  color: #fff;
  transition: all .2s linear;
`

class ErrorButton extends React.Component {

  state = {
    renderError: false
  }

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0
    }

    return (
      <ButtonStyle onClick={() => this.setState({renderError: true})}>Throw Error</ButtonStyle>
    )
  }
}

export default ErrorButton;