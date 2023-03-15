import React from 'react';
import { shallow } from 'enzyme';
import Contacts from '.';
import data from '../../data.json';

const baseClass = 'contacts';

describe('Contacts', () => {
  let contacts;

  beforeAll(() => {
    contacts = shallow(<Contacts contacts={data.contacts} />);
  });

  test('should render correct number of contact links', () => {
    expect(contacts.find(`.${baseClass}__contact`)).toHaveLength(Object.keys(data.contacts).length);
  });

  describe('Contact link', () => {
    const contactLinkClass = `${baseClass}__contact__link`;
    let contactLink;
    let contactLinkDataKey;

    beforeAll(() => {
      contactLink = contacts.find(`.${contactLinkClass}`).at(0);
      [contactLinkDataKey] = Object.keys(data.contacts);
    });

    test('should render correct href', () => {
      expect(contactLink.prop('href')).toEqual(data.contacts[contactLinkDataKey].link);
    });

    test('should generate correct image name', () => {
      expect(contactLink.find(`.${contactLinkClass}__image`).prop('src')).toContain(`${contactLinkDataKey}.svg`);
    });

    test('should generate correct print text', () => {
      expect(contactLink.find(`.${contactLinkClass}__print`).text()).toEqual(data.contacts[contactLinkDataKey].printText);
    });

    test('should generate correct accessibility text', () => {
      expect(contactLink.find(`.${contactLinkClass} .hide-a11y`).text()).toEqual(`Contact me via ${contactLinkDataKey}`);
    });
  });
});
