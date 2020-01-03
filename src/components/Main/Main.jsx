import React from "react";
import './Main.css';
import Cityes from './Cityes';

const cityList = Cityes.data;

// const cityList = [
//   "Абакан",
//   "Артем",
//   "Азов",
//   "Москва",
//   "Санкт-Петербург",
//   "Екатеринбург",
//   "Владивосток",
//   "Березовск",
//   "Тагил",
//   "Каменск-Уральский",
//   "Кушва",
//   "Сабик",
//   "Берлога",
//   "Шаля",
//   "Курган",
//   "Нягань",
//   "Саратов"
// ];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', cityes: []};
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  filter = city => {
    if (this.state.value.length < 3) { return true; }
    const len = this.state.value.length;
    if (city.slice(0, len).toLowerCase() === this.state.value.toLowerCase()) { return true; }
    return false;
  };
  cityAdd = city => {
    if (this.state.cityes.includes(city)) { return; }
    this.setState({value: '', cityes: [...this.state.cityes, city].sort()});
  };
  cityDelete = city => {
    this.setState({cityes: [...this.state.cityes.filter(element => element !== city)]});
  };
  // componentDidMount() {
  //   console.log(data);
  // }
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
            {this.state.cityes.map(element => (
              <p className='choice-list'
                onClick={() => this.cityDelete(element)}
              >
                {element}
              </p>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Main;