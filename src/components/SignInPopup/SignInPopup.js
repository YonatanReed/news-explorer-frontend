import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignInPopup(props) {
  return (
    <PopupWithForm
      title="Sign in"
      name="signin"
      buttonText="Sign in"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onLinkClick={props.onLinkClick}
    >
      <label className="form__label">
        Email
        <input
          required
          id="email-signin"
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
          id="password-signin"
          name="password"
          type="password"
          minLength="8"
          className="form__input"
          placeholder="Enter password"
        />
      </label>
    </PopupWithForm>
  );
}

export default SignInPopup;
