import React from 'react';
import { shallow } from 'enzyme';
import App from '.';
import data from '../../data.json';

describe('App', () => {
  let app;

  beforeAll(() => {
    app = shallow(<App data={data} />);
  });

  test('should render header section', () => {
    expect(app.find('Header')).toBeTruthy();
  });

  test('should render skills section', () => {
    expect(app.find('Skills')).toBeTruthy();
  });

  test('should render work experience section', () => {
    expect(app.find('WorkExperience')).toBeTruthy();
  });
});
