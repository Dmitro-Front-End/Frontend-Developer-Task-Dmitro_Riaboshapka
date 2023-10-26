import React, {  useMemo } from 'react'
import useDropMenu from '../store'
import { CalculateElem } from './CalculateElem'

export const CalculateMenu = () => {

    const {searchMenu, currentElement} = useDropMenu(({searchMenu, currentElement}) => ({searchMenu, currentElement})) 


    const memoSearchMenu = useMemo(() => searchMenu.map((elem, i) => <CalculateElem {...elem} key={elem.id + i}/>) ,[searchMenu, currentElement])
  

  return (
    <div>
       <div className='calculate-g'>{memoSearchMenu}</div> 
        <hr/>
    </div>
  )
}
