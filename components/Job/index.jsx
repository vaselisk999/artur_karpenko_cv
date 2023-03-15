import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'job';

const Job = ({ company, roles, dates }) => (
  <li className={baseClassName}>
    <h3 className={`${baseClassName}__company`}>
      <img className={`${baseClassName}__company__image`} src={`./components/Job/images/${company.toLowerCase().replace(/ /g, '')}.svg`} alt={company} />
      <p className={`${baseClassName}__roles__role__duration`}>{company}</p>
      <p className={`${baseClassName}__roles__role__duration`}>{dates}</p>
    </h3>
    <ul className={`${baseClassName}__roles`}>
      {roles.map((value, index) => {
        const { name, workedOn, dates, description, usedTechnologies, graphicTools, tools, responsibilitiesAndProjects } = value;
        return (
          <li key={index} className={`${baseClassName}__roles__role`}>
            {name && (
              <React.Fragment>
                <h4 className="hide-a11y">Role</h4>
                <p className={`${baseClassName}__roles__role__name`}>{name}</p>
              </React.Fragment>
            )}
            {dates && (
              <React.Fragment>
                <h5 className="hide-a11y">Duration</h5>
                <p className={`${baseClassName}__roles__role__duration`}>{dates}</p>
              </React.Fragment>
            )}
            {workedOn && (
              <React.Fragment>
                <h5 className="sub-title">Worked On:</h5>
                <p className={`${baseClassName}__roles__role__workedOn`}>{workedOn}</p>
              </React.Fragment>
            )}
            {description && (
              <React.Fragment>
                <h5 className="sub-title">Description:</h5>
                <p className={`${baseClassName}__roles__role__description`}>{description}</p>
              </React.Fragment>
            )}
            {/* {usedTechnologies && (
            <React.Fragment>
              <h5 className="sub-title">Used Technologies:</h5>
              <p className={`${baseClassName}__roles__role__usedTechnologies`}>{usedTechnologies}</p>
            </React.Fragment>
            
          )} */}
            {/* {graphicTools && (
            <React.Fragment>
              <h5 className="sub-title">Graphic Tools:</h5>
              <p className={`${baseClassName}__roles__role__graphicTools`}>{graphicTools}</p>
            </React.Fragment>
          )} */}
            {/* {tools && (
            <React.Fragment>
              <h5 className="sub-title">Tools:</h5>
              <p className={`${baseClassName}__roles__role__tools`}>{tools}</p>
            </React.Fragment>
          )} */}
            {
              responsibilitiesAndProjects && (
                <div className={`${baseClassName}__roles__role__responsibilities-and-projects`}>
                  <h4 className="hide-a11y">Role responsibilities and projects</h4>
                  {responsibilitiesAndProjects.description
                    && <p className={`${baseClassName}__roles__role__responsibilities-and-projects__description`}>{responsibilitiesAndProjects.description}</p>}
                  <ul className={`${baseClassName}__roles__role__responsibilities-and-projects__list`}>
                    {responsibilitiesAndProjects.list.map((item, i) => (
                      <li key={i} className={`${baseClassName}__roles__role__responsibilities-and-projects__list__item`}>{item}</li>
                    ))}
                  </ul>
                </div>)
            }
          </li>
        )
      })}
    </ul>
  </li>
);

Job.propTypes = {
  company: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.shape({
    dates: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    responsibilitiesAndProjects: PropTypes.shape({
      description: PropTypes.string,
      list: PropTypes.array.isRequired,
    }),
  })).isRequired,
};

export default Job;
