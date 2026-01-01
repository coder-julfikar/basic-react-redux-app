import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  )
}

export default App
