import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'education';

const Education = ({ education }) => (
  <section>
    <h2 className={`${baseClassName}__heading`}>Education</h2>

    <ul className={`${baseClassName}__institutions`}>
      {education.map(
        ({
          name, dates, diplomas, description, skills,
        }, index) => (
          <li
            key={index}
            className={`${baseClassName}__institutions__institution`}
          >
            <h3 className={`${baseClassName}__institutions__institution__name`}>
              {name}
            </h3>

            <h4 className="hide-a11y">Dates attended</h4>
            <p className={`${baseClassName}__institutions__institution__dates`}>
              {dates}
            </p>

            <h4 className="hide-a11y">Diplomas and certifications</h4>

            <p
              className={`${baseClassName}__institutions__institution__description`}
            >
              {description}
            </p>
            <p
              className={`${baseClassName}__institutions__institution__skills`}
            >
              {skills}
            </p>
            <ul
              className={`${baseClassName}__institutions__institution__diplomas`}
            >
              {diplomas.map((diploma, i) => (
                <li
                  key={i}
                  className={`${baseClassName}__institutions__institution__diplomas__diploma`}
                >
                  <img
                    src={`./assets/${diploma}`}
                    alt="bootcamp"
                    title="cerificate"
                  />
                </li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  </section>
);

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      diplomas: PropTypes.array.isRequired,
    }),
  ).isRequired,
};

export default Education;
