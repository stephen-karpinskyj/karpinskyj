import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import P from 'components/P';
import Rmit from 'images/rmit.png';
import Auckland from 'images/auckland.png';
import Melbourne from 'images/melbourne.png';
import Ugroop from 'images/ugroop.png';
import Dizzy from 'images/dizzy.png';

const styles = {
  article: {
    marginLeft: 46,
  },
  timeline: {
    margin: '0px !important',
    padding: '0px !important',
    width: '100% !important',
  },
  timelineElement: {
    margin: '2em 0 !important',
    '& div > div': {
      padding: 8,
    },
  },
  lastTimelineElement: {
    margin: '2em 0 0 0 !important',
  },
  date: {
    '& div > div > span': {
      position: 'absolute',
      right: 'calc(100% + 76px)',
      top: 0,
      textAlign: 'right',
      padding: '10px 0px !important',
      width: 80,
    },
  },
  noDate: {
    '& div > div > span': {
      padding: '0em !important',
    },
  },
  link: {
    color: '#506d9f',
    textDecoration: 'none',
  },
};

export class HomePage extends React.PureComponent {
  renderIcon = ({ icon, href, title, margin = 6, target = '_blank' }) => (
    <a href={href} target={target} title={title}>
      <img
        src={icon}
        style={{ margin, width: `calc(100% - ${margin * 2}px)` }}
        alt={title}
      />
    </a>
  );

  renderLink = ({
    Component = Link,
    href,
    target = '_blank',
    title = null,
    content,
  }) => {
    const { classes } = this.props;
    switch (Component) {
      case Link:
        return (
          <Component
            to={href}
            target={target}
            title={title}
            className={classes.link}
          >
            {content}
          </Component>
        );

      case 'a':
        return (
          <a href={href} target={target} title={title} className={classes.link}>
            {content}
          </a>
        );

      default:
        return null;
    }
  };

  renderElement = ({
    date = null,
    icon,
    iconBackground = '#fff',
    title,
    description = null,
    last = false,
  }) => {
    const { classes } = this.props;
    return (
      <VerticalTimelineElement
        className={classNames(
          'vertical-timeline-element',
          classes.timelineElement,
          last && classes.lastTimelineElement,
          date ? classes.date : classes.noDate,
        )}
        date={date}
        iconStyle={{ background: iconBackground }}
        icon={icon}
      >
        {!!title && (
          <h4 className="vertical-timeline-element-title">{title}</h4>
        )}
        {!!description && <P>{description}</P>}
      </VerticalTimelineElement>
    );
  };

  renderPrototypeElement = ({
    date,
    icon,
    title,
    description,
    href,
    iconTitle,
    apk,
    repo,
  }) =>
    this.renderElement({
      date,
      icon: this.renderIcon({ icon, href, title: iconTitle, margin: 0 }),
      title: (
        <Grid container spacing={8}>
          <Grid item xs>
            {title}
          </Grid>
          <Grid item>
            {this.renderLink({
              href,
              title: 'Play in new tab',
              content: 'Web',
            })}
            {'; '}
            {this.renderLink({
              href: `/apk/${apk}.apk`,
              title: 'Download .apk',
              content: 'Android',
            })}
            {'; '}
            {this.renderLink({
              Component: 'a',
              href: `https://github.com/stephen-karpinskyj/${repo}`,
              title: 'View code repository',
              content: 'GitHub',
            })}
          </Grid>
        </Grid>
      ),
      description,
    });

  renderTimeline = () => {
    const { classes } = this.props;
    return (
      <VerticalTimeline
        layout="1-column"
        animate={false}
        className={classes.timeline}
      >
        {this.renderElement({
          date: 2018,
          icon: this.renderIcon({
            icon: Melbourne,
            href: 'https://whatson.melbourne.vic.gov.au',
            title: 'Melbourne, AU',
          }),
          iconBackground: 'black',
          title: 'Moved back to Melbourne, AU',
        })}
        {this.renderElement({
          icon: this.renderIcon({
            icon: Ugroop,
            href: 'https://www.ugroop.com',
            title: 'uGroop',
          }),
          title: 'Started working at uGroop',
          description: 'Full Stack Development; ES9; React',
        })}
        {this.renderPrototypeElement({
          date: 2016,
          icon: Dizzy,
          title: 'Prototyped "Dizzy" in Unity',
          description: 'One-touch, single-screen mobile racer.',
          href: '/dizzy',
          iconTitle: 'Dizzy',
          apk: 'sk-dizzy',
          repo: 'Dizzy',
        })}
        {this.renderElement({
          date: 2014,
          icon: this.renderIcon({
            icon: Auckland,
            href: 'https://www.aucklandnz.com',
            title: 'Auckland, NZ',
          }),
          iconBackground: '#e75424',
          title: 'Moved to Auckland, NZ',
        })}
        {this.renderElement({
          icon: this.renderIcon({
            icon: Rmit,
            href: 'https://www.rmit.edu.au',
            title: 'RMIT University',
          }),
          title: 'Started University at RMIT',
          description: 'Game Programming; Research',
        })}
        {this.renderElement({
          date: 2006,
          icon: this.renderIcon({
            icon: Melbourne,
            href: 'https://whatson.melbourne.vic.gov.au',
            title: 'Melbourne, AU',
          }),
          iconBackground: '#000',
          title: 'Moved to Melbourne, AU',
          last: true,
        })}
      </VerticalTimeline>
    );
  };

  renderHelmet = () => (
    <Helmet>
      <title>Stephen Karpinskyj</title>
      <meta name="description" content="Stephen Karpinskyj" />
    </Helmet>
  );

  render = () => {
    const { classes } = this.props;
    return (
      <article className={classes.article}>
        {this.renderHelmet()}
        {this.renderTimeline()}
      </article>
    );
  };
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

HomePage.defaultProps = {};

export default withStyles(styles, { name: 'HomePage' })(HomePage);
