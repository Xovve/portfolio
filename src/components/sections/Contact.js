import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import Button from "../Button";
import { getTranslation } from "../LangSwitcher";
import face from "../../static/mafejs.jpg";
import "../../styles/contact.scss";

class Contact extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error">
          <div className="error__message">{error}</div>
        </div>
      );
    }
  }
  onSubmit = (event, formValues) => {
    axios
      .post("https://formcarry.com/s/3UBwYCpNGhy", formValues, {
        headers: { Accept: "application/json" }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  renderInput = ({ input, meta, placeholder }) => {
    return (
      <div className="input-wrapper">
        <input className="input" {...input} placeholder={placeholder} />
        {this.renderError(meta)}
      </div>
    );
  };
  renderTextarea = ({ input, meta, placeholder }) => {
    return (
      <div className="textarea-wrapper">
        <textarea className="textarea" {...input} placeholder={placeholder} />
        {this.renderError(meta)}
      </div>
    );
  };
  render() {
    const { pristine, submitting } = this.props;
    const translations = {
      pol: {},
      eng: {}
    };
    return (
      <section className="contact" id="contact">
        <h2 className="streamer">Contact</h2>
        <div className="container contact__container">
          <div className="social">
            <img className="social__photo" src={face} />
            <Button
              text="CONTACT ME"
              className="button button--orange button--contact"
              href="mailto:sroka.maciej@o2.pl"
            />
            <div className="social__menu">
              <a className="social__link" href="https://github.com/Xovve">
                <span
                  className="iconify gh"
                  data-icon="ant-design:github-fill"
                  data-inline="false"
                />
              </a>
              <a
                className="social__link"
                href="https://www.linkedin.com/in/maciej-sroka-18364615b/"
              >
                <span
                  className="iconify linkedin"
                  data-icon="ant-design:linkedin-fill"
                  data-inline="false"
                />
              </a>
              <a className="social__link" href="mailto:sroka.maciej@o2.pl">
                <span
                  className="iconify"
                  data-icon="foundation:mail"
                  data-inline="false"
                />
              </a>
            </div>
          </div>
          <form
            className="form"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <div className="form__container">
              <Field
                name="name"
                component={this.renderInput}
                placeholder="Name"
              />
              <Field
                type="email"
                name="email"
                component={this.renderInput}
                placeholder="Email"
              />
              <Field
                type="number"
                name="phone"
                component={this.renderInput}
                placeholder="Phone"
              />
            </div>
            <div className="form__container">
              <Field
                name="text"
                component={this.renderTextarea}
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="button button--bordered button--submit"
              disabled={pristine || submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter your name.";
  }
  if (!formValues.email) {
    errors.email = "You must enter your email.";
  }
  if (!formValues.text) {
    errors.text = "You must enter a message.";
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

Contact = connect(mapStateToProps)(Contact);

export default reduxForm({
  form: "contact",
  validate
})(Contact);
