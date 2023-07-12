import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'skill';

const Skill = ({ name, additionalInfo }) => (
  <li className={baseClassName}>
    <h4 className={`${baseClassName}__name`}>{name}</h4>
    {additionalInfo.length > 0 && (
      <p className={`${baseClassName}__info`}>{` - ${additionalInfo}`}</p>
    )}
    {/* <p className={`${baseClassName}__level`}> */}
    {/*
      <span
        className={`${baseClassName}__level__highlight`}
        style={{ width: `${Number(level) / 5 * 100}%` }}
      >
        {`${level} of 5`}
      </span>
    */}
    {/* </p> */}
  </li>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
  // level: PropTypes.string.isRequired,
};

Skill.defaultProps = {
  additionalInfo: '',
};

export default Skill;
