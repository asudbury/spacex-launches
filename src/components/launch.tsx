import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Tabs, Tab } from '@material-ui/core';
import { format } from 'date-fns';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import LanguageIcon from '@material-ui/icons/Language';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useGetLaunchesQuery } from '../redux/spaceXApi';
import TextHighlighter from './textHighlighter';

export default function Launch(): JSX.Element {
  const { launchId } = useParams<{ launchId: string }>();
  const { data } = useGetLaunchesQuery('');

  const launch = data?.find((i) => i.flight_number.toString() === launchId);

  enum TabValue {
    Mission,
    Rocket,
    Links,
    Json
  }

  const [tabValue, setTabValue] = useState<TabValue>(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    setTabValue(value);
  };

  if (!launch) return <div>error!</div>;

  return (
    <Box p={3}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={tabValue}
        aria-label="Launch Mission Tabs"
        selectionFollowsFocus
        onChange={handleTabChange}
      >
        <Tab
          icon={<FlightTakeoffIcon />}
          label="Mission"
          value={TabValue.Mission}
          aria-label="Mission"
        />
        <Tab
          icon={<AirplanemodeActiveIcon />}
          label="Rocket"
          value={TabValue.Rocket}
          aria-label="Rocket"
        />
        <Tab
          icon={<LanguageIcon />}
          label="Links"
          value={TabValue.Links}
          aria-label="Links"
        />
        <Tab
          icon={<AccountTreeIcon />}
          label="Json"
          value={TabValue.Json}
          aria-label="Json"
        />
      </Tabs>

      <Box p={3}>
        {tabValue === TabValue.Mission && (
          <div>
            <List>
              <ListItem>
                <ListItemText
                  primary="Flight Number"
                  secondary={launch.flight_number}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Mission Name"
                  secondary={launch.mission_name}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Launch Date"
                  secondary={format(
                    new Date(launch.launch_date_utc),
                    'dd-MMM-yyyy HH:mm:ss'
                  )}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Launch Site"
                  secondary={launch.launch_site.site_name_long}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="" secondary={launch.details} />
              </ListItem>
            </List>
            <img src={launch.links.mission_patch_small} alt="mission" />
          </div>
        )}
        {tabValue === TabValue.Rocket && (
          <div>
            <List>
              <ListItem>
                <ListItemText
                  primary="Rocket Name"
                  secondary={launch.rocket.rocket_name}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Rocket Type"
                  secondary={launch.rocket.rocket_type}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Manufacturer"
                  secondary={
                    launch.rocket.second_stage.payloads[0].manufacturer
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Serial Number"
                  secondary={launch.rocket.first_stage.cores[0].core_serial}
                />
              </ListItem>
            </List>
          </div>
        )}
        {tabValue === TabValue.Links && (
          <div>
            <List>
              <ListItem>
                <ListItemText
                  primary="Article"
                  secondary={launch.links.article_link}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Wikipedia"
                  secondary={launch.links.wikipedia}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Video"
                  secondary={launch.links.video_link}
                />
              </ListItem>
            </List>
          </div>
        )}
        {tabValue === TabValue.Json && (
          <div>
            <TextHighlighter
              language="Json"
              text={JSON.stringify(launch, null, 2)}
            />
          </div>
        )}
      </Box>
    </Box>
  );
}
