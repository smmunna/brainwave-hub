import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <hr className='custom-divider'/> */}
      <Blog/>
    </div>
  )
}

export default App
