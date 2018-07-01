import { combineReducers } from 'redux';
import { schedule } from '../src/ScheduleVisualizerContainer/scheduleVisualizer-reducer';

const CombinedReducers = combineReducers({
  schedule
});

export default CombinedReducers;