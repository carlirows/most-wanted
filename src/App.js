import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list.component'
import {SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
    //cuando no uso arrow func para los metodos debo bindear el this
    //this.handleChange = this.handleChange.bind(this)
  }
//cuando el componente es montado en el DOM,
//antes de renderizarse el coponente hace un llamado a una api
//la respuesta de la api es guardada como el estado del componente
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange= (e) => {
    this.setState({searchField: e.target.value})
  }
  
  render(){
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return (
        <div className="App">
          <h1>Most Wanted Monsters</h1>
          <SearchBox 
            placeholder='Search Monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />         
        </div>
      );
    }  
}



export default App;


