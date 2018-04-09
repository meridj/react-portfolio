import React, { Component } from 'react';

// Components
import Input from '../../components/Input';
import SendingFormLoader from '../../components/SendingFormLoader';

// Styles
import './Form.css';

// Datas
import { inputs } from '../../config/data';

/**
 *
 * State Full Component: Form
 * Usage : render a form that take email,
 * firstname, name and message from user, to me.
 *
 * @param props => none
 *
 */
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        firstname: '',
        name: '',
        email: '',
        message: ''
      },
      disabled: true,
      isSendingForm: false,
      validateSubmit: false
    };

    this.checkMail = this.checkMail.bind(this);
    this.checkFormValues = this.checkFormValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.encode = this.encode.bind(this);
  }

  checkMail() {
    const reg = new RegExp(
      '^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$',
      'i'
    );
    return reg.test(this.state.formValues.email);
  }

  checkFormValues() {
    if (
      this.checkMail() &&
      this.state.formValues.firstname.trim().length &&
      this.state.formValues.name.trim().length &&
      this.state.formValues.message.trim().length
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
      body: this.encode({ 'form-name': 'contact', ...this.state.formValues })
    })
      .then(() => {
        this.setState({
          formValues: {
            firstname: '',
            name: '',
            email: '',
            message: ''
          },
          disabled: true,
          isSendingForm: false
        });
      })
      .catch(error => console.error(error));
  }

  handleChange(event, field) {
    let newFormValues = { ...this.state.formValues };
    newFormValues[field] = event.target.value;

    this.setState({ formValues: newFormValues }, () => {
      if (this.checkFormValues()) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  render() {
    return [
      <form
        method="POST"
        onSubmit={event => this.handleSubmit(event)}
        className="form"
      >
        {inputs.map((input, key) => (
          <Input
            appearFrom={input.appearFrom}
            key={key}
            name={input.inputName}
            type={input.inputType}
            placeholder={input.inputPlaceholder}
            textarea={input.textarea}
            value={this.state.formValues[input.inputName]}
            onChange={this.handleChange}
          />
        ))}
        <button disabled={this.state.disabled} className="submit">
          {this.state.disabled ? 'Complete the form' : 'Send'}
        </button>
      </form>,
      <SendingFormLoader isSendingForm={this.state.isSendingForm} />
    ];
  }
}

export default Form;
