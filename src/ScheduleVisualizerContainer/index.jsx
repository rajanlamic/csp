import React from 'react';
import ScheduleVisualizerForm from './ScheduleVisualizerForm';
import ScheduleVisualizer from './ScheduleVisualizer';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateChannel, updateScheduleDate, setError, loadSchedules } from './scheduleVisualizer-actions';
import './schedule-visualizer.css';
class ScheduleVisualizerContainer extends React.Component {
    render() {
        return (<Grid divided="vertically" padded="horizontally">
        <Grid.Row>
            <Grid.Column width={4}>
                <ScheduleVisualizerForm {...this.props} />
            </Grid.Column>
            <Grid.Column width={8}>
                <ScheduleVisualizer {...this.props} />
            </Grid.Column>
        </Grid.Row>
    </Grid>);
    }
}

const mapStateToProps = (state) => {
  return {
    channel: state.schedule.channel,
    scheduleDate: state.schedule.scheduleDate,
    error: state.schedule.error,
    schedules: state.schedule.isFetched && state.schedule.data && state.schedule.data[0] &&
      state.schedule.data[0].slots
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    onUpdateChannel: (channel) => {
      dispatch(updateChannel(channel))
    },
    onUpdateSchedulDate: (date) => {
      dispatch(updateScheduleDate(date))
    },
    onSubmitToView: (channel, scheduleDate) =>{
      if(!channel || !scheduleDate) {
        dispatch(setError('Please provide all fields before submitting'));
      } else {
        dispatch(setError(''));
        dispatch(loadSchedules(channel, scheduleDate));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleVisualizerContainer);
