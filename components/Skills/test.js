import React from 'react';
import { shallow } from 'enzyme';
import Skills from '.';
import data from '../../data.json';

describe('Skills', () => {
  let skills;

  beforeAll(() => {
    skills = shallow(<Skills skills={data.skills} />);
  });

  test('should render correct number of technical skills', () => {
    expect(skills.find('.technical Skill')).toHaveLength(data.skills.technical.length);
  });

  test('should render correct number of personal skills', () => {
    expect(skills.find('.personal Skill')).toHaveLength(data.skills.personal.length);
  });
});
