import React from 'react';
import { Grid } from 'semantic-ui-react';

export const ScheduleVisualizerItem = ({item}) => {
    return (<Grid.Row>
          <Grid.Column width={4}>{item.startTime}</Grid.Column>
          <Grid.Column width={4}>{item.endTime}</Grid.Column>
          <Grid.Column width={8}>{item.titleName}</Grid.Column>
        </Grid.Row>)
}
