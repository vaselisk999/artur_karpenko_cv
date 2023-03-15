import React from 'react';
import { shallow } from 'enzyme';
import WorkExperience from '.';
import data from '../../data.json';

describe('WorkExperience', () => {
  let workExperience;

  beforeAll(() => {
    workExperience = shallow(<WorkExperience work={data.work} />);
  });

  test('should render correct number of roles', () => {
    expect(workExperience.find('Job')).toHaveLength(data.work.length);
  });
});
