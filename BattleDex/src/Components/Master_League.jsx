import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Table_row from './Table_row';
import { Link } from 'react-router-dom';
import greatball from "/Static/great_ball.webp";
import ultraball from "/Static/ultra_ball.webp";
import masterball from "/Static/MASTERBALL.webp";
import { Master_League_Data } from './GetData';
import { motion } from 'framer-motion';

export default function Master_League() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const value = Master_League_Data();
        setData(value);
    }, []);


    const newdata = data.filter(item => {
        const pokemon = item.Pokemon.toLowerCase();
        const search = query.toLowerCase();
        return pokemon.includes(search);
    });

    function handleSearch(e) {
        setQuery(e.target.value);
    }



    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <div className='relative z-10 h-screen'>
            <Navbar />
            <div className="flex flex-col px-3 py-3 gap-8 h-full lg:h-5/6">
                <input
                    type="search"
                    value={query}
                    onChange={handleSearch}
                    className="px-4 py-2 rounded-lg md:w-1/2 self-center w-11/12"
                    placeholder='Search'
                />
                <div className="flex items-center">
                    <Link to="/BattleDex/Ranking/Great_league" className='flex justify-center'>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            src={greatball}
                            alt="GreatBall pokeball"
                            className="min-w-0 w-3/5 md:w-1/3 lg:w-1/3 brightness-50 hover:brightness-75 hover:drop-shadow-great"
                        />
                    </Link>
                    <Link to="/BattleDex/Ranking/Ultra_league" className='flex justify-center'>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            src={ultraball}
                            alt="UltraBall pokeball"
                            className="min-w-0 w-3/5 md:w-1/3 lg:w-1/3 brightness-50 hover:brightness-75 hover:drop-shadow-ultra"
                        />
                    </Link>
                    <Link to="/BattleDex/Ranking/Master_league" className='flex justify-center'>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            src={masterball}
                            alt="MasterBall pokeball"
                            className="min-w-0 w-4/5 md:w-2/5 lg:w-2/5 brightness-150 drop-shadow-master"
                        />
                    </Link>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="self-center backdrop-blur-md px-2 py-2 bg-blue-100 rounded-lg h-3/6 lg:h-5/6 overflow-y-auto md:w-10/12"
                >
                    <div className="grid grid-cols-5 py-2 px-4 gap-3 text-base font-semibold md:text-xl lg:text-2xl">
                        <h1 className="justify-self-center">Rank</h1>
                        <h1 className="col-span-3">Pokemon</h1>
                        <h1 className="justify-self-center">Score</h1>
                    </div>
                    {newdata.map(item => (
                        <Table_row 
                            key={item.Rank} 
                            rank={item.Rank} 
                            pokemon={item.Pokemon} 
                            score={item.Score} 
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
