import React from 'react'
import useDropMenu from '../store'

export const DropElem = ({elem}) => {
  const {addElemInSearch} = useDropMenu(({addElemInSearch }) => ({addElemInSearch}))

  return (
    <div onClick={() => addElemInSearch(elem)} className='elem-c'>
        <p>{elem.name}</p> <span>{elem.category}</span>
    </div>
  )
}
