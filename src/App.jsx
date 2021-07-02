import React from "react";
import { Card } from "./components/Card";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(
            (data) => {
              this.setState({
                isLoaded: true,
                items: data.results
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Загрузка...</div>;
    }
      return (
          <section className='users'>
            {items.map((item, id) =>  <Card key={id} item={item} />)}
          </section>
      );
    }
}

export default App;