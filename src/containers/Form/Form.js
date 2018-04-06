import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import { Fade } from 'react-reveal';

// Components
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
    this.state = {
      firstname: '',
      name: '',
      email: '',
      message: '',
      disabled: true,
      isSendingForm: false,
      validateSubmit: false
    };

    this.checkMail = this.checkMail.bind(this);
    this.checkValue = this.checkValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.encode = this.encode.bind(this);
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

  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSendingForm: true });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => {
        this.props.handleValidateForm();
        this.setState({
          firstname: '',
          name: '',
          email: '',
          message: '',
          disabled: true
        });
        this.setState({ isSendingForm: false });
      })
      .catch(error => console.error(error));
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
        <form
          method="POST"
          onSubmit={event => this.handleSubmit(event)}
          className="form"
        >
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
        <div
          className="bar-loader"
          style={{ display: this.state.isSendingForm ? 'flex' : 'none' }}
        >
          <BarLoader
            height={8}
            color={'#7f00ff'}
            loading={this.state.isSendingForm}
          />
        </div>
      </Fade>
    );
  }
}

export default Form;
