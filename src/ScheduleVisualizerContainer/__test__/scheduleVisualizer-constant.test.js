import { SCHEDULER } from '../scheduleVisualizer-constant';

describe('SCHEDULER Constants', () => {
    it('should return SCHEDULER constant', () => {
        expect(SCHEDULER.LOAD).toEqual('SCHEDULER/LOAD');
        expect(SCHEDULER.UPATE_CHANNEL).toEqual('SCHEDULER/UPATE_CHANNEL');
        expect(SCHEDULER.UPATE_SCHEDULE_DATE).toEqual('SCHEDULER/UPATE_SCHEDULE_DATE');
        expect(SCHEDULER.SET_ERROR).toEqual('SCHEDULER/SET_ERROR');
    })
})
