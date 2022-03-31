// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext(0)

function CountProvider({children}) {
  const value = React.useState(0)
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  const [count, setCount] = React.useContext(CountContext)
  return [count, setCount]
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
