import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import { Links } from '../types';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'underline'
  }
}));

interface LinksProps {
  links: Links;
}

export default function LaunchLinks({ links }: LinksProps): JSX.Element {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="Article" />
        </ListItem>
        <ListItem
          button
          component="a"
          href={links.article_link}
          className={classes.link}
        >
          <ListItemText primary={links.article_link} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Wikipedia" />
        </ListItem>
        <ListItem
          button
          component="a"
          href={links.wikipedia}
          className={classes.link}
        >
          <ListItemText primary={links.wikipedia} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Video" />
        </ListItem>
        <ListItem
          button
          component="a"
          href={links.video_link}
          className={classes.link}
        >
          <ListItemText primary={links.video_link} />
        </ListItem>
      </List>
    </div>
  );
}
