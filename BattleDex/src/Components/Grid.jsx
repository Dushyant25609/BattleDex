import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Grid({name,url}) {
    let id = url.replace("https://pokeapi.co/api/v2/pokemon/", "");
    id = id.replace("/", "");
    let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png";

    

  return (
    <Link to={"/BattleDex/Details/"+name} className='flex flex-col items-center bg-white hover:bg-gray-50 rounded-lg shadow-lg ' >
      <img src={img} alt={name+" image"} className="w-2/3 " />
      <h1 className="text-lg font-semibold lg:text-xl">{name}</h1>
    </Link>
  )
}
