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
import MouseFollower from './components/MouseFollower';

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
  constructor(props) {
    super(props);
    this.state = { pageY: 0, pageX: 0, loading: true };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 4500);
  }

  handleMouseMove(event) {
    this.setState({ pageX: event.pageX, pageY: event.pageY });
  }

  render() {
    return (
      <div onMouseMove={event => this.handleMouseMove(event)}>
        <SnowStorm usePositionFixed />
        <MouseFollower pageX={this.state.pageX} pageY={this.state.pageY} />
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
