import React from 'react';
import { shallow } from 'enzyme';
import Education from '.';
import data from '../../data.json';

const baseClassName = 'education';

describe('Education', () => {
  let education;

  beforeAll(() => {
    education = shallow(<Education education={data.education} />);
  });

  test('should return correct number of institutions', () => {
    expect(education.find(`.${baseClassName}__institutions__institution`)).toHaveLength(data.education.length);
  });

  test('should render all information about education from institution', () => {
    const institutionData = data.education[0];
    const institutionElement = education.find(`.${baseClassName}__institutions__institution`).first();

    expect(institutionElement.find(`.${baseClassName}__institutions__institution__name`).text()).toEqual(institutionData.name);
    expect(institutionElement.find(`.${baseClassName}__institutions__institution__dates`).text()).toEqual(institutionData.dates);

    const diplomasElements = institutionElement.find(`.${baseClassName}__institutions__institution__diplomas__diploma`);

    institutionData.diplomas.forEach((diploma, index) => {
      expect(diplomasElements.at(index).text()).toEqual(diploma);
    });
  });
});
