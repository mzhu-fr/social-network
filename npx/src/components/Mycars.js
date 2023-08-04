import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures : [
            {name : 'Ford', color : 'poop', year : 2020},
            {name : 'Toyota', color : 'kaki', year: 2054},
            {name : 'Suzuki', color : 'black', year: 2000}
        ]
    }

    addAge = () => {
        this.setState({
            
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                    
                <button onClick={this.addAge}>+10</button>

                <Car year={this.state.voitures[0].year} color={this.state.voitures[0].color} >{this.state.voitures[0].name}</Car>
                <Car year={this.state.voitures[1].year} color={this.state.voitures[1].color} >{this.state.voitures[1].name}</Car>
                <Car year={this.state.voitures[2].year} color={this.state.voitures[2].color} >{this.state.voitures[2].name}</Car>
            </div>
           
        )
    }
}

export default Mycars