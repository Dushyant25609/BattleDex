import great_league from "../../public/Data/great-league_ranks.json"
import ultra_league from "../../public/Data/ultra-league_ranks.json"
import master_league from "../../public/Data/master-league_ranks.json"
import axios from "axios"

export function Great_League_Data(){
    let data = great_league;
    return data;
}

export function Ultra_League_Data(){
    let data = ultra_league;
    return data;
}

export function Master_League_Data(){
    let data = master_league;
    return data;
}        

export function pokedex_data() {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');      
}

export async function get_pokemon_data(name){
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+name);
    return response.data;
}