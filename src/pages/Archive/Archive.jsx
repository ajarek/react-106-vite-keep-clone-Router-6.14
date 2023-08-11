import { useState, useEffect } from 'react'
import {saveStorage, fetchStorage, saveStorageSingle} from '../../helpers/localStorage'
import {
  BiBulb,
  BiPalette,
  BiCommentAdd,
  BiWindowClose,
  BiArchiveIn,
} from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import './Archive.css'

const Archive = () => {
  const [archiveData, setArchiveData] = useState([])

  useEffect(() => {
    const storedArchive = fetchStorage('archive')
    if (storedArchive) {
      setArchiveData(storedArchive)
    }
  }, [])

  const removeArchive = (index) => {
    const newArchives = [...archiveData]
    const filterArchive = newArchives.filter((el, idx) => idx !== index)
    setArchiveData(filterArchive)
    saveStorageSingle(filterArchive, 'archive')
  }
  
  const restoreNote = (index) => {
    const newArchives = [...archiveData]
    const restoreNote=newArchives.find((el,ind)=>ind===index)
    const filterNote = newArchives.filter((el, idx) => idx !== index)
    saveStorage(restoreNote, 'notes')
    setArchiveData(filterNote)
    saveStorageSingle(filterNote, 'archive')
  }

  return (
    <div className='archive'>
      <div className='archive-wrapper'>
     {archiveData.length > 0 ? (
          archiveData.map((el, index) => {
            return (
              <div
                className='card'
                key={index}
                style={{ background: el.color }}
              >
                <h3>{el.title}</h3>
                <p>{el.note}</p>
                <button
                  onClick={() => removeArchive(index)}
                  className='remove-btn'
                >
                  <RiDeleteBinLine
                    size={30}
                    color='red'
                  />
                </button>
                <button
                  onClick={() => restoreNote(index)}
                  className='archive-btn'
                >
                  <BiArchiveIn
                    size={30}
                    color='green'
                  />
                </button>
              </div>
            )
          })
        ) : (
          <div className='info-archive'>
            <BiArchiveIn
              size={120}
              className='archive-in'
            />
            <h3>Tutaj pojawią się zarchiwizowane notatki</h3>
          </div>
        )}
      </div>
      </div>
  )
}

export default Archive