import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import CreatePost from './pages/createPost'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/createPost' element={<CreatePost/>}/>

      </Routes>
    </Router>
  )
}

export default App;
