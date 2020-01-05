import React from 'react';
import './Main.css';
import Cityes from './Cityes';

const cityList = Cityes.data;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', cityes: [] };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  filter = (city) => {
    if (this.state.value.length < 3) { return true; }
    const len = this.state.value.length;
    if (city.slice(0, len).toLowerCase() === this.state.value.toLowerCase()) { return true; }
    return false;
  };

  cityAdd = (city) => {
    if (this.state.cityes.includes(city)) { return; }
    const newCityList = [...this.state.cityes, city].sort();
    this.setState({ value: '', cityes: newCityList });
    localStorage.setItem('cityes', JSON.stringify(newCityList));
  };

  cityDelete = (city) => {
    const newCityList = [...this.state.cityes.filter(element => element !== city)];
    this.setState({ cityes: newCityList });
    localStorage.setItem('cityes', JSON.stringify(newCityList));
  };

  componentDidMount() {
    if (this.state.cityes.length > 0) { return; }
    const cityesFromStorage = JSON.parse(localStorage.cityes);
    this.setState({ 'cityes': cityesFromStorage });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='city-list'>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button className='button'>Поиск</button>
            {
              cityList
                .filter(this.filter)
                .map(element => (
                <p
                  className='list-element'
                  onClick={() => this.cityAdd(element)}
                >
                  {element}
                  <span className='plus'>&nbsp;+</span>
                </p>
              ))
            }
          </div>
          <div className='choice'>
            <p><b>Выбрано:</b></p>
            {this.state.cityes.map(element => (
              <p className='choice-list-element'
              >
                {element}
                <span className='x'
                      onClick={() => this.cityDelete(element)}
                >&nbsp;&#10006;</span>
              </p>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Main;