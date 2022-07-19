import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/header.jsx"
import InputBar from "./components/Input";

function App() {
  const [count, setCount] = useState(0)

  const cntSet=()=>{
    let entry=document.getElementById('inputName')
    let item=entry.value
    let vowels=['a','e','i','o','u']
    for (let i=0; i<item.length; i++){
      for (let j=0; j<vowels.length; j++){
        if (item[i] === vowels[j]){
          console.log(item[i], vowels[j])
          setCount(prevCounter => prevCounter+1);
        }
      }
    }
  }

  return (
    <div className="App">
      <Header/>
      <InputBar />
      <button onClick={cntSet}>
        Number or vowels is {count}
      </button>
    </div>
  )
}

export default App
