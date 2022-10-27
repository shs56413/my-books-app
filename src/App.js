import './App.css'
import data from './data.json'
import SideBar from './components/SideBar'

const App = () => {
  console.log(data)
  return (
    <div className="flex-row">
      <SideBar />

      <h1>My Books App</h1>
    </div>
  )
}

export default App
