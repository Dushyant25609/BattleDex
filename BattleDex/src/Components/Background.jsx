import React, { useState, useEffect } from 'react';

export default function Background({ type }) {
  const [bc, setBc] = useState("");

  
  console.log(type)
  const bgClasses = {
    normal: "bg-gradient-to-b from-normal-Dark from-10% via-normal-Lite via-50% to-normal-Dark to-90%",
    fire: "bg-gradient-to-b from-fire-Dark from-10% via-fire-Lite via-50% to-fire-Dark to-90%",
    water: "bg-gradient-to-b from-water-Dark from-10% via-water-Lite via-50% to-water-Dark to-90%",
    grass: "bg-gradient-to-b from-grass-Dark from-10% via-grass-Lite via-50% to-grass-Dark to-90%",
    flying: "bg-gradient-to-b from-flying-Dark from-10% via-flying-Lite via-50% to-flying-Dark to-90%",
    fighting: "bg-gradient-to-b from-fighting-Dark from-10% via-fighting-Lite via-50% to-fighting-Dark to-90%",
    poison: "bg-gradient-to-b from-poison-Dark from-10% via-poison-Lite via-50% to-poison-Dark to-90%",
    electric: "bg-gradient-to-b from-electric-Dark from-10% via-electric-Lite via-50% to-electric-Dark to-90%",
    ground: "bg-gradient-to-b from-ground-Dark from-10% via-ground-Lite via-50% to-ground-Dark to-90%",
    rock: "bg-gradient-to-b from-rock-Dark from-10% via-rock-Lite via-50% to-rock-Dark to-90%",
    psychic: "bg-gradient-to-b from-psychic-Dark from-10% via-psychic-Lite via-50% to-psychic-Dark to-90%",
    ice: "bg-gradient-to-b from-ice-Dark from-10% via-ice-Lite via-50% to-ice-Dark to-90%",
    bug: "bg-gradient-to-b from-bug-Dark from-10% via-bug-Lite via-50% to-bug-Dark to-90%",
    ghost: "bg-gradient-to-b from-ghost-Dark from-10% via-ghost-Lite via-50% to-ghost-Dark to-90%",
    steel: "bg-gradient-to-b from-steel-Dark from-10% via-steel-Lite via-50% to-steel-Dark to-90%",
    dragon: "bg-gradient-to-b from-dragon-Dark from-10% via-dragon-Lite via-50% to-dragon-Dark to-90%",
    dark: "bg-gradient-to-b from-dark-Dark from-10% via-dark-Lite via-50% to-dark-Dark to-90%",
    fairy: "bg-gradient-to-b from-fairy-Dark from-10% via-fairy-Lite via-50% to-fairy-Dark to-90%",
  };

  useEffect(() => {
    if (type in bgClasses) {
      setBc(bgClasses[type]);
    }
  }, [type]);

  if(bc==""){
    return <div className={'h-screen w-screen fixed bg-gradient-to-br from-red-800 from-10% via-primary-base via-50% to-gray-200 to-50%'}></div>;
  }

  return (
    <div className={'h-screen w-screen fixed ' + bc} />
  );
}
