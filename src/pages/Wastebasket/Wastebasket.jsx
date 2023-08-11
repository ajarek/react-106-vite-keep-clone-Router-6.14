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
import './Wastebasket.css'

const Wastebasket = () => {
  const [garbageData, setGarbageData] = useState([])

  useEffect(() => {
    const storedGarbage = fetchStorage('basket')
    if (storedGarbage) {
      setGarbageData(storedGarbage)
    }
  }, [])
  
  const restoreGarbage = (index) => {
    const newGarbage = [...garbageData]
    const restoreGarbage=newGarbage.find((el,ind)=>ind===index)
    const filterGarbage = newGarbage.filter((el, idx) => idx !== index)
    saveStorage(restoreGarbage, 'notes')
    setGarbageData(filterGarbage)
    saveStorageSingle(filterGarbage, 'basket')
  }

  const removeGarbage = (index) => {
    const newGarbage = [...garbageData] 
    const filterArchive = newGarbage.filter((el, idx) => idx !== index)
    setGarbageData(filterArchive)
    saveStorageSingle(filterArchive, 'basket')
  }

  return (
    <div className='wastebasket'>
        <div className='wastebasket-wrapper'>
     {garbageData.length > 0 ? (
          garbageData.map((el, index) => {
            return (
              <div
                className='card'
                key={index}
                style={{ background: el.color }}
              >
                <h3>{el.title}</h3>
                <p>{el.note}</p>
                <button
                  onClick={() => removeGarbage(index)}
                  className='remove-btn'
                >
                  <RiDeleteBinLine
                    size={30}
                    color='red'
                  />
                </button>
                <button
                  onClick={() => restoreGarbage(index)}
                  className='wastebasket-btn'
                >
                  <BiBulb
                    size={30}
                    color='green'
                  />
                </button>
              </div>
            )
          })
        ) : (
          <div className='info-wastebasket'>
            <RiDeleteBinLine
              size={120}
              className='wastebasket-in'
            />
            <h3>Tutaj pojawią się usunięte notatki</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wastebasket