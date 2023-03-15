import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';
import data from '../../data.json';

const baseClassName = 'footer';

describe('Footer', () => {
  let footer;

  beforeAll(() => {
    footer = shallow(<Footer gitLink={data.footer.gitLink} />);
  });

  test('should render link to github', () => {
    const gitLinkElement = footer.find(`.${baseClassName}__git`);

    expect(gitLinkElement.text()).toEqual('The code for this CV is available on GitHub');
    expect(gitLinkElement.prop('href')).toEqual(data.footer.gitLink);
  });
});
