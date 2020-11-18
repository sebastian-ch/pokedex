import React from 'react'




export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            pokemons: [],
            pokemonDetails: []
        }
        
    }

    componentDidMount() {
        
        this.getPokeDetails()
        
    }



    getPokeDetails() {

        let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data) {
                this.setState({pokemons: data.results}, () =>{

                    this.state.pokemons.map(pokemon => {
                        fetch(pokemon.url)
                        .then(response => response.json())
                        .then(data => {
                            if (data) {
                                var temp = this.state.pokemonDetails
                                temp.push(data)
                                this.setState({pokemonDetails: temp})
                            }
                        })
                        .catch(console.log)
                    })
                })
            }
        })
        .catch(console.log)

    }

 
    

    
    


    render() {

        const {pokemonDetails} = this.state;

        const tRendered = pokemonDetails
            .sort((a,b) => a.id > b.id ? 1:-1) //so they load in order
            .map((pokemon, index) => {
            return (
                <div className='box' key={pokemon.id}>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default}></img>
                </div>
            )
        })



        return ( 

        <div className='main'>
            <div className='pokes'>
            {tRendered}
            </div>
        </div>
           
        )
    }
}