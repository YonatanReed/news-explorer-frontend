import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup(props) {

  return (
    <PopupWithForm
      title="Sign up"
      name="signup"
      buttonText="Sign up"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onLinkClick={props.onLinkClick}
      showError={props.showError}
    >
      <label className="form__label">
        Email
        <input
          required
          id="email"
          name="email"
          type="email"
          className="form__input"
          placeholder="Enter email"
        />
      </label>
      <label className="form__label">
        Password
        <input
          required
          id="password"
          name="password"
          type="password"
          minLength="8"
          className="form__input"
          placeholder="Enter password"
        />
      </label>
      <label className="form__label">
        Username
        <input
          required
          id="username"
          name="username"
          type="text"
          minLength="2"
          maxLength="30"
          className="form__input"
          placeholder="Enter your username"
        />
      </label>
    </PopupWithForm>
  );
}

export default SignUpPopup;
