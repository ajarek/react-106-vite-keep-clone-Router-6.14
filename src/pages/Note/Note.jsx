import { BiBulb, BiPalette, BiCommentAdd, BiWindowClose } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { saveStorage} from '../../helpers/localStorage'
import './Note.css'

const Note = () => {
  const [noteActive, setNoteActive] = useState(false)
  const [receivedData, setReceivedData] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("notes"));
    if (storedTodos) {
      setReceivedData(storedTodos);
    }
  }, []);
  
  

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
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = '#ffd52e'
    saveStorage(newData, 'notes')
  }
  const handleClose = (e) => {
    setNoteActive(false)
  }
  
  const removeNote = (index) => {
     const newNotes = [...receivedData];
     
    const filterNote=newNotes.filter((el,idx)=>idx!==index);
   
     setReceivedData(filterNote);
     localStorage.setItem("notes", JSON.stringify(filterNote));
  };

  return (
    <div className='note'>
      <form
        className='add-note'
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
          onClick={handleAddNote}
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
            <button
              type='button'
              onClick={handleClose}
              style={{ color: 'red' }}
              className='close'
            >
              <BiWindowClose size={40} />
            </button>
          </div>
        )}
      </form>
      {receivedData.length > 0 ? (
        receivedData.map((el, index) => {
          return (
            <div
              className='card'
              key={index}
              style={{ background: el.color }}
            >
              <h3>{el.title}</h3>
              <p>{el.note}</p>
              <button onClick={()=>removeNote(index)}><RiDeleteBinLine size={30} color='red'/></button>
            </div>
          )
        })
      ) : (
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
