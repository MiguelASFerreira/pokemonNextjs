import React from 'react'
import './PokemonType.css'


const PokemonType = ({name, tipo}: any) => {
    

  return (
    <div className='tipos' style={{backgroundColor: tipo}}>
        <p className='type'>{name.toUpperCase()}</p>
    </div>
  )
}

export default PokemonType