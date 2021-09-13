import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { useGetLaunchesQuery } from '../redux/spaceXApi';
import { Launch } from '../types';
import TableIcons from './tableIcons';

const useStyles = makeStyles(() => ({
  nowrap: {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflow: 'auto'
  }
}));

export default function Launches(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  const { data, error, isLoading } = useGetLaunchesQuery('');

  let dataView = [];

  function handleSelectedRow(selectedRow: Launch | undefined) {
    if (selectedRow) {
      const url = `launch/${selectedRow.flight_number}`;
      history.push(url);
    }
  }

  if (isLoading) return <div>....loading</div>;
  if (error) return <div>error!</div>;
  if (data) {
    dataView = data.map((o) => ({ ...o }));
    /// we are assuming the data is in date ascending order!
    /// pretty sure this could be done better :-)
    dataView = dataView.slice(dataView.length - 50, dataView.length);

    return (
      <div>
        <MaterialTable
          data-testid="launchesTable"
          title=""
          icons={TableIcons}
          data={dataView}
          onRowClick={(evt, selectedRow) => handleSelectedRow(selectedRow)}
          columns={[
            {
              title: 'Flight',
              field: 'flight_number',
              width: '15%',
              render: (rowData, type) => {
                if (type === 'row') {
                  return (
                    <div className={classes.nowrap}>
                      <FlightTakeoffIcon fontSize="small" color="primary" />
                      {rowData.flight_number}
                    </div>
                  );
                }
                return rowData;
              }
            },
            {
              title: 'Mission',
              field: 'mission_name',
              width: '15%'
            },
            {
              title: 'Launch Date',
              field: 'launch_date_utc',
              render: (rowData, type) => {
                if (type === 'row') {
                  return (
                    <div className={classes.nowrap}>
                      {rowData.launch_date_utc}
                    </div>
                  );
                }
                return rowData;
              }
            },
            {
              title: 'Details',
              field: 'details'
            }
          ]}
          options={{
            padding: 'dense',
            pageSize: 10,
            exportButton: true,
            filtering: true
          }}
        />
      </div>
    );
  }
  return <div />;
}
