import React from 'react';
import PropTypes from 'prop-types';
import Contacts from '../Contacts';

const baseClassName = 'header';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReadMoreOpen: false,
    };

    this.readMoreClickHandler = this.readMoreClickHandler.bind(this);
    this.updateIsReadMoreOpen = this.updateIsReadMoreOpen.bind(this);
  }

  componentDidMount() {
    this.updateIsReadMoreOpen();
    window.addEventListener('resize', this.updateIsReadMoreOpen);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateIsReadMoreOpen);
  }

  updateIsReadMoreOpen() {
    this.setState(prevState => ({
      isReadMoreOpen: prevState.isReadMoreOpen || window.innerWidth >= 768,
    }));
  }

  readMoreClickHandler() {
    this.setState(prevState => ({
      isReadMoreOpen: !prevState.isReadMoreOpen,
    }));
  }

  render() {
    const {
      name, surname, whoiam, aboutMe, contacts,
    } = this.props;
    const { isReadMoreOpen } = this.state;
    const readMoreContentId = 'read-more';

    return (
      <section className={baseClassName}>
        <Contacts contacts={contacts} />

        <h1 className={`${baseClassName}__name`}>
          {name}
          <span className={`${baseClassName}__name__highlight`}>{surname}</span>
        </h1>

        <h2 className="hide-a11y">Who I am</h2>
        <p className={`${baseClassName}__whoiam`}>{whoiam}</p>

        <h2 className="hide-a11y">About me</h2>
        {<p className={`${baseClassName}__about-me`} dangerouslySetInnerHTML={{ __html: aboutMe[0] }} />}

        <button type="button" className="read-more__trigger" aria-expanded={isReadMoreOpen} aria-controls={readMoreContentId} onClick={this.readMoreClickHandler}>
          {`Read ${isReadMoreOpen ? 'less' : 'more'}`}
        </button>
        <div id={readMoreContentId} className={`read-more__content${isReadMoreOpen ? ' read-more__content--open' : ''}`} aria-hidden={!isReadMoreOpen}>
          {aboutMe.slice(1).map((paragraph, index) => (
            <p key={index} className={`${baseClassName}__about-me`} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </section>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  whoiam: PropTypes.string.isRequired,
  contacts: PropTypes.object.isRequired,
  aboutMe: PropTypes.array.isRequired,
};

export default Header;
