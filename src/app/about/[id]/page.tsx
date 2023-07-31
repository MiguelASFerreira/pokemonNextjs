'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import api from '@/services/api'
import './about.css'
import Image from 'next/image'
import PokemonType from '@/components/PokemonType/PokemonType'
import { Pokemon } from '@/types/Pokemon'
import PokemonStatus from '@/components/PokemonStatus/PokemonStatus'


const About = () => {
  const router = useParams()
  const { id } = router
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  function typeColor(tipo: string) {
    switch (tipo) {
      case 'grass':
        return '#78C850';
      case 'fire':
        return '#F08030'; 
      case 'water':
        return '#6890F0'; 
      case 'electric':
        return '#F8D030'; 
      case 'psychic':
        return '#F85888'; 
      case 'flying':
        return '#A890F0'; 
      case 'poison':
        return '#A040A0'; 
      case 'ground':
        return '#E0C068'; 
      case 'rock':
        return '#B8A038'; 
      case 'ice':
        return '#98D8D8'; 
      case 'bug':
        return '#A8B820'; 
      case 'normal':
        return '#A8A878'; 
      case 'fighting':
        return '#C03028'; 
      case 'ghost':
        return '#705898'; 
      case 'steel':
        return '#B8B8D0'; 
      case 'dragon':
        return '#7038F8'; 
      case 'fairy':
        return '#EE99AC'; 
      case 'dark':
        return '#705848'; 
      default:
        return '#68A090'; 
    }
  }    


  useEffect(() => {
    async function getDetailsPokemon() {
      try {
        const response = await api.get(`/pokemon/${id}`)
        const resul = response.data
        setPokemon(resul)
      } catch (error) {
        console.log(error)
      }
    }
    getDetailsPokemon()
  },[id])

  return (
    <div className='about'>
      {pokemon && 
        <>
          <div className='pokedex'>
            <div className='pokemonDados'>
              <h3>Dados do Pokemon #{pokemon.id}</h3>
              <Image 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={200}
                height={150}
              />
              <h3>{pokemon.name.toUpperCase()}</h3>
              <h2>Tipos:</h2>
              {pokemon.types.map((pokemonType: any) => {
                return (
                  <PokemonType key={pokemonType.type.name} name={pokemonType.type.name} tipo={typeColor(pokemonType.type.name)} />
                )
              })}
              <h2>Status:</h2>
              {pokemon.stats.map((pokemonStatus: any) => {
                console.log(pokemonStatus)
                return (
                  <PokemonStatus key={pokemonStatus.stat.name} status={pokemonStatus} />
                )
              })}
            </div>
            <div className='pokemonDadosShiny'>
              <h2>Variantes:</h2>
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={200}
                  height={150}
                />
                <h3>{pokemon.name.toUpperCase()}<br /> Shiny</h3>
                <h2>Tipos:</h2>
              {pokemon.types.map((pokemonType: any) => {
                return (
                  <PokemonType key={pokemonType.type.name} name={pokemonType.type.name} tipo={typeColor(pokemonType.type.name)} />
                )
              })}
              <h2>Status:</h2>
              {pokemon.stats.map((pokemonStatus: any) => {
                console.log(pokemonStatus)
                return (
                  <PokemonStatus key={pokemonStatus.stat.name} status={pokemonStatus} />
                )
              })}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default About