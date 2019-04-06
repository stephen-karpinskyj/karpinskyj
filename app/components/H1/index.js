import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
  root: {
    fontSize: '4vw',
    '@media screen and (min-width: 720px)': {
      fontSize: '1.8em',
    },
    '@media screen and (max-width: 480px)': {
      fontSize: '1.2em',
    },
    margin: 0,
  },
};

const H1 = ({ classes, children, className, ...rest }) => (
  <h1 className={classNames(classes.root, className)} {...rest}>
    {children}
  </h1>
);

H1.propTypes = {
  // hoc
  classes: PropTypes.object.isRequired,

  // parent
  children: PropTypes.any,
  className: PropTypes.string,
};

H1.defaultProps = {
  children: null,
  className: null,
};

export default withStyles(styles, { name: 'components/H1' })(H1);
