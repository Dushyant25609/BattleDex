import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router'
import { get_pokemon_data ,Great_League_Data,Ultra_League_Data,Master_League_Data } from './GetData';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";


export default function Pokemon_details() {

    const name = useParams().name;
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const [data,setData] = useState();
    const [great_data, setG_data ] = useState([]);
    const [ultra_data, setU_data] = useState([]);
    const [master_data, setM_data ] = useState([]);

    async function get_data(){
        let res = await get_pokemon_data(name);
        setData(res);
    }
    useEffect(()=>{
        get_data();
        setG_data(Great_League_Data());
        setU_data(Ultra_League_Data());
        setM_data(Master_League_Data());
    },[])

    if(!data){
        return <Loading/>
    }

    let type_1 = data.types['0'] ? data.types['0'].type.name : false;
    let type_2 = data.types['1'] ? data.types['1'].type.name : false;

    
    function goBack() {
        navigate(-1); 
    }
    
    function removeLoader() {
      setLoader(false);
    }
    setTimeout(removeLoader,2000);

  return (
    <div className='relative md:h-screen' >
    {loader && <Loading/>}
      <Navbar/>
      <div className=" px-2 flex flex-col justify-center items-start h-full  py-4 md:justify-center md:items-center md:h-5/6 ">
        <div className= "lg:bg-gray-200 relative backdrop-blur-xl drop-shadow-xl  px-3 py-3 flex flex-col  items-center rounded-xl    gap-4 md:w-11/12 lg:flex-row lg:items-stretch   ">
        <button 
            onClick={goBack} className="absolute -top-1 text-lg  self-center mt-4 px-4 py-4 left-8 md:left-32 lg:left-4 md:text-2xl lg:text-4xl ">
            <MdOutlineArrowBackIos />
        </button>
            <img src={data.sprites.other["official-artwork"].front_default} alt={data.name +" Pokemon"} className='bg-white rounded-md shadow-lg w-11/12 md:w-2/3 lg:w-1/2' />
            <div className="flex flex-col items-center gap-y-2  w-full md:w-2/3  md:justify-evenly md:bg-white rounded-lg px-2 py-2">
                <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-7xl xl:text-8xl 2xl:text-9xl bg-white md:bg-transparent md:shadow-none   px-4 py-2 rounded-lg shadow-xl font-heading_2">{data.name}</h1>
                <div className="flex items-center self-center gap-4">
                    {type_1 && <div className="bg-white md:bg-transparent md:shadow-none md:border-2 md:border-black lg:py-1  px-4 rounded-lg shadow-lg ">{type_1 && <p>{type_1}</p>}</div>}
                    {type_2 && <div className="bg-white md:bg-transparent md:shadow-none md:border-2 md:border-black lg:py-1  px-4 rounded-lg shadow-lg ">{type_2 && <p>{type_2}</p>}</div>}
                </div>
                </div>
                <div className="mt-2 bg-white md:bg-black  p-2 rounded-lg shadow-lg w-11/12 md:w-full md:shadow-none ">
                    <div className="grid grid-cols-7 text-sm gap-x-2 md:text-xl xl:text-2xl 2xl:text-4xl lg:py-4 md:px-2 md:text-white ">
                        <p className="justify-self-center font-semibold">Rank</p>
                        <p className="col-span-2 font-semibold">Fast</p>
                        <p className="col-span-2 font-semibold">Charged 1</p>
                        <p className="col-span-2 font-semibold">Charged 2</p>
                    </div>
                    {
                        great_data.map(function(item){
                            let p_name = item.Pokemon.toLowerCase();
                            if(p_name==data.name){
                                return <div key={item.Rank} className="bg-blue-200 grid grid-cols-7 text-xs md:text-base xl:text-xl 2xl:text-2xl items-center px-1 py-3 gap-x-2">
                                    <p  className="justify-self-center">{item.Rank}</p>
                                    <p  className="col-span-2 ">{item["Fast Move"]}</p>
                                    <p  className="col-span-2">{item["Charged Move 1"]}</p>
                                    <p  className="col-span-2">{item["Charged Move 2"]||"hi"}</p>
                                </div>
                            }
                        })
                    }
                    {
                        ultra_data.map(function(item){
                            let p_name = item.Pokemon.toLowerCase();
                            if(p_name==data.name){
                                return <div key={item.Rank} className="bg-yellow-100 grid grid-cols-7 text-xs px-1 md:text-base xl:text-xl 2xl:text-2xl items-center py-3 gap-x-2">
                                    <p  className="justify-self-center">{item.Rank}</p>
                                    <p  className="col-span-2">{item["Fast Move"]}</p>
                                    <p  className="col-span-2">{item["Charged Move 1"]}</p>
                                    <p  className="col-span-2">{item["Charged Move 2"]||"None"}</p>
                                </div>
                            }
                        })
                    }
                    {
                        master_data.map(function(item){
                            let p_name = item.Pokemon.toLowerCase();
                            if(p_name==data.name){
                                return <div key={item.Rank} className="bg-purple-300  grid grid-cols-7 text-xs px-1 md:text-base xl:text-xl 2xl:text-2xl  items-center py-3 gap-x-2">
                                    <p  className="justify-self-center">{item.Rank}</p>
                                    <p  className="col-span-2">{item["Fast Move"]}</p>
                                    <p  className="col-span-2">{item["Charged Move 1"]}</p>
                                    <p  className="col-span-2">{item["Charged Move 2"]||"None"}</p>
                                </div>
                            }
                        })
                    }
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}
