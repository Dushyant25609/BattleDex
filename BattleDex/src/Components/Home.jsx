import React,{useState,useEffect}  from 'react'
import pokeball from "/Static/pokeball.webp";
import { Link } from 'react-router-dom';
import Loading from './Loading';


function Home() {

    const [loader, setLoader] = useState(true);

  
    function removeLoader() {
      setLoader(false);
    }
    setTimeout(removeLoader,1000);

  return  (
    <>
    {loader && <Loading/>}
    <div className='px-4 h-screen w-screen bg-gradient-to-br from-red-800 from-10% via-primary-base via-50% to-gray-200 to-50% relative z-10 '>
      <div className="px-2 py-8 flex flex-col justify-between  h-full gap-4 xl:gap-8">
        <div className="flex flex-col h-full justify-between relative py-6">
            <h1 className="font-pokemon text-logo_primary text-stroke-2 text-stroke-logo_secondary text-5xl md:text-8xl md:text-stroke-3  xl:text-9xl 2xl:text-10xl ">
                B<span>a</span>ttléDéx
            </h1>
            <img src={pokeball} alt="Pokeball" className="min-w-0 w-2/12 self-center absolute inset-y-0 top-20 md:w-2/12 lg:w-1/12  xl:top-25 " />
            
            <h1 className="text-xs self-end flex wrap w-3/5 md:w-2/5 lg:text-lg xl:text-3xl xl:w-2/5 2xl:text-4xl">
            Find the best Pokémon moves and counter Pokémon for your Pokémon  Go team
            </h1>
        </div>
        <div className="flex flex-col gap-2 items-center lg:flex-row lg:self-center w-full justify-center xl:gap-4">
            <Link to="/BattleDex/Ranking" className="px-4 py-2 w-2/3 lg:w-1/3 bg-primary-lite hover:bg-primary-base text-white rounded-md shadow-xl xl:text-2xl 2xl:text-3xl flex justify-center">
            Ranking
            </Link>
            <Link to="/BattleDex/Pokedex" className="px-4 py-2 w-2/3 lg:w-1/3 bg-white hover:bg-gray-50 rounded-md shadow-lg xl:text-2xl 2xl:text-3xl flex justify-center ">
            Pokedex
            </Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home;