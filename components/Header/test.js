import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import data from '../../data.json';
import setWindowDimentions from '../../utilities/setWindowDimentions';

const baseClassName = 'header';

describe('Header', () => {
  let header;

  beforeAll(() => {
    setWindowDimentions(767, 1024);
    header = shallow(
      <Header
        name={data.name}
        surname={data.surname}
        whoiam={data.whoiam}
        aboutMe={data.aboutMe}
        contacts={data.contacts}
      />,
    );
  });

  test('should render full name', () => {
    const nameElementText = header.find(`h1.${baseClassName}__name`).text();

    expect(nameElementText).toContain(data.name);
    expect(nameElementText).toContain(data.surname);
  });

  test('should render contacts', () => {
    expect(header.find('Contacts')).toBeTruthy();
  });

  test('should render whoiam', () => {
    expect(header.find(`.${baseClassName}__whoiam`).text()).toEqual(data.whoiam);
  });

  test('should render about me pagagraphs', () => {
    const aboutMeElements = header.find(`.${baseClassName}__about-me`);

    expect(aboutMeElements).toHaveLength(data.aboutMe.length);
    aboutMeElements.forEach((element, index) => {
      expect(element.html()).toContain(data.aboutMe[index]);
    });
  });

  describe('read more', () => {
    const readMoreBaseClass = 'read-more';
    const triggerClass = `.${readMoreBaseClass}__trigger`;
    const contentClass = `.${readMoreBaseClass}__content`;

    describe('default collapsed state', () => {
      let trigger;
      let content;

      beforeAll(() => {
        trigger = header.find(triggerClass);
        content = header.find(contentClass);
      });

      describe('trigger', () => {
        test('should be programmatically associated with content', () => {
          expect(trigger.prop('aria-controls')).toEqual(content.prop('id'));
        });

        test('should have aria-expanded set to false', () => {
          expect(trigger.prop('aria-expanded')).toEqual(false);
        });

        test('should have correct text', () => {
          expect(trigger.text()).toEqual('Read more');
        });
      });

      describe('content', () => {
        test('should not have open class', () => {
          expect(header.find(contentClass).hasClass(`${readMoreBaseClass}__content--open`)).toBeFalsy();
        });
      });
    });

    describe('uncollapsed state on trigger activation', () => {
      let trigger;
      let content;

      beforeAll(() => {
        header.find(triggerClass).simulate('click');

        trigger = header.find(triggerClass);
        content = header.find(contentClass);
      });

      describe('trigger', () => {
        test('should have aria-expanded set to true', () => {
          expect(trigger.prop('aria-expanded')).toBeTruthy();
        });

        test('should have correct text', () => {
          expect(trigger.text()).toEqual('Read less');
        });
      });

      describe('content', () => {
        test('should have open class', () => {
          expect(content.prop('className')).toContain(`${readMoreBaseClass}__content--open`);
        });
      });
    });

    describe('collapsed state on repeated trigger activation', () => {
      let trigger;
      let content;

      beforeAll(() => {
        header.find(triggerClass).simulate('click');

        trigger = header.find(triggerClass);
        content = header.find(contentClass);
      });

      describe('trigger', () => {
        test('should be programmatically associated with content', () => {
          expect(trigger.prop('aria-controls')).toEqual(content.prop('id'));
        });

        test('should have aria-expanded set to false', () => {
          expect(trigger.prop('aria-expanded')).toEqual(false);
        });

        test('should have correct text', () => {
          expect(trigger.text()).toEqual('Read more');
        });
      });

      describe('content', () => {
        test('should not have open class', () => {
          expect(header.find(contentClass).hasClass(`${readMoreBaseClass}__content--open`)).toBeFalsy();
        });
      });
    });
  });
});
