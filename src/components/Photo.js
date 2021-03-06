import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css';

function Photo({ url }) {
  return (
    <img className={styles.photo} src={url}/>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
