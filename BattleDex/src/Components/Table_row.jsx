import React from 'react'
import {Link} from 'react-router-dom'


export default function Table_row({rank,pokemon,score}) {
    const color = rank%2==0 ? 'bg-blue-100' :  "bg-white"; 
  
    let name = pokemon.toLowerCase();
    let names = name.split(' ');

  return (
    <Link to={"/BattleDex/Details/"+names[0]} className={'grid grid-cols-5 gap-3 py-2 px-4 text-sm shadow-xl md:text-base lg:text-lg hover:brightness-90 '+ color} >
        <p className='justify-self-center' >{rank}</p>
        <p className='col-span-3' >{pokemon}</p>
        <p className='justify-self-center'>{score}</p>
    </Link>
  )
}
