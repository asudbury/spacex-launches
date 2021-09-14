import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Links } from '../types';

interface LinksProps {
  links: Links;
}

export default function LaunchLinks({ links }: LinksProps): JSX.Element {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="Article" secondary={links.article_link} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Wikipedia" secondary={links.wikipedia} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Video" secondary={links.video_link} />
        </ListItem>
      </List>
    </div>
  );
}
