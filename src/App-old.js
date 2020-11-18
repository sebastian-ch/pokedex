import React from 'react'
import Card from './Card'
import userData from './users.json'


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
                pokemons: {
                    n: [],
                    im: []
                },
                
            }
        
        this.getKanto = this.getKanto.bind(this);
        this.getPokeData = this.getPokeData.bind(this);
        
    }

    componentDidMount() {
        /*this.setState({
            name: userData.map(x => x.name),
            salary: userData.map(x => x.salary)
        }) */
        this.getKanto()
        
    }

    getKanto() {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(resp => resp.json())
            .then(data => {
                //console.log(data)
                this.getPokeData(data.results.map(x => x.url));
            
            } )
    }

    getPokeData(d) {

        

        d.forEach(url =>
           
            fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //console.log(data);
                this.setState({
                    //pokemons: data
                    pokemons: {
                        n: [...this.state.pokemons.n, data.name],
                        im: [...this.state.pokemons.im, data.sprites.front_default]
                }
                })

            })

        )
    }

    
    


    render() {

        var {n, im} = this.state.pokemons

        //console.log(n)
        
       // var image = this.state.imgs.map(i => <img key={i} src={i}></img>)
        //var displayName = this.state.names.map(e => <h3 key={e} >{e}</h3>)
       
        return ( 

        <div className='main'>
            
            <div className='pokes'>
                {n.map((i,index) =>{

                    return <Card key={index} name={i} image={im[index]}></Card>

                })}
                
            
            </div>
        </div>
                

                

           
        )
    }
}