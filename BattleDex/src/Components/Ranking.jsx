import React from 'react'
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import greatball from "./Static/great_ball.png";
import ultraball from "./Static/ultra_ball.png";
import masterball from "./Static/MASTERBALL.png";



export default function Ranking() {
  
  return (
    <div className='h-screen flex flex-col gap-8  relative z-10 ' >
      <Navbar/>
      <div className="flex flex-col h-full justify-around ">
        <div className="flex px-4 py-4 h-11/12 items-center">
        <div className="flex flex-col gap-4 md:hidden">
            <Link to="/BattleDex/Ranking/Great_League" className=' text-xl bg-black text-white px-6 py-2 flex justify-between items-center rounded-md' >
            Great League <img src={greatball} alt="GreatBall pokeball" className="w-2/12" />
             </Link>
            <Link to="/BattleDex/Ranking/Ultra_League" className='text-xl bg-black text-white px-6 py-2 flex justify-between items-center rounded-md' >
            Ultra League <img src={ultraball} alt="UltraBall pokeball" className="w-2/12" />
            </Link>
            <Link to="/BattleDex/Ranking/Master_League" className='text-xl bg-black text-white px-6 py-2 flex justify-between items-center rounded-md' >
            Master League <img src={masterball} alt="MasterBall pokeball" className="w-2/12" />
            </Link>
        </div>
        <div className=" hidden md:flex p-4 gap-8 ">
            <Link to="/BattleDex/Ranking/Great_League" className="flex flex-col items-center justify-center gap-4 backdrop-blur-sm  rounded-lg aspect-square shadow-xl   ">
                <img src={greatball} alt="GreatBall Pokeball" className='min-w-0 lg:w-3/5   2xl:w-2/5 transition-all ease-in hover:w-3/5 hover:-translate-y-20 hover:drop-shadow-great ' />
            <h1 className="text-2xl bg-black text-white px-6 py-2 flex justify-center rounded-md w-11/12 2xl:w-8/12 2xl:text-4xl">
                Great League
            </h1>
            </Link>
            <Link to="/BattleDex/Ranking/Ultra_League" className="flex flex-col items-center justify-center gap-4 backdrop-blur-sm  rounded-lg aspect-square shadow-xl">
                <img src={ultraball} alt="UltraBall Pokeball" className="min-w-0 lg:w-3/5 2xl:w-2/5 transition-all ease-in hover:w-3/5 hover:-translate-y-20 hover:drop-shadow-ultra " />
            <h1 className="text-2xl bg-black text-white px-6 py-2 flex justify-center rounded-md w-11/12 2xl:w-8/12 2xl:text-4xl">
                Ultra League
            </h1>
            </Link>
            <Link to="/BattleDex/Ranking/Master_League" className="flex flex-col items-center justify-center gap-4 backdrop-blur-sm  rounded-lg aspect-square shadow-xl ">
                <img src={masterball} alt="MasterBall Pokeball" className="min-w-0  lg:w-3/5 2xl:w-2/5 transition-all ease-in  hover:w-3/5 hover:-translate-y-20 hover:drop-shadow-master  " />
            <h1 className="text-2xl bg-black text-white px-6 py-2 flex justify-center rounded-md w-11/12 2xl:w-8/12 2xl:text-4xl  ">
                Master League
            </h1>
            </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
