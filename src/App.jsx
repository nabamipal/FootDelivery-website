import React, { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [height,setHight] = useState(180);
  const [weight,setWeight] = useState (70)


  function onWeightChange(event){
    setWeight(event.target.value)
  }
  function onHeightChange(event){
      setHight(event.target.value)
  }
  const outPut = useMemo(() =>{
        const calculator = height/100;
        return (weight/(calculator * calculator)).toFixed(1)

  },[height,weight]);
  return (
    <main>
      <h1>Project 4:BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weight} Kg</p>
        <input className='input-slider' type="range" step="1" min="40" max='400'
        onChange={onWeightChange} />
        <p className='slider-output'>Height:{height} cm</p>
        <input className='input-slider' type="range" min='140' max='220'
        onChange={onHeightChange} />
      </div>
      <div className='output-scetion'>
          <p className=''>your IBM is</p>
          <p className='output'>{outPut}</p>
          <input type="text" />
        </div>
    </main>
  )
}

export default App



