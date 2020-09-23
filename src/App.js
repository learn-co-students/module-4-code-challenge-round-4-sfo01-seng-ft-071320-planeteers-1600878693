import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    selectedOption: null
  }

  
  fetchPlaneteers = () => {
    fetch('http://localhost:4000/planeteers')
    .then(res => res.json())
    .then(planeteers => this.setState({planeteers: planeteers}))
  }

  componentDidMount() {
    this.fetchPlaneteers()
  }

  updateSelectedOption = (e) => {
   this.setState({selectedOption: e.target.value})
    console.log(e.target.value)
  }

  filterPlaneteers = () =>{
    if(this.state.selectedOption === this.state.planeteers.name){
      return this.searchByName()
    
    }else if(this.state.selectedOption === this.state.planeteers.bio){
      return this.searchByBio()
    }
    

  }
  
  searchByName = (name) => {
    console.log(name)
    name.preventDefault()
   return this.props.planeteers.filter(planeteer => {
      if(planeteer.name === name){
        return planeteer
      }
    })
  }

  searchByBio = (bio) => {
    console.log(bio)
    bio.preventDefault()
   return this.props.planeteers.filter(planeteer => {
      if(planeteer.bio === bio){
        return planeteer
      }
    })
  }

  filterByName = (name) => {
    this.setState(prevState => ({planeteers: [...prevState.planeteers, name] }))
  }

  render(){
    // console.log(this.state.planeteers)
    return (
      <div>
        <Header />
        <SearchBar 
        updateSelectedOption={this.updateSelectedOption}
        selectedOption={this.state.selectedOption}
        />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers}/>
      </div>
    );
  }

}

export default App;
