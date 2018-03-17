import React, { Component } from 'react';

// Components
import Fade from 'react-reveal/Fade';

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
      if (
        this.checkMail() &&
        this.state.firstname.length > 0 &&
        this.state.name.length > 0 &&
        this.state.message.length > 0
      ) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  render() {
    return (
      <form
        method="POST"
        action="/contact"
        onSubmit={event => this.handleSubmit(event)}
        className="form">
        <Fade left>
          <label htmlFor="firstname">Firstname</label>
          <input
            id="firstname"
            name="firstname"
            value={this.state.firstname}
            onChange={event => this.handleChange(event, 'firstname')}
            className="input"
            placeholder="Firstname"
            type="text"
          />
        </Fade>
        <Fade right delay={300}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={this.state.name}
            onChange={event => this.handleChange(event, 'name')}
            className="input"
            placeholder="Name"
            type="text"
          />
        </Fade>
        <Fade left delay={500}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={this.state.email}
            onChange={event => this.handleChange(event, 'email')}
            className="input"
            placeholder="Email"
            type="email"
          />
        </Fade>

        <Fade top delay={700}>
          <textarea
            name="message"
            value={this.state.message}
            onChange={event => this.handleChange(event, 'message')}
            cols="50"
            rows="13"
            className="textarea"
            placeholder="Mehdi, i need you ... !"
            type="text"
          />
        </Fade>
        {!this.state.disabled ? (
          <Fade>
            <input
              disabled={this.state.disabled}
              value="Send"
              className="button"
              type="submit"
            />
          </Fade>
        ) : (
          <Fade>
            <input
              disabled={this.state.disabled}
              value="Complete the form"
              className="button"
              type="submit"
            />
          </Fade>
        )}
      </form>
    );
  }
}

export default Form;
