import { Link } from 'react-router-dom'

import './Aside.css'

const Aside = () => {
  return (
    <nav className='aside'>
      <ul className='wrapper'>
        <Link
          className='link'
          to={'/'}
        >
          Notatki
        </Link>
        <Link
          className='link'
          to={'/'}
        >
          Przypomnienia
        </Link>
      </ul>
    </nav>
  )
}

export default Aside
