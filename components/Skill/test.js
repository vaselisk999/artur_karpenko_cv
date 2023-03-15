import React from 'react';
import { shallow } from 'enzyme';
import Skill from '.';
import data from '../../data.json';

const baseClassName = 'skill';

describe('Skill', () => {
  const skillData = data.skills.technical[2];
  let skill;

  beforeAll(() => {
    skill = shallow(
      <Skill
        name={skillData.name}
        additionalInfo={skillData.additionalInfo}
        level={skillData.level}
      />,
    );
  });

  test('should render name', () => {
    expect(skill.find(`h4.${baseClassName}__name`).text()).toEqual(skillData.name);
  });

  test('should render level', () => {
    expect(skill.find(`.${baseClassName}__level`).text()).toContain(skillData.level);
  });

  test('should calculate width of level highlight', () => {
    const expectedWidth = skillData.level / 5 * 100;

    expect(skill.find(`.${baseClassName}__level__highlight`).prop('style').width).toContain(expectedWidth);
  });

  test('should display correct level text', () => {
    expect(skill.find(`.${baseClassName}__level__highlight`).text()).toEqual(`${skillData.level} of 5`);
  });

  test('should render additional information', () => {
    expect(skill.find(`.${baseClassName}__info`).text()).toContain(skillData.additionalInfo);
  });
});
