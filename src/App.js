import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import useDropMenu from './components/store';
import { Search } from './components/search/Search';
import { DropMenu } from './components/search/DropMenu';
import { CalculateMenu } from './components/search/CalculateMenu';
import { Sum } from './components/search/Sum';

function App() {
  const loadDropMenu = useDropMenu(({loadDropMenu}) => loadDropMenu)
  useEffect(()=>{
    loadDropMenu()
  },[])
  return (
    <div className="App">
      <Search/>
      <CalculateMenu/>
      <DropMenu/>
      <Sum/>
    </div>
  );
}

export default App;
