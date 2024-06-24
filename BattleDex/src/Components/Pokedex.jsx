import React ,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import Grid from './Grid'
import { pokedex_data } from './GetData'
import { IoGridOutline } from "react-icons/io5";
import { FaLetterboxd } from "react-icons/fa6";
import Loading from './Loading';




export default function Pokedex() { 
    const [api_data, setData] = useState([]); 
    const [loader, setLoader] = useState(true);
    
    async function getData(){
        let response = await pokedex_data();
        setData(response.data.results);
    }
    useEffect(() =>{
        getData();  
    },[]);
    let id= 0;

    const [query, setQuery] = useState("");

    const data = api_data.filter(function(items){
        let search = query.toLowerCase();
        return items.name.includes(search);
    })

    function handleQuery(e){
        setQuery(e.target.value);
    }
    function removeLoader() {
      setLoader(false);
    }
    setTimeout(removeLoader,10000);


  return (
    <div className='relative z-10 gap-4 flex flex-col h-screen overflow-hidden ' >
      {loader && <Loading/>}
      <Navbar/>
      <div className="flex flex-col px-4  py-2 gap-4 h-full justify-start lg:gap-6  ">
        <input onChange={handleQuery} value={query} type="search"name="" id="" className=" px-8 py-2 rounded-lg  md:w-1/2 self-center w-11/12 " placeholder='Search' />
        <div className="hidden">
            <button className=" text-white "><IoGridOutline /></button>
            <button className="text-white"><FaLetterboxd /></button>
        </div>
        <div className="bg-gray-100  grid grid-cols-2 p-4 self-center content-start lg:w-10/12  gap-2 rounded-xl h-4/6  lg:h-[73%] 2xl:h-[80%] overflow-y-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-9 ">
            {data.map(function(item){
                return (
                <Grid
                key={item.name}
                name={item.name}
                url={item.url}
                />
            );
            }
        )}
        </div>
      </div>
    </div>
  )
}
