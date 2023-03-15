import React from 'react';
import PropTypes from 'prop-types';
import Job from '../Job';

const WorkExperience = ({ work }) => (
    <section>
      <h2 className="work-experience-titel" >Work experience</h2>
      <ul className="work-experience">
        {work.map(({ company, roles, dates }, index) => (<Job
          key={index}
          company={company}
          dates={dates}
          roles={roles}
        />
        ))}
      </ul>
    </section>
);


WorkExperience.propTypes = {
  work: PropTypes.array.isRequired,
};

export default WorkExperience;
