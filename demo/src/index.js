import React from 'react'
import {render} from 'react-dom'

import withState from '../../src'

const Counter = ({state, setState}) =>
  <div>
    {state.count}
    <button onClick={() => setState({count: state.count + 1})}>
      Increment
    </button>
  </div>

const manageCounterState = withState({count: 0})
const ManagedCounter = manageCounterState(Counter)

render(<ManagedCounter />, document.querySelector('#demo'))

