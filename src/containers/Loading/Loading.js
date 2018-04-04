import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Fade from 'react-reveal/Fade';

// Styles
import './Loading.css';

/**
 *
 * State Full Container: LoadingContainer
 * Usage : render loader container
 * @param props => none
 *
 */
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const percent = this.state.percent + 0.19;
    if (percent >= 100) {
      return;
    }
    this.setState({ percent }, () => {
      setTimeout(this.increase, 0.1);
    });
  }

  render() {
    return (
      <div id="loading-container">
        <Line
          style={{ width: '100%', flexGrow: '0.01' }}
          strokeLinecap="butt"
          percent={this.state.percent}
          strokeWidth="0.1"
          strokeColor="#7f00ff"
          trailColor="rgb(47, 47, 47)"
        />
        <div id="loading-text">
          <Fade duration={3000} delay={700}>
            <h1 id="welcome">Welcome to my portfolio</h1>
          </Fade>
          <Fade bottom duration={3000} delay={700}>
            <h2 id="build">
              build from scratch with
              <span className="build-techno"> react</span>,
              <span className="build-techno"> node</span> and
              <span id="love">love .</span>
            </h2>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Loading;
