import React, {Component} from 'react';
import './App.scss';
import Car from './Car/Car'

// function App() {
//   const divStyle = {
//     textAlign: 'center'
//   }
//   return (
//     <div style={divStyle}>
//       <h1>Hello world!</h1>
//       <Car name={'Ford Mustang'} year={2015} />
//       <Car name={'Ford Focus'} year={2017} />
//       <Car name={'Audi A8'} year={2017} />
//     </div>
//   );
// }

class App extends Component {

  state = {
    cars: [
      {name: 'Ford Mustang', year: 2015},
      {name: 'Ford Focus', year: 2017},
      {name: 'Audi A8', year: 2018},
    ],
    pagetitle: 'React components',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index){
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({cars});
  }

  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({cars});
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
              return (
                <Car 
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeName={event => this.onChangeName(event.target.value, index)}
                  onDelete={this.deleteHandler.bind(this, index)} 
                />
              )
            })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pagetitle}</h1>

        <button 
          className={'AppButtons'}
          onClick={this.toggleCarsHandler}
        >Toggle cars
        </button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
        
      </div>
    );
  }
}

export default App;
