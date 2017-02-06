import React from 'react'

const withState = initialState => Component =>
  React.createClass({
    getInitialState: () => initialState,
    render: function () {
      return <Component
        {...this.props}
        state={this.state}
        setState={state => this.setState(state)}
      />
    }
  })

export default withState

