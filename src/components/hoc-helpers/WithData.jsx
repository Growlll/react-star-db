import React, {Component} from 'react';
import Spinner from '../Spinner/spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      activeId: null,
      loading: true,
      error: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.getData !== prevProps.getData) {
        this.update()
      }
    }

    componentDidMount() {
      this.update()
    }

    update() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          })
        })
        .catch(() => {
          this.setState((state) => {
            return { loading: !state.loading}
          })
        })
    }

    render() {
      if (this.state.loading) {
        return <Spinner/>
      }

      if (this.state.error) {
        return <ErrorIndicator/>
      }

      return <View {...this.props}
                   data={this.state}
                   onItemSelected={this.props.onItemSelected}
                   activeId={this.state.activeId}/>
    }
  }
}

export {withData}