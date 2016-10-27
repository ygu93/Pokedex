import React from 'react';

import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='pokedex'>
        <ul>
          {this.props.pokemon.map( poke =>
            <PokemonIndexItem key={poke.id} pokemon={poke} />
          )}
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PokemonIndex;
