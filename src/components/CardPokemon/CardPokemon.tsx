import React from 'react'
import './CardPokemon.css'
import Image from 'next/image'
import PokemonType from '../PokemonType/PokemonType'
import Link from 'next/link'

const CardPokemon = ({pokemon}: any) => {
  function cardColor(cardTipo: string) {
        switch (cardTipo) {
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
  return (
    <Link  href={`/about/${pokemon.id}`} style={{backgroundColor: cardColor(pokemon.types[0].type.name)}} className='card'>
        <div >
            <h1>#{pokemon.id}</h1>
            <p className='namePokemon'>{pokemon.name.toUpperCase()}</p>
        </div>
        <div>
          {pokemon.sprites.versions['generation-v']['black-white'].front_default && (<Image 
                src={pokemon.sprites.versions['generation-v']['black-white'].front_default} 
                alt={pokemon.name} 
                width={100} 
                height={100}
            />)}
        
            
        </div>
    </Link>
  )
}

export default CardPokemon