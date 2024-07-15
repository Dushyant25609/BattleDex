import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Grid({ name, url }) {
  const [isInView, setIsInView] = useState(false);
  let id = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  let lowResImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`; // Low-res image URL

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    const element = document.querySelector(`#pokemon-${id}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <Link to={`/BattleDex/Details/${name}`} className='flex flex-col items-center bg-white hover:bg-gray-50 rounded-lg shadow-lg' id={`pokemon-${id}`}>
      <img
        src={isInView ? img : lowResImg}
        alt={`${name} image`}
        loading="lazy"
        className="w-2/3"
      />
      <h1 className="text-lg font-semibold lg:text-xl">{name}</h1>
    </Link>
  );
}
