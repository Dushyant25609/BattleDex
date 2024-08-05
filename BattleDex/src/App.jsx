import React, { useState } from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router'
import Ranking from './Components/Ranking'
import Great_League from './Components/Great_League'
import Ultra_League from './Components/Urlta_League'
import Master_League from './Components/Master_League'
import Pokedex from './Components/Pokedex'
import Pokemon_details from './Components/Pokemon_details'
import Background from './Components/Background'


function App() {
  const [type,setType] = useState("");
  function getType(type){
    setType(type);
  }

  return (
    <div className='overflow-x-hidden'>
      <Background type={type} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/BattleDex/Ranking' element={<Ranking/>}/>
        <Route path='/BattleDex/Pokedex' element={<Pokedex/>}/>
        <Route path="/BattleDex/Ranking/Great_League" element={<Great_League/>} />
        <Route path="/BattleDex/Ranking/Ultra_League" element={<Ultra_League/>} />
        <Route path="/BattleDex/Ranking/Master_League" element={<Master_League/>} />
        <Route path="/BattleDex/Details/:name" element={<Pokemon_details giveType={getType} />} />
      </Routes>
    </div>
  )
}

export default App
