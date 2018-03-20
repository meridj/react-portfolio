import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Work from './containers/Work';
import Contact from './containers/Contact';
import Loading from './containers/Loading';

// Components
import SnowStorm from 'react-snowstorm';

// Styles
import './styles/normalize.css';
import './styles/index.css';

/**
 *
 * State Full Container: App
 * Usage : render App container
 * @param props => none
 *
 */
class App extends Component {
  state = {
    loading: false
  };

  /*componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 4500);
  }*/

  render() {
    return (
      <div>
        <SnowStorm usePositionFixed />
        {this.state.loading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/works" component={Work} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
