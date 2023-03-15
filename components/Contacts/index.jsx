import React from 'react';
import PropTypes from 'prop-types';

const baseClass = 'contacts';

const Contacts = ({ contacts }) => (
  <ul className={baseClass}>
    {Object.keys(contacts).map((contact, index) => (
      <li key={index} className={`${baseClass}__contact`}>
        <a className={`${baseClass}__contact__link`} href={contacts[contact].link}>
          <img className={`${baseClass}__contact__link__image`} src={`./components/Contacts/images/${contact}.svg`} alt="" />
          <span className={`${baseClass}__contact__link__print`}>{contacts[contact].printText}</span>
          <span className="hide-a11y">{`Contact me via ${contact}`}</span>
        </a>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.object.isRequired,
};

export default Contacts;
