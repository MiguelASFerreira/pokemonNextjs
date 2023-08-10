'use client'
import React, { useEffect, useState } from 'react'
import './Home.css'
import api from '@/services/api'
import CardPokemon from '../CardPokemon/CardPokemon'
import Loading from '../Loading/Loading'
import PokemonSearch from '../Search/Search'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState<any>([])
  const [next, setNext] = useState()
  const [previous, setPrevious] = useState()
  const [searchResult, setSearchResult] = useState<any>(null);

  const getPokemons = async (url: string) => {
    try {
      setLoading(true)
      const response = await api.get(url)
      const { results, next: nextUrl, previous: previousUrl } = response.data;
      const payloadsPokemon = await Promise.all(
        results.map(async (pokemon: any) => {
          const resul = await getMoreInfoAboutPokemonsByUrl(pokemon.url)

          return resul
        })
      )
      setPokemons(payloadsPokemon)
      setNext(nextUrl)
      setPrevious(previousUrl)
      setLoading(false)
    } catch (error) {
      console.log("OOPS!")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPokemons('/pokemon?limit=21')
  },[])

  async function getMoreInfoAboutPokemonsByUrl(url: string) {
    const response = await api.get(url);

    const resul = response.data
    return resul
  }

  const handleNextClick = () => {
    if (next) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
      getPokemons(next);
    }
  };
  
  const handlePreviousClick = () => {
    if (previous) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
      getPokemons(previous);
    }
  };


  return (
    <div className='principal'>
      {loading && <Loading />}
      <PokemonSearch setSearchResult={setSearchResult} />
      
      <div className="home">
        {searchResult ? (
          <CardPokemon key={searchResult.id} pokemon={searchResult} />
        ) : (
          pokemons.map((pokemon: any) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
      {searchResult ? <div></div> : <div className='pagination'>
        <button onClick={handlePreviousClick} disabled={!previous}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={!next}>
          Next
        </button>
      </div>}
    </div>
  )
}

export default Home