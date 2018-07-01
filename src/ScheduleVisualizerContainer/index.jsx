import React from 'react';
import ScheduleVisualizerForm from './ScheduleVisualizerForm';
import ScheduleVisualizer from './ScheduleVisualizer';
import { Grid } from 'semantic-ui-react';

const ScheduleVisualizerContainer = () => (
    <Grid divided="vertically" padded="horizontally">
        <Grid.Row>
            <Grid.Column width={4}>
                <ScheduleVisualizerForm />
            </Grid.Column>
            <Grid.Column width={4}>
                <ScheduleVisualizer />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default ScheduleVisualizerContainer;