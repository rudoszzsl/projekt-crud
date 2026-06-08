import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import CarsPage from './components/CarsPage'
import CarDetailsPage from './components/CarDetailPage'


function App() {
  return(
    <>
    <div>
      <nav className='navbar navbar-dark bg-dark px-4 mb-4'>
        <Link className='navbar-brand' to='/'>Company Fleet</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path='/' element={<CarsPage />} />
          <Route path='/item/:id' element={<CarDetailsPage />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
