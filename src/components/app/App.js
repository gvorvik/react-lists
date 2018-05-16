import React, { Component } from 'react';

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
    };
  }

  addStar = (event) => {
    event.preventDefault();
    this.setState({ starList: [...this.state.starList, this.state.newStar] });
    console.log(this.state.newStar);
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

  // starNameChange = (event) => {
  //   this.setState({
  //     newStar: {
  //       ...this.state.newStar,
  //       name: event.target.value,
  //     }
  //   });
  // }

  // diameterChange = (event) => {
  //   this.setState({
  //     newStar: {
  //       ...this.state.newStar,
  //       diameter: event.target.value,
  //     }
  //   });
  // }


  render() {

    //For putting an array on the dom
    let starListItemArray = this.state.starList.map(starName => <li key={starName.name}>{starName.name} is {starName.diameter} in diameter</li>);



    return (
      <div>
        <form onSubmit={this.addStar}>
          <input value={this.state.newStar.name} onChange={this.handleChange('name')} type="text" placeholder="Star Name" />
          <input value={this.state.newStar.diameter} onChange={this.handleChange('diameter')} type="text" placeholder="Diameter" />
          <input type="submit" value="Submit Star" />
        </form>
        <ul>
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
