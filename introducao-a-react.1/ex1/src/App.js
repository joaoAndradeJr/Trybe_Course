import React from 'react';

const task = () => {
  return (
    ['Terminar projeto shopping cart', 'iniciar projeto jest', 'terminar projeto jest', 'iniciar projeto react', 'terminar projeto react']
  );
}

class App extends React.Component {
  render() {
    return (
      <section>
        <li>{task().map(item => <h3>{item}</h3>) }</li>
      </section>
    );
  }
}

export default App;