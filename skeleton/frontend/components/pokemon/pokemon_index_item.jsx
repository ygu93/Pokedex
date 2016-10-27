import React from 'react';
import { withRouter } from 'react-router';

class PokemonIndexItem extends React.Component{
  render(){
    const handleClick = url => e => this.props.router.push(url);
    return(
      <li
        className="pokemon-index-item"
        onClick={handleClick(`/pokemon/${this.props.pokemon.id}`)}>
        <h2>{this.props.pokemon.name} <img src={this.props.pokemon.image_url} /></h2> 
      </li>
    );
  }
}

export default withRouter(PokemonIndexItem);
