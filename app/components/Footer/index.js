import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    paddingBottom: 40,
  },
};

function Footer({ classes }) {
  return <div className={classes.root} />;
}

Footer.propTypes = {
  // hoc
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { name: 'containers/Footer' })(Footer);
