import React from 'react';
import PropTypes from 'prop-types';
import Skill from '../Skill';

const baseClassName = 'skills';

const Skills = ({ skills }) => (
  <section className={baseClassName}>
    <h2 className={`${baseClassName}__heading`}>Skills</h2>
    {Object.keys(skills).map((skillGroup, index) => (
      <div key={index} className={`${baseClassName}__subsection ${skillGroup}`}>
        <h3 className={`${baseClassName}__subsection__heading`}>{skillGroup}</h3>
        <ul className={`${baseClassName}__subsection__list`}>
          {
            skills[skillGroup].map((skill, i) => (
              <Skill
                key={i}
                name={skill.name}
                additionalInfo={skill.additionalInfo}
                level={skill.level}
              />
            ))
          }
        </ul>
      </div>
    ))}
  </section>
);

Skills.propTypes = {
  skills: PropTypes.object.isRequired,
};

export default Skills;
