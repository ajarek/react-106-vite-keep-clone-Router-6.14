import { Outlet } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Aside from '../../components/Aside/Aside'
import './Main.css'

const Main = () => {
  return (
    <div className='main-layout'>
      <Nav />
      <Aside />

      <Outlet />
    </div>
  )
}

export default Main
