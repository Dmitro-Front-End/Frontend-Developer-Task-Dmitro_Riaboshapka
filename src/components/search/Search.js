import React from 'react'
import useDropMenu from '../store'

export const Search = () => {
    const {value,changeValue} = useDropMenu(({value,changeValue }) => ({value,changeValue}))
  return (
    <div>
        <input value={value} onChange={(e)=>changeValue(e.target.value)} /> <button>add</button>
        <hr></hr>
    </div>
  )
}
