import React from 'react';
import { shallow } from 'enzyme';
import Job from '.';
import data from '../../data.json';

const baseClassName = 'job';

describe('Job', () => {
  let jobRole;
  const jobData = data.work[0];
  const roleData = jobData.roles[0];

  beforeAll(() => {
    jobRole = shallow(<Job
      company={jobData.company}
      roles={jobData.roles}
    />);
  });

  test('should render company name', () => {
    expect(jobRole.find(`.${baseClassName}__company__image`).prop('alt')).toEqual(jobData.company);
  });

  test('should render correct path to company icon', () => {
    const expectedImagePath = `./components/Job/images/${jobData.company.replace(/ /g, '')}.svg`;

    expect(jobRole.find(`.${baseClassName}__company__image`).prop('src')).toEqual(expectedImagePath);
  });

  test('should render dates', () => {
    expect(jobRole.find(`.${baseClassName}__roles__role__duration`).text()).toEqual(roleData.dates);
  });

  test('should render role name', () => {
    expect(jobRole.find(`.${baseClassName}__roles__role__name`).text()).toEqual(roleData.name);
  });

  test('should render role description if it is present', () => {
    expect(jobRole.find(`.${baseClassName}__roles__role__description`).text()).toEqual(roleData.description);
  });

  describe('Responsibilities and projects', () => {
    test('should be rendered if responsibilitiesAndProjects is provided in data', () => {
      expect(jobRole.find(`.${baseClassName}__roles__role__responsibilities-and-projects`)).toBeTruthy();
    });

    test('should render description if it is provided', () => {
      expect(jobRole.find(`.${baseClassName}__roles__role__responsibilities-and-projects__description`).text()).toEqual(roleData.responsibilitiesAndProjects.description);
    });

    test('should render list of responsibilities and projects', () => {
      const listData = roleData.responsibilitiesAndProjects.list;
      const responsibilitiesAndProjects = jobRole.find(`.${baseClassName}__roles__role__responsibilities-and-projects__list__item`);

      expect(responsibilitiesAndProjects).toHaveLength(listData.length);
      responsibilitiesAndProjects.forEach((responsibility, index) => {
        expect(responsibility.text()).toEqual(listData[index]);
      });
    });
  });
});
