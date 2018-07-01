import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ScheduleVisualizer from '../ScheduleVisualizer';
import { ScheduleVisualizerItem } from '../ScheduleVisualizerItem';

describe('ScheduleVisualizer', () => {
  let component, props;
  
  beforeEach(() => {
    props = {
      schedules: [
        {
          startTime: "06:00",
          endTime: "07:00",
          titleName: "The Amazing Spiderman"
        }
      ]
    }
    component = shallow(<ScheduleVisualizer />);
  })
  afterEach(() => {
    component = null;
    props = null;
  })
  
  it('should render ScheduleVisualizer component properly using snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render ScheduleVisualizerItem if schedule is found', () => {
    component = shallow(<ScheduleVisualizer {...props} />);
    expect(component.find(ScheduleVisualizerItem).length).toEqual(1);
  })

  it('should not render ScheduleVisualizerItem if no schedule is found', () => {
    component = shallow(<ScheduleVisualizer />);
    expect(component.find(ScheduleVisualizerItem).length).toEqual(0);
  })
  
})
