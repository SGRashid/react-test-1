import React from "react";
import './Main.css';

const cityList = [
  "Абакан",
  "Артем",
  "Азов",
  "Москва",
  "Санкт-Петербург",
  "Екатеринбург",
  "Владивосток",
  "Березовск",
  "Тагил",
  "Каменск-Уральский",
  "Кушва",
  "Сабик",
  "Берлога",
  "Шаля",
  "Курган",
  "Нягань",
  "Саратов"
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  filter = city => {
    if (this.state.value === '') { return true; }
    const len = this.state.value.length;
    if (city.slice(0, len).toLowerCase() === this.state.value.toLowerCase()) { return true; }
    return false;
  };
  render() {
    return (
      <>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        {cityList
          .filter(this.filter)
          .map(element => <p>{element}</p>)}
      </>
    )
  }
}

export default Main;