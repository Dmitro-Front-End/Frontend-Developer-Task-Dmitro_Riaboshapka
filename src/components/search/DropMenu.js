import React, { useMemo } from 'react'
import { dataMath } from './dataMath'
import { DropElem } from './DropElem'
import useDropMenu from '../store'
import { CurrentElem } from './CurrentElem'
// dataMath
export const DropMenu = () => {
    const {value,dropMenu,searchMenu,currentElement} = useDropMenu(({value,dropMenu,searchMenu,currentElement}) => ({value,dropMenu,searchMenu,currentElement}))

    const memoDropMenu = useMemo(() => {
        if(value.trim() === '') return null;
        const data = [...dropMenu, ...dataMath];
        let i = 0;
        return data.map(elem => {
            if(elem.name.toLowerCase().includes(value.toLowerCase())) {
                return <DropElem key={elem.id} elem={elem} />
            }
        }).filter((e) => {
            if(e && i < 9) {
                i++;
                return true;
            }
        })
    },[value,dropMenu,searchMenu]) 

    const memoCurrentElement = useMemo(() => {
        if(currentElement === null || value.trim() === '') return null;
     
        const Components = [];
        for(const key in currentElement) {
            if(key === 'id') continue;
            if(key.toLowerCase().includes(value.toLowerCase())) Components.push(<CurrentElem key={key} text={currentElement[key]} keyT={key}/>)
        }
        return Components
    },[currentElement,value])

  return (
    <div className='dropMenu-c'>
        {memoCurrentElement ? memoCurrentElement : memoDropMenu}
    </div>
  )
}

