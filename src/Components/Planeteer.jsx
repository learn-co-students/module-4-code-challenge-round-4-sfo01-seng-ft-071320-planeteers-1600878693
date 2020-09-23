import React from 'react';

class Planeteer extends React.Component {

  state = {
    isQuote: true
  }

  handleBioClick = () => {
    console.log('it')
    this.setState({isQuote: !this.state.isQuote})
  }

  filterBioOrQuote = () => {
    
  }

  bioOrQuote = () =>{
    if(this.state.isQuote){
      return this.props.planeteer.bio
    }else{
      return this.props.planeteer.quote
    }
  } 

  fromUSA = () => {
    if(this.props.planeteer.fromUSA){
      return 'USA-based'
    }else{
      return 'Working overseas'
    }
  }


  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={"RENDER PERSON NAME"} className="card__image" onClick={this.handleBioClick} />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.bioOrQuote()}</p>
            {/* <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p> */}
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p><br></br>
              <p>{this.fromUSA()}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
