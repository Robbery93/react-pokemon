import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/pokemon/Pokemon";
import Button from "./components/button/Button";
import logo from "./assets/logo.png"

function App() {

    const [pokemons, setPokemons] = useState([])
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon')

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const { data } = await axios.get(endpoint)
                console.log(data.results)
                setPokemons(data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchPokemon();
    }, [endpoint])

  return (
      <>
          <div className='top-bar'>
              <img src={logo} alt="Pokemon logo"/>
              <section>
                  <Button
                      clickHandler={() => setEndpoint(pokemons.previous)}
                      disabled={!pokemons.previous}
                  >
                      Vorige
                  </Button>
                  <Button
                      clickHandler={() => setEndpoint(pokemons.next)}
                      disabled={!pokemons.next}
                  >
                      Volgende
                  </Button>
              </section>
          </div>
          <div className="pkm-grid">
          {pokemons.results && pokemons.results.map((pokemon) => {
              return <Pokemon key={pokemon.name} endpoint={pokemon.url}/>
          })}
          </div>
      </>
  );
}

export default App;
