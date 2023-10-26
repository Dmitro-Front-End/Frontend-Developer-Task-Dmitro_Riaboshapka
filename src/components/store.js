// store.js
import create from 'zustand';
import { getDropMenuApi } from '../api/api';

const useDropMenu = create((set) => ({
  isLoading: true,
  value : '',
  error : {
    status : null,
    text : '',
    isActive : false
  },
  currentElement : null,
  dropMenu: [],
  searchMenu : [],
//   logical
  addElemInSearch: (elem) => set((state) => {
    const newElem = {...elem};
    return { searchMenu: [...state.searchMenu, newElem ], value : '', currentElement :  elem.category === 'calculation' ? null : newElem }
  }),
  selectedKeyInObj : (keyT) => set((state) => {
    state.currentElement.keyT = keyT;
    return {currentElement : null, value : ''}

  }),
  removeElemInSearch: (id) => set((state) => ({ searchMenu: state.searchMenu.filter(elem => elem.id !== id)})),
  changeValue : (value) => set(() => ({value})),
//   async
 loadDropMenu: async () => {
    set({ isLoading: true });
    try {
        const response = await getDropMenuApi();
        if(response.status === 200 && response.data.length !== 0) return set({ dropMenu: response.data, isLoading: false });
        else return set({ error : {status : response.status, text : 'data zero', isActive : true}, isLoading: false });

    } catch (e){
        return set({ error : {status : e.status, text : 'check you internet and try later', isActive : true}, isLoading: false });
    }
  },
}));

export default useDropMenu;
