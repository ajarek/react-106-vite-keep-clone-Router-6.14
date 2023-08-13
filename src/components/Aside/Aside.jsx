import { Link } from 'react-router-dom'
import { BiBulb, BiBell, BiPencil, BiArchiveIn } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { React, useContext } from 'react'
import { AppContext } from '../../App'
import './Aside.css'

const Aside = () => {
  const { isOpen } = useContext(AppContext)
  return (
    <nav className={!isOpen ? 'aside' : 'aside aside-none'}>
      <ul className='wrapper'>
        <Link
          className='aside-link'
          to={'/'}
        >
          <BiBulb
            className='icons'
            size={25}
          />
          Notatki
        </Link>
        <Link
          className='aside-link'
          to={'/'}
        >
          <BiBell
            className='icons'
            size={25}
          />{' '}
          Przypomnienia
        </Link>
        <Link
          className='aside-link'
          to={'/'}
        >
          <BiPencil
            className='icons'
            size={25}
          />
          Edytuj etykiety
        </Link>
        <Link
          className='aside-link'
          to={'/archiwum'}
        >
          <BiArchiveIn
            className='icons'
            size={25}
          />{' '}
          Archiwum
        </Link>
        <Link
          className='aside-link'
          to={'/kosz'}
        >
          <RiDeleteBinLine
            className='icons'
            size={25}
          />
          Kosz
        </Link>
      </ul>
    </nav>
  )
}

export default Aside
