import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>OnMachina Auth SDK</h1>
      <h2>Example applicaiton</h2>
      <Outlet />
      <div className="card">
        <Link to="/near-login">Login with NEAR</Link>
      </div>
      <p className="read-the-docs">
        Uses the library @onmachina/nearauth-sdk-wallet
      </p>
    </>
  )
}

export default App
