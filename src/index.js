import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Work from './containers/Work';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';
import Loading from './containers/Loading';

// Components
import SnowStorm from 'react-snowstorm';
import MouseFollower from './components/MouseFollower';
import { Desktop } from './components/Responsive';

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
    this.state = { mousePosition: [0, 0], loading: true };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading() {
    this.setState({
      loading: false
    });
  }

  handleMouseMove(event) {
    const newMousePosition = [event.pageX, event.pageY];
    this.setState({ mousePosition: newMousePosition });
  }

  render() {
    return (
      <div onMouseMove={event => this.handleMouseMove(event)}>
        <SnowStorm usePositionFixed />
        <Desktop>
          <MouseFollower mousePosition={this.state.mousePosition} />
        </Desktop>
        {this.state.loading ? (
          <Loading handleLoading={this.handleLoading} />
        ) : (
          <BrowserRouter>
            <Switch location={this.props.location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/works" component={Work} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
