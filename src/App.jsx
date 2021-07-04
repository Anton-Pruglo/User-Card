import React from 'react';
import { Card } from './components/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      items: [],
    };
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          items: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    const { error, loading, items } = this.state;
    console.count('RENDER');
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    }
    if (loading) {
      return <div>Загрузка...</div>;
    }
    return (
      <section className="users">
        {items.map((item) => <Card key={`${item.email} ${item.id.value}`} item={item} />)}
      </section>
    );
  }
}

export default App;
