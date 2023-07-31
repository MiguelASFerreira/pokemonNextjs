'use client'
import React, { useEffect, useState } from 'react'
import './Home.css'
import api from '@/services/api'
import CardPokemon from '../CardPokemon/CardPokemon'
import Loading from '../Loading/Loading'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState<any>([])

  useEffect(() => {
    async function getPokemons() {
      try {
        setLoading(true)
        const response = await api.get('/pokemon?limit=721')
        const { results } = response.data
        const payloadsPokemon = await Promise.all(
          results.map(async (pokemon: any) => {
            const resul = await getMoreInfoAboutPokemonsByUrl(pokemon.url)

            return resul
          })
        )

        setPokemons(payloadsPokemon)
        setLoading(false)
      } catch (error) {
        console.log("OOPS!")
      } finally {
        setLoading(false)
      }
    }
    getPokemons()
  },[])

  async function getMoreInfoAboutPokemonsByUrl(url: string) {
    const response = await api.get(url);

    const resul = response.data
    return resul
  }

  return (
    <div className='home'>
      {loading && <Loading />}
      {pokemons.map((pokemon: any) => {
        return (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        )
      })}
    </div>
  )
}

export default Home