export const SCHEDULER = {
  LOAD: 'SCHEDULER/LOAD',
  UPATE_CHANNEL : 'SCHEDULER/UPATE_CHANNEL',
  UPATE_SCHEDULE_DATE : 'SCHEDULER/UPATE_SCHEDULE_DATE',
  SET_ERROR : 'SCHEDULER/SET_ERROR',
}

export const defaultState = {
  isFetching: false,
  isFetched: false,
  isFailed: false,
  error: '',
  channel: '',
  scheduleDate: '',
  data: []
}
