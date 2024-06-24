import React from 'react'

export default function Infinite_Scroll({name,url}) {
    let id = url.replace("https://pokeapi.co/api/v2/pokemon/", "");
    id = id.replace("/", "");
    let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png";
  return (
      <img src={img} alt={name+" Pokemon"} className="h-full animate-infinity" />
  )
}
