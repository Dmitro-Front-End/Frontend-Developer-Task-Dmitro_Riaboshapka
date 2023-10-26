import React, { useMemo } from 'react'
import useDropMenu from '../store'

export const Sum = () => {
     const {searchMenu, currentElement} = useDropMenu(({searchMenu, currentElement}) => ({searchMenu, currentElement})) 

     const memoSum = useMemo(() => {
        let sum = 0;
        // id, category, keyT, name, value 
        const changeSearch = searchMenu.map(elem => {
           let elemRes = elem.keyT ? elem[elem.keyT] : null;
          if(elemRes === null){
            if(elem.category === 'calculation') elemRes = elem.name;
            else elemRes = 'loading'
          }
          return elemRes
        })
        const loading = changeSearch.findIndex(e => e === 'loading')
        if(loading !== -1 || changeSearch.length < 3) return 'loading';
        
        // [51, '-', 6, '-', '(', 16, '+', 3, ')']
        // ! I try to realize prioritet
        // const startD = changeSearch.findIndex(e => e === '(')
        // const endD = changeSearch.findIndex(e => e === ')')
        // let mainCalculate = null;
        // let mainZnak = null;
        // if(~startD && endD) {
        //     mainCalculate = [];
        //     for (let i = startD + 1; i < endD ; i++) {
        //         mainCalculate.push(changeSearch[i])
        //         } 
        //     const sum = endD - startD
        //     mainZnak = changeSearch[startD - 1]
        //     changeSearch.splice(startD , sum + 1) 
          
        // }

        // let result = null;
       
    
        

        // if(mainCalculate !== null){
           
        // let one = null;
        // let znak = null;
        // let two = null;
        // for (let i = 0; i < mainCalculate.length; i++) {
        //     if(one === null) one = mainCalculate[i];
        //     else if(znak === null) znak = mainCalculate[i];
        //     else if(two === null) two = mainCalculate[i];

        //   if( one !== null && znak !== null && two !== null ) {
        //     let r;
        //     switch(znak) {
        //         case '+': r = one + two; break;
        //         case '-': r = one - two; break;
        //         case '*': r = one * two; break;
        //         case '/': r = one / two; break;
        //         case '^': r = one ** two; break;
        //     }
        //     one = r;
        //     result = r;
        //     znak = null;
        //     two = null;
        //     changeSearch.push(result)
        //   }   
        // }
        // }
     



        let one = null;
        let znak = null;
        let two = null;
        for (let i = 0; i < changeSearch.length; i++) {
            if(one === null) one = changeSearch[i];
            else if(znak === null) znak = changeSearch[i];
            else if(two === null) two = changeSearch[i];
            console.log(one, znak, two);
          if( one !== null && znak !== null && two !== null ) {
            let r;
            switch(znak) {
                case '+': r = one + two; break;
                case '-': r = one - two; break;
                case '*': r = one * two; break;
                case '/': r = one / two; break;
                case '^': r = one ** two; break;
            }
            one = r;
            znak = null;
            two = null;
          }   
        }


        if(Number.isNaN(one)) return 'check your data'
        return one




      
        // console.log(changeSearch);
  

     },[searchMenu, currentElement])
  return (
    <div>{memoSum}</div>
  )
}
