import { schedule as reducer} from '../scheduleVisualizer-reducer';
import { SCHEDULER } from '../scheduleVisualizer-constant';

describe('Basket reducers', () => {
  let defaultState;
  beforeEach(() => {
    defaultState = {
      isFetching: false,
      isFetched: false,
      isFailed: false,
      error: '',
      channel: '',
      scheduleDate: '',
      data: []
    }
  })

  afterEach(() => {
    defaultState = null;
  })

  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  })

  describe('schedule reducers', () => {

    it('should handle SCHEDULER PENDING', () => {
      expect(reducer({},{type: `${SCHEDULER.LOAD}_PENDING`})).toEqual({  isFetching: true })
    })

    it('should handle SCHEDULER FULFILLED', () => {
      let payload = {
        data: [
          {
            channel:"Sky Heart",
            date:"2018-06-12",
            slots: [
              {
                startTime:"06:00",
                endTime:"07:00",
                titleName:"The Amazing Spiderman"
              }
              ]
            }
        ]
      }
      expect(reducer({},{
        type: `${SCHEDULER.LOAD}_FULFILLED`,
        payload
      })).toEqual({"data": [{"channel": "Sky Heart", "date": "2018-06-12", "slots": [{"endTime": "07:00", "startTime": "06:00", "titleName": "The Amazing Spiderman"}]}], "isFetched": true, "isFetchig": false})
    })

    it('should handle SCHEDULER REJECTED', () => {
      expect(reducer({},{type: `${SCHEDULER.LOAD}_REJECTED`})).toEqual(
        {  isFetchig: false,
          isFetched: false,
          isFailed: true })
    })

    it('should handle SET_ERROR', () => {
      expect(reducer({},{type: `${SCHEDULER.SET_ERROR}`, error: 'error'})).toEqual(
        { error: 'error' })
    })
    
  })

})
