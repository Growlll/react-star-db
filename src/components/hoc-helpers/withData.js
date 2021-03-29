import React, {Component} from 'react';
import Spinner from '../Spinner/spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
      activeId: null
    }

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          })
        })
    }

    onItemSelected = (id) => {
      this.setState({activeId: id})
    }

    render() {
      if (!this.state.data) {
        return <Spinner/>
      }

      if (this.state.error) {
        return <ErrorIndicator/>
      }

      return <View {...this.props}
                   data={this.state}
                   onItemSelected={this.onItemSelected}
                   activeId={this.state.activeId}/>
    }
  }
}

export {withData}