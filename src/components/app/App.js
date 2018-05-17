import React, { Component } from 'react';
import axios from 'axios';

//Local Imports
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar'
import StarForm from '../StarForm/starForm';
import StarList from '../StarList/StarList';
import PlanetList from '../PlanetList/planetList';

const emptyStar = {
  name: '',
  diameter: '',
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      newStar: emptyStar,

      starList: [
        {
          name: 'Kochab',
          diameter: '117 million km',
        },
        {
          name: 'Menkar',
          diameter: '45 million km',
        },
        {
          name: 'Hadar',
          diameter: '76 million km',
        },
      ],

      planetList: [],
    };
  }

  addStar = (event) => {
    //Prevents default action from a form submission
    event.preventDefault();
    this.setState({ starList: [...this.state.starList, this.state.newStar] });
    this.setState({ newStar: emptyStar });
  };

  handleChange = propertyName => event => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    });
  }

  //Equivalent of onReady()
  componentDidMount = () => {
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }

  getPlanets = (nextUrl) => {
    if (nextUrl) {
      axios({
        method: 'GET',
        url: nextUrl,
      })
        .then((response) => {
          console.log(response);
          this.setState({
            planetList: [
              ...this.state.planetList,
              ...response.data.results
            ]
          });
          console.log(this.state.planetList);
          this.getPlanets(response.data.next);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {

    //For putting an array on the dom
    // let starListItemArray = this.state.starList.map(starName => <li key={starName.name}>{starName.name} is {starName.diameter} in diameter</li>);

    return (
      <div>
        <Introduction />
        {/* props below */}
        <NewStar
          newStar={this.state.newStar}
        />
        <StarForm
          newStar={this.state.newStar}
          handleChangeForChild={this.handleChange}
          handleAddForChild={this.addStar}
        />
        <StarList
          starList={this.state.starList}
        />
        <PlanetList
          planetList={this.state.planetList}
        />
      </div>
    );
  }
}

export default App;
