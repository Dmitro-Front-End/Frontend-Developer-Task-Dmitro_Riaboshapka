import React from 'react'
import useDropMenu from '../store'

export const CurrentElem = ({keyT, text}) => {
    const {selectedKeyInObj} = useDropMenu(({selectedKeyInObj }) => ({selectedKeyInObj}))
  return (
    <div className='elem-c' onClick={() => selectedKeyInObj(keyT)}>
        {keyT}
    </div>
  )
}
