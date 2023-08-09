import { BiBulb, BiPalette, BiCommentAdd } from 'react-icons/bi'
import { useState } from 'react'
import './Note.css'

const Note = () => {
  const [noteActive, setNoteActive] = useState(false)
  const [receivedData, setReceivedData] = useState([{}])
  const handleAddNote = () => {
    setNoteActive(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = {
      title: e.target[0].value,
      note: e.target[1].value,
      color: e.target[2].value,
    }
    setReceivedData([...receivedData, newData])
    e.target[0].value=''
    e.target[1].value=''
    e.target[2].value='#ffd52e'
  }
  
  return (
    <div className='note'>
      <form
        className='add-note'
        onClick={handleAddNote}
        onSubmit={handleSubmit}
      >
        {noteActive && (
          <input
            type='text'
            placeholder='Tytuł'
            required
          />
        )}
        <input
          type='text'
          placeholder='Utwórz notatkę...'
          required
        />
        {noteActive && (
          <div className='panel'>
            <div className='row'>
              <input
                id='color'
                type='color'
                defaultValue='#ffd52e'
              />
              <label htmlFor='color'>
                <BiPalette size={40} />
              </label>
            </div>
            <button type='submit'>
              <BiCommentAdd size={40} />
            </button>
          </div>
        )}
      </form>
      {noteActive ? 
        receivedData.map((el, index) => {
          return(
            <div key={index} style={{background:el.color}}>
              <h1>{el.title}</h1>
              <p>{el.note}</p>
            </div>
          )
        })
      : (
        <div className='info-note'>
          <BiBulb
            size={120}
            className='bulb-note'
          />
          <h3>Tutaj pojawią się Twoje notatki</h3>
        </div>
      )}
    </div>
  )
}

export default Note
