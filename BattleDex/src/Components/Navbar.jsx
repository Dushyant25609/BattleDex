import React, { useState } from 'react'
import pokeball from "/Static/pokeball.webp";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [menu,setMenu] = useState("translate-x-full");

    function handleMenu(){
        if(menu === "translate-x-full") setMenu("translate-x-0");
        else setMenu("translate-x-full");
    }
  return (
    <>
    <div className={"fixed z-30 h-screen w-full bg-black flex flex-col items-center py-16 px-4 gap-36 transition-all " + menu}>
        <ImCross onClick={handleMenu} className='text-3xl text-white ' />
        <div className="flex flex-col gap-6">
            <Link to="/" className="text-white text-4xl hover:text-primary  ">Home</Link>
            <Link to="/BattleDex/Ranking"  className="text-white text-4xl hover:text-primary  ">Rankings</Link>
            <Link to="/BattleDex/Pokedex" className="text-white text-4xl hover:text-primary ">Pokedex</Link>
        </div>
        </div>
      <div className=" w-full flex justify-center backdrop-blur-sm ">
      <div className="flex justify-between items-center py-2 px-2 w-full lg:w-11/12">
        <Link to="/" className="flex items-center gap-6 px-6">
            <h1  className="hidden text-6xl text-logo_primary text-stroke-3 font-pokemon lg:block text-stroke-logo_secondary  ">B<span>a</span>ttléDéx</h1>
            <div className="w-12"><img src={pokeball} alt="Pokeball logo" className="" /></div>
        </Link>
        <div className="flex gap-6 px-6 lg:gap-16 ">
            <Link to="/BattleDex/Ranking" className='hidden px-2 hover:text-primary-lite text-xl font-semibold lg:text-2xl text-white  md:block '>Ranking</Link>
            <Link to="/BattleDex/Pokedex" className='hidden px-2 hover:text-primary-lite text-xl lg:text-2xl font-semibold text-white  md:block'>Pokedex</Link>
        </div>
            <IoMdMenu className='text-3xl md:hidden' onClick={handleMenu} />
      </div>
      </div>
      
    </>
  )
}
