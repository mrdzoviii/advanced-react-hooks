// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)

  // const countReducer = (state, action) => {
  //   return state + action
  // }

  // const [count, changeCount] = React.useReducer(countReducer, initialCount)

  const stateReducer = (state, newState) => {
    if (typeof newState === 'function') {
      console.log('test:', newState(state))
      return {...state, ...newState(state)}
    }
    return {...state, ...newState}
  }

  const [state, setState] = React.useReducer(stateReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount

  console.log(state)

  const increment = () =>
    setState(prevCount => ({
      count: prevCount.count + step,
    }))
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter step={5} />
}

export default App
