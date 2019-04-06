import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import H1 from 'components/H1';
import MailIcon from 'images/mail.svg';
import LinkedInIcon from 'images/linkedin.svg';
import GitHubIcon from 'images/github.svg';

const styles = {
  root: {
    paddingTop: 16,
  },
};

class Header extends React.Component {
  renderIcon = (href, icon, title, size = 24, target = '_blank') => (
    <a href={href} target={target} title={title}>
      <img src={icon} height={size} alt={title} />
    </a>
  );

  renderIcons = () => (
    <Grid container spacing={16} alignItems="baseline" wrap="nowrap">
      <Grid item>
        {this.renderIcon(
          'mailto:stephen.karpinskyj@gmail.com',
          MailIcon,
          'Email',
          30,
          null,
        )}
      </Grid>
      <Grid item>
        {this.renderIcon(
          'https://www.linkedin.com/in/stephen-karpinskyj',
          LinkedInIcon,
          'LinkedIn',
        )}
      </Grid>
      <Grid item>
        {this.renderIcon(
          'https://github.com/stephen-karpinskyj?tab=repositories',
          GitHubIcon,
          'GitHub',
        )}
      </Grid>
    </Grid>
  );

  renderName = name => <H1>{name}</H1>;

  render = () => {
    const { classes } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        wrap="nowrap"
        spacing={16}
        classes={{ container: classes.root }}
      >
        <Grid item xs>
          {this.renderName('Stephen Karpinskyj')}
        </Grid>
        <Grid item>{this.renderIcons()}</Grid>
      </Grid>
    );
  };
}

Header.propTypes = {
  // hoc
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { name: 'containers/Header' })(Header);
