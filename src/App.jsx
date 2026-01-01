import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceContainer from './components/IceContainer'
import NCakeContainer from './components/NCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer /> */}
        {/* <CakeContainer />
        <IceContainer />
        <NCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  )
}

export default App
