import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { getTranslation } from "../LangSwitcher";
import Button from "../Button";
import Social from "../Social";
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
      pol: {
        streamer: "Kontakt",
        contactbutton: "KONTAKT",
        name: "Imię",
        phone: "Numer Telefonu",
        message: "Twoja Wiadomość...",
        submit: "Wyślij",
        nameerror: "Musisz wpisać swoje imię",
        emailerror: "Musisz wpisać swój adres e-mail",
        texterror: "Musisz wpisać wiadomość"
      },
      eng: {
        streamer: "Contact",
        contactbutton: "CONTACT ME",
        name: "Name",
        phone: "Phone",
        message: "Your Message...",
        submit: "Submit",
        nameerror: "You must enter your name",
        emailerror: "You must enter your email",
        texterror: "You must enter a message"
      }
    };
    return (
      <section className="contact" id="contact">
        <h2 className="streamer">
          {getTranslation(translations, this.props.language, "streamer")}
        </h2>
        <div className="container contact__container">
          <div className="social">
            <img className="social__photo" src={face} alt="Maciek face" />
            <Button
              text={getTranslation(
                translations,
                this.props.language,
                "contactbutton"
              )}
              className="button button--orange button--contact"
              href="mailto:sroka.maciej@o2.pl"
            />
            <Social />
          </div>
          <form
            className="form"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <div className="form__container">
              <Field
                name="name"
                component={this.renderInput}
                placeholder={getTranslation(
                  translations,
                  this.props.language,
                  "name"
                )}
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
                placeholder={getTranslation(
                  translations,
                  this.props.language,
                  "phone"
                )}
              />
            </div>
            <div className="form__container">
              <Field
                name="text"
                component={this.renderTextarea}
                placeholder={getTranslation(
                  translations,
                  this.props.language,
                  "message"
                )}
              />
            </div>
            <button
              type="submit"
              className="button button--bordered button--submit"
              disabled={pristine || submitting}
            >
              {getTranslation(translations, this.props.language, "submit")}
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const validate = (formValues, props) => {
  const translations = {
    pol: {
      nameerror: "Musisz wpisać swoje imię",
      emailerror: "Musisz wpisać swój adres e-mail",
      texterror: "Musisz wpisać wiadomość"
    },
    eng: {
      nameerror: "You must enter your name",
      emailerror: "You must enter your email",
      texterror: "You must enter a message"
    }
  };
  const errors = {};
  if (!formValues.name) {
    errors.name = getTranslation(translations, props.language, "nameerror");
  }
  if (!formValues.email) {
    errors.email = getTranslation(translations, props.language, "emailerror");
  }
  if (!formValues.text) {
    errors.text = getTranslation(translations, props.language, "texterror");
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

Contact = reduxForm({
  form: "contact",
  validate
})(Contact);

export default connect(mapStateToProps)(Contact);
