import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/nav/navbar'
import Devices from './components/Devices/Devices'
import NewDevices from './components/NewDevices/NewDevices'
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch'
import { MainLayout } from './views/controlador/vcontrolador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <MainLayout/>
      </div>
    </>
  )
}

export default App