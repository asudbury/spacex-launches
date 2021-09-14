import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Tabs, Tab } from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import LanguageIcon from '@material-ui/icons/Language';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { useGetLaunchesQuery } from '../redux/spaceXApi';
import TextHighlighter from './textHighlighter';
import LaunchLinks from './launchLinks';
import LaunchRocket from './launchRocket';
import LaunchMission from './launchMission';

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
    <Box p={1}>
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
        {tabValue === TabValue.Mission && <LaunchMission launch={launch} />}
        {tabValue === TabValue.Rocket && (
          <LaunchRocket rocket={launch.rocket} />
        )}
        {tabValue === TabValue.Links && <LaunchLinks links={launch.links} />}
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
