import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { React, useContext } from 'react'
import { AppContext } from '../../App'
import './Nav.css'

const Nav = () => {
  const { isOpen, setOpen } = useContext(AppContext)
  return (
    <nav className='nav'>
      <Link
        className='link link-logo'
        to={'/'}
      >
        <div className='img'>
          <img
            src='/keep.png'
            alt='logo'
          />
        </div>
        <h1>Keep</h1>
      </Link>

      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        {/* <Link
          className='link link-text'
          to={'/'}
        >
          Home
        </Link> */}
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
