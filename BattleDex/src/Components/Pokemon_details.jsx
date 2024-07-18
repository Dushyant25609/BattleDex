import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import { get_pokemon_data, Great_League_Data, Ultra_League_Data, Master_League_Data } from './GetData';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Pokemon_details({ giveType }) {
    const { name } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [greatData, setGreatData] = useState([]);
    const [ultraData, setUltraData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    const fetchData = useCallback(async () => {
        const res = await get_pokemon_data(name);
        setData(res);
    }, [name]);

    useEffect(() => {
        fetchData();
        setGreatData(Great_League_Data());
        setUltraData(Ultra_League_Data());
        setMasterData(Master_League_Data());
    }, [fetchData]);

    const type1 = data?.types?.[0]?.type?.name || '';
    const type2 = data?.types?.[1]?.type?.name || '';

    const bgClasses = useMemo(() => ({
        normal: "bg-normal-Dark",
        fire: "bg-fire-Dark",
        water: "bg-water-Dark",
        grass: "bg-grass-Dark",
        flying: "bg-flying-Lite",
        fighting: "bg-fighting-Lite",
        poison: "bg-poison-Dark",
        electric: "bg-electric-Dark",
        ground: "bg-ground-Dark",
        rock: "bg-rock-Dark",
        psychic: "bg-psychic-Dark",
        ice: "bg-ice-Lite",
        bug: "bg-bug-Dark",
        ghost: "bg-ghost-Dark",
        steel: "bg-steel-Lite",
        dragon: "bg-dragon-Dark",
        dark: "bg-dark-Dark",
        fairy: "bg-fairy-Lite",
    }), []);

    useEffect(() => {
        giveType(type1);
    }, [type1, giveType]);

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
        exit: { opacity: 0, transition: { duration: 1.5 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    };

    const imgVariant = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    if (!data) {
        return <Loading />;
    }

    const renderData = (leagueData, bgColor) => {
        return leagueData.map(item => {
            const pName = item.Pokemon.toLowerCase();
            if (pName === data.name.toLowerCase()) {
                return (
                    <motion.div
                        key={item.Rank}
                        className={`${bgColor} relative z-20 rounded-md grid grid-cols-7 text-xs md:text-base xl:text-xl 2xl:text-2xl items-center px-1 py-3 gap-x-2`}
                        variants={itemVariants}
                    >
                        <p className="justify-self-center">{item.Rank}</p>
                        <p className="col-span-2">{item["Fast Move"]}</p>
                        <p className="col-span-2">{item["Charged Move 1"]}</p>
                        <p className="col-span-2">{item["Charged Move 2"] || "None"}</p>
                    </motion.div>
                );
            }
            return null;
        });
    };

    return (
        <motion.div
            className="relative md:h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            <Navbar />
            <div className="px-2 flex flex-col justify-center items-start h-full py-4 md:justify-center md:items-center md:h-5/6">
                <div className="relative px-3 py-3 flex flex-col items-center gap-4 md:w-11/12 lg:flex-row lg:items-stretch">
                    <motion.button
                        onClick={goBack}
                        className="absolute -top-5 text-md self-center mt-4 left-8 md:left-32 lg:left-4 md:text-2xl lg:text-4xl"
                        variants={itemVariants}
                    >
                        <MdOutlineArrowBackIos />
                    </motion.button>
                    <motion.img
                        src={data.sprites.other["official-artwork"].front_default}
                        alt={`${data.name} Pokemon`}
                        className="w-7/12 md:w-1/3 relative z-20 lg:w-1/2"
                        variants={imgVariant}
                    />
                    <motion.div className="flex flex-col items-center gap-y-2 w-full md:w-2/3 md:justify-evenly rounded-lg px-2 py-2" variants={itemVariants}>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-Max px-4 py-2 font-bold text-stroke-1 xl:text-stroke-3 text-white font-heading_2">
                                {data.name.toUpperCase()}
                            </h1>
                            <div className="flex items-center self-center gap-4">
                                {type1 && (
                                    <div className={`lg:py-2 px-4 xl:text-5xl md:text-xl lg:text-2xl text-stroke-1 border-2 xl:text-stroke-2 lg:border-4 border-black rounded-full text-white font-heading_2 ${bgClasses[type1]}`}>
                                        <p>{type1.toUpperCase()}</p>
                                    </div>
                                )}
                                {type2 && (
                                    <div className={`lg:py-2 px-4 xl:text-5xl md:text-xl lg:text-2xl text-stroke-1 border-2 xl:text-stroke-2 lg:border-4 border-black rounded-full text-white font-heading_2 ${bgClasses[type2]}`}>
                                        <p>{type2.toUpperCase()}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 p-2 flex flex-col gap-4 rounded-lg w-9/12 md:w-9/12 md:shadow-none">
                        <div className='p-2 bg-black text-white  justify-items-center xl:justify-items-start md:font-semibold text-xs md:text-lg  xl:text-2xl grid grid-cols-7 rounded-lg'>
                            <p >Rank</p>
                            <p className='col-span-3 xl:col-span-2 xl:justify-self-start' >Fast Move</p>
                            <p className='col-span-3 xl:col-span-4' >Charged Move</p>
                        </div>
                            {renderData(greatData, 'bg-blue-200')}
                            {renderData(ultraData, 'bg-yellow-100')}
                            {renderData(masterData, 'bg-purple-300')}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
