import { SCHEDULER } from './scheduleVisualizer-constant';
import { loadSchedules as loadSchedulesApi } from './scheduleVisualizer-api';
import moment from 'moment';

export const updateChannel = (channel) => {
  return {
    type: SCHEDULER.UPATE_CHANNEL,
    channel
  }
}

export const updateScheduleDate = (date) => {
  return {
    type: SCHEDULER.UPATE_SCHEDULE_DATE,
    date
  }
}

export const setError = (error) => {
  return {
    type: SCHEDULER.SET_ERROR,
    error
  }
}

export const loadSchedules = (channel, scheduleDate) => {
  console.log('moment', moment.now());
  return async (dispatch) => {
    try {
      dispatch({
        type: `${SCHEDULER.LOAD}_PENDING`
      });

      let data = await loadSchedulesApi(channel, moment(scheduleDate).format('YYYY-MM-DD'));
      if(data) {
        dispatch({
          type: `${SCHEDULER.LOAD}_FULFILLED`,
          payload: data
        });
      } else {
        dispatch({
          type: `${SCHEDULER.LOAD}_REJECTED`
        });
      }
    } catch(err) {
      console.log('load schedule error', err);
      dispatch({
        type: `${SCHEDULER.LOAD}_REJECTED`
      });
    }
  }
}
