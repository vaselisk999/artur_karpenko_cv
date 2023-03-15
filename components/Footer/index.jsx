import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'footer';

const Footer = ({ gitLink }) => (
  <section className={baseClassName}>
    {
      gitLink ?
        <a href={gitLink} className={`${baseClassName}__git`}>
          The code for this CV is available on GitHub
        </a> : null
    }
  </section>
);

Footer.propTypes = {
  gitLink: PropTypes.string.isRequired,
};

export default Footer;
