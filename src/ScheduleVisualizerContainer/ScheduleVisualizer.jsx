import React from 'react';
import { ScheduleVisualizerItem } from './ScheduleVisualizerItem';
import { Grid } from 'semantic-ui-react';

const ScheduleVisualizer = (props) => {
    return (<Grid divided="vertically" padded="horizontally">
      {
        props.schedules && props.schedules.length && props.schedules.map((item, indx) => {
          return <ScheduleVisualizerItem key={indx} item={item} />;
        })
      }
      {
        !props.schedules && ('No schedules to be displayed')
      }
      
    </Grid>)
}

export default ScheduleVisualizer;
