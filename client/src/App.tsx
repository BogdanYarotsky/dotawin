import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 1. Modify the state to hold the fetched data.
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

  // 2. Create a function that performs the fetching and updates the state.
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(apiEndpoint)
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error("There was an error fetching the data", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={fetchData}>
          Fetch Data
        </button>
        {loading && <p>Loading...</p>}
        <p>
          {data && JSON.stringify(data)}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
