import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Pokemon.css'

const Pokemon = ({ endpoint }) => {

    const [pokemon, setPokemon] = useState(null)


    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(endpoint)
                setPokemon(data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData();
    },[endpoint])

    return (
        <div className="pkm-card">
            {pokemon &&
            <>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={`Sprite of ${pokemon.name}`}/>
                <p><strong>Moves:</strong> {pokemon.moves.length}</p>
                <p><strong>Weight:</strong> {pokemon.weight}</p>
                <p><strong>Abilities:</strong></p>
                <ul>
                    {pokemon.abilities.map((uniqueAbility) => { return (
                        <li>{uniqueAbility.ability.name}</li>
                    )})}
                </ul>
            </>}
        </div>
    );
};

export default Pokemon;