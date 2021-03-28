import React, {Component} from 'react';
import Spinner from '../Spinner/spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null
    }

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          })
        })
    }

    render() {
      if (!this.state.itemList) {
        return <Spinner/>
      }

      if (this.state.error) {
        return <ErrorIndicator />
      }

      return <View {...this.props} data={this.state}/>
    }
  }
}

export { withData }