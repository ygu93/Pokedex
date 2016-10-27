import React from 'react';

// import PokemonDetailItem from './pokemon_detail_item';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const handleClick = url => e => this.props.router.push(url);
    const pokemon = this.props.pokemon;
    let moves = (pokemon.moves ? pokemon.moves.join(", ") : "" );
    let items = (pokemon.items ? pokemon.items : [] );
      return(
        <div>
          <ul>
            <img src={pokemon.image_url}/>
            <li><h2>{pokemon.name}</h2></li>
            <li>Type: {pokemon.poke_type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Moves: {moves}</li>
            <h2>Items:</h2>
            <ul className="item-list">
            {items.map((item, idx) => (
              <li key={item.id} ><img onClick={handleClick(`/pokemon/${pokemon.id}/item/${idx}`)} src={item.image_url}/></li>
            ))}
            </ul>
          </ul>
          <div>
            {this.props.children}
          </div>
        </div>
      );
  }
}

export default PokemonDetail;
