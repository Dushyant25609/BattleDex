import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import { get_pokemon_data, Great_League_Data, Ultra_League_Data, Master_League_Data } from './GetData';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Pokemon_details({ giveType }) {
    const name = useParams().name;
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [great_data, setG_data] = useState([]);
    const [ultra_data, setU_data] = useState([]);
    const [master_data, setM_data] = useState([]);

    async function get_data() {
        let res = await get_pokemon_data(name);
        setData(res);
    }

    useEffect(() => {
        get_data();
        setG_data(Great_League_Data());
        setU_data(Ultra_League_Data());
        setM_data(Master_League_Data());
    }, []);

    if (!data) {
        return <Loading />;
    }

    let type_1 = data.types['0'] ? data.types['0'].type.name : false;
    let type_2 = data.types['1'] ? data.types['1'].type.name : false;

    const bgClasses = {
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
    };

    giveType(type_1);

    function goBack() {
        navigate(-1);
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
        exit: { opacity: 0, transition: { duration: 1.5} },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    };

    const imgVariant = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    }

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
                        alt={data.name + " Pokemon"}
                        className="w-11/12 md:w-1/3 relative z-20 lg:w-1/2"
                        variants={imgVariant}
                    />
                    <motion.div className="flex flex-col items-center gap-y-2 w-full md:w-2/3 md:justify-evenly rounded-lg px-2 py-2" variants={itemVariants}>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-Max px-4 py-2 font-bold text-stroke-1 xl:text-stroke-3 text-white font-heading_2">{data.name.toUpperCase()}</h1>
                            <div className="flex items-center self-center gap-4">
                                {type_1 && (
                                    <div className={"lg:py-2 px-4 xl:text-5xl md:text-xl lg:text-2xl text-stroke-1 border-2 xl:text-stroke-2 lg:border-4 border-black rounded-full text-white font-heading_2 " + bgClasses[type_1]}>
                                        <p>{type_1.toUpperCase()}</p>
                                    </div>
                                )}
                                {type_2 && (
                                    <div className={"lg:py-2 px-4 xl:text-5xl md:text-xl lg:text-2xl text-stroke-1 border-2 xl:text-stroke-2 lg:border-4 border-black rounded-full text-white font-heading_2 " + bgClasses[type_2]}>
                                        <p>{type_2.toUpperCase()}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-2p-2 flex flex-col gap-4 rounded-lg w-9/12 md:w-9/12 md:shadow-none">
                            {great_data.map((item) => {
                                let p_name = item.Pokemon.toLowerCase();
                                if (p_name === data.name) {
                                    return (
                                        <motion.div
                                            key={item.Rank}
                                            className="bg-blue-200 relative z-20 rounded-md grid grid-cols-7 text-xs md:text-base xl:text-xl 2xl:text-2xl items-center px-1 py-3 gap-x-2"
                                            variants={itemVariants}
                                        >
                                            <p className="justify-self-center">{item.Rank}</p>
                                            <p className="col-span-2">{item["Fast Move"]}</p>
                                            <p className="col-span-2">{item["Charged Move 1"]}</p>
                                            <p className="col-span-2">{item["Charged Move 2"] || "hi"}</p>
                                        </motion.div>
                                    );
                                }
                                return null;
                            })}
                            {ultra_data.map((item) => {
                                let p_name = item.Pokemon.toLowerCase();
                                if (p_name === data.name) {
                                    return (
                                        <motion.div
                                            key={item.Rank}
                                            className="bg-yellow-100 relative z-20 rounded-md grid grid-cols-7 text-xs px-1 md:text-base xl:text-xl 2xl:text-2xl items-center py-3 gap-x-2"
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
                            })}
                            {master_data.map((item) => {
                                let p_name = item.Pokemon.toLowerCase();
                                if (p_name === data.name) {
                                    return (
                                        <motion.div
                                            key={item.Rank}
                                            className="bg-purple-300 relative z-20 rounded-md grid grid-cols-7 text-xs px-1 md:text-base xl:text-xl 2xl:text-2xl items-center py-3 gap-x-2"
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
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
