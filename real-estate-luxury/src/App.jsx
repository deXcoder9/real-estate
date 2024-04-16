import './App.css'
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App;
