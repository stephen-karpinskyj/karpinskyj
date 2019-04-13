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
import Graduation from 'images/graduation.png';
import Auckland from 'images/auckland.png';
import Melbourne from 'images/melbourne.png';
import Ugroop from 'images/ugroop.png';
import Dizzy from 'images/dizzy.png';
import Puck from 'images/puck.png';
import Beat from 'images/beat.png';
import Dicey from 'images/dicey.png';
import Orbit from 'images/orbit.png';
import Rush from 'images/rush.png';
import Scs from 'images/scs.png';
import Aetherlight from 'images/aetherlight.png';
import Marriage from 'images/marriage.png';
import Baby from 'images/baby.png';

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
    noBuilds = false,
  }) =>
    this.renderElement({
      date,
      icon: this.renderIcon({
        icon,
        href: noBuilds ? `https://github.com/stephen-karpinskyj/${repo}` : href,
        title: iconTitle,
        margin: 0,
      }),
      title: (
        <Grid container spacing={8}>
          <Grid item xs>
            {title}
          </Grid>
          <Grid item>
            {!noBuilds && (
              <React.Fragment>
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
              </React.Fragment>
            )}
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
        {this.renderPrototypeElement({
          // date: 2018,
          icon: Orbit,
          title: 'Prototyped "Orbit" in Unity',
          description: '2D gravity physics simulator.',
          href: '/orbit',
          iconTitle: 'Orbit',
          apk: 'sk-orbit',
          repo: 'record',
        })}
        {this.renderElement({
          date: 2018,
          icon: this.renderIcon({
            icon: Melbourne,
            href: 'https://whatson.melbourne.vic.gov.au',
            title: 'Melbourne, Australia',
          }),
          iconBackground: 'black',
          title: 'Moved back to Melbourne, AU',
        })}
        {this.renderElement({
          // date: 2017,
          icon: this.renderIcon({
            icon: Ugroop,
            href: 'https://www.ugroop.com',
            title: 'uGroop',
          }),
          title: 'Started working at uGroop',
          description: 'Full stack development; ES9; React',
        })}
        {this.renderElement({
          // date: 2017,
          icon: this.renderIcon({
            icon: Baby,
          }),
          iconBackground: '#eac52b',
          title: 'Became a father',
        })}
        {this.renderPrototypeElement({
          date: 2017,
          icon: Dicey,
          title: 'Prototyped "Dicey" in Unity',
          description: 'Dice-rolling puzzler.',
          href: '/dicey',
          iconTitle: 'Dicey',
          apk: 'sk-dicey',
          repo: 'boxes',
        })}
        {this.renderPrototypeElement({
          // date: 2016,
          icon: Beat,
          title: 'Prototyped "Beat" in Unity',
          description: 'Rhythmic, board-tapping snake-like.',
          href: '/beat',
          iconTitle: 'Beat',
          apk: 'sk-beat',
          repo: 'flip',
        })}
        {this.renderPrototypeElement({
          // date: 2016,
          icon: Puck,
          title: 'Prototyped "Puck" in Unity',
          description: 'One-touch, competitive air hockey with custom physics.',
          href: '/puck',
          iconTitle: 'Puck',
          apk: 'sk-puck',
          repo: 'Orbit',
        })}
        {this.renderElement({
          date: 2016,
          icon: this.renderIcon({
            icon: Aetherlight,
            href: 'https://www.youtube.com/watch?v=-Y8A65im5D0',
            title: 'The Aetherlight',
            margin: 2,
          }),
          title: 'Shipped "The Aetherlight"',
          description: 'Available on 4 platforms.',
        })}
        {this.renderPrototypeElement({
          date: 2015,
          icon: Dizzy,
          title: 'Prototyped "Dizzy" in Unity',
          description: 'One-touch, single-screen racer/spinner.',
          href: '/dizzy',
          iconTitle: 'Dizzy',
          apk: 'sk-dizzy',
          repo: 'Dizzy',
        })}
        {this.renderElement({
          // date: 2014,
          icon: this.renderIcon({
            icon: Scs,
            href: 'https://www.linkedin.com/company/scarlet-city-studios',
            title: 'Scarlet City Studios',
            margin: 0,
          }),
          title: 'Started working at Scarlet City Studios',
          description: 'Developed an online role-playing game in Unity.',
        })}
        {this.renderElement({
          date: 2014,
          icon: this.renderIcon({
            icon: Auckland,
            href: 'https://www.aucklandnz.com',
            title: 'Auckland, New Zealand',
          }),
          iconBackground: '#e75424',
          title: 'Moved to Auckland, NZ',
        })}
        {this.renderElement({
          // date: 2013,
          icon: this.renderIcon({
            icon: Rush,
            href: 'https://rush.co.nz',
            title: 'Rush',
            margin: 0,
          }),
          title: 'Started working at Rush',
          description: 'Game engineering; Ported 5 games to Unity',
        })}
        {this.renderElement({
          date: 2013,
          icon: this.renderIcon({
            icon: Graduation,
            href:
              'https://researchbank.rmit.edu.au/eserv/rmit:160556/Karpinskyj.pdf',
            title: 'Masters Thesis',
            margin: 4,
          }),
          title: 'Graduated with a Master of Computer Science',
        })}
        {this.renderElement({
          date: 2011,
          icon: this.renderIcon({
            icon: Marriage,
          }),
          iconBackground: '#eac52b',
          title: 'Got married',
        })}
        {this.renderElement({
          // date: 2006,
          icon: this.renderIcon({
            icon: Rmit,
            href: 'https://www.rmit.edu.au',
            title: 'RMIT University',
          }),
          title: 'Started university at RMIT',
          description: 'Game programming; Research',
        })}
        {this.renderElement({
          date: 2006,
          icon: this.renderIcon({
            icon: Melbourne,
            href: 'https://whatson.melbourne.vic.gov.au',
            title: 'Melbourne, Australia',
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
