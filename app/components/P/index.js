import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
  root: {
    marginTop: '8px !important',
    fontSize: '.875rem !important',
    fontFamily: 'docs-Spectral',
  },
};

const P = ({ classes, children, className, ...rest }) => (
  <p className={classNames(classes.root, className)} {...rest}>
    {children}
  </p>
);

P.propTypes = {
  // hoc
  classes: PropTypes.object.isRequired,

  // parent
  children: PropTypes.any,
  className: PropTypes.string,
};

P.defaultProps = {
  children: null,
  className: null,
};

export default withStyles(styles, { name: 'components/P' })(P);
