import React, { Component } from 'react';

// Components
import Fade from 'react-reveal/Fade';
import Input from '../../components/Input';

// Styles
import './Form.css';

/**
 *
 * State Full Component: Form
 * Usage : render a form that take email,
 * name, and message from user, to me.
 *
 * @param props => none
 *
 */
class Form extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      firstname: '',
      name: '',
      email: '',
      message: '',
      disabled: true,
      validateSubmit: false
    };
    this.checkMail = this.checkMail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  checkMail() {
    const reg = new RegExp(
      '^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$',
      'i'
    );
    return reg.test(this.state.email);
  }

  checkValue() {
    if (
      this.checkMail() &&
      this.state.firstname.trim().length &&
      this.state.name.trim().length &&
      this.state.message.trim().length
    ) {
      return true;
    }
    return false;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleValidateForm();
    this.setState({
      firstname: '',
      name: '',
      email: '',
      message: '',
      disabled: true
    });
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value }, () => {
      if (this.checkValue()) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  render() {
    return (
      <Fade>
        <form onSubmit={event => this.handleSubmit(event)} className="form">
          <Input
            name="firstname"
            type="text"
            value={this.state.firstname}
            onChange={this.handleChange}
            placeholder="Firstname"
          />
          <Input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <Input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <Input
            name="message"
            textarea
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Mehdi, i need you ... !"
          />
          <Fade>
            <input
              disabled={this.state.disabled}
              className="submit"
              type="submit"
              value={this.state.disabled ? 'Complete the form' : 'Send'}
            />
          </Fade>
        </form>
      </Fade>
    );
  }
}

export default Form;
