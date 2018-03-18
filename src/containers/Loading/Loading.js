import React, { Component } from 'react';

// Components
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
    if (percent > 100) {
      return;
    }
    this.setState({ percent });
    setTimeout(this.increase, 0.1);
  }

  render() {
    return (
      <div className="loading-container">
        <Line
          style={{ width: '100%', flexGrow: '0.01' }}
          strokeLinecap="butt"
          percent={this.state.percent}
          strokeWidth="0.1"
          strokeColor="#7f00ff"
          trailColor="rgb(47, 47, 47)"
        />
        <div className="loading-text-container" style={{ flexGrow: '0.99' }}>
          <Fade duration={3000} delay={700}>
            <h1 className="loading-text-welcome">Welcome to my portfolio</h1>
          </Fade>
          <Fade bottom duration={3000} delay={700}>
            <h2 className="loading-text-build">
              build with react, node and{' '}
              <span style={{ fontWeight: '800' }}>love</span> !
            </h2>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Loading;
