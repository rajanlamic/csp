import { SCHEDULER, defaultState } from './scheduleVisualizer-constant';

export function schedule(state = defaultState, action) {

  switch (action.type) {

    case `${SCHEDULER.LOAD}_PENDING`:
      return {
        ...state,
        ...{
          isFetching: true,
        }
      }
      case `${SCHEDULER.LOAD}_REJECTED`:
      return {
        ...state,
        ...{
          isFetchig: false,
          isFetched: false,
          isFailed: true
        }
      }

    case `${SCHEDULER.LOAD}_FULFILLED`:
      return {
        ...state,
        ...{
          isFetchig: false,
          isFetched: true,
          data:action.payload.data
        }
      } 
    case `${SCHEDULER.UPATE_CHANNEL}`:
      return {
        ...state,
        ...{
          channel: action.channel,
        }
      }
    case `${SCHEDULER.UPATE_SCHEDULE_DATE}`:
      return {
        ...state,
        ...{
          scheduleDate: action.date,
        }
      } 
    case `${SCHEDULER.SET_ERROR}`:
      return {
        ...state,
        ...{
          error: action.error,
        }
      } 
      
    default:
      return state;
  }
}
