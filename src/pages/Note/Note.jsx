import { BiBulb } from 'react-icons/bi'
import { useState } from 'react'
import './Note.css'

const Note = () => {
  const [noteActive,setNoteActive]=useState(false)
  const handleAddNote=()=>{
    setNoteActive(true)
  }
  return (
    <div className='note'>
      <div className="add-note" onClick={handleAddNote}>
        {noteActive&& <input type='text' placeholder='Tytuł'/>}
        <input type='text' placeholder='Utwórz notatkę...'/>
      </div>
      {noteActive?'Note':
      <div className="info-note">
         <BiBulb size={120} className='bulb-note'/>
        <h3>Tutaj pojawią się Twoje notatki</h3>     
        </div>
      }
     
    </div>
  )
}

export default Note
