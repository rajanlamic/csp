import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { ScheduleVisualizerItem } from '../ScheduleVisualizerItem';

describe('ScheduleVisualizerItem', () => {
  let component, props;
  
  beforeEach(() => {
    props = { item: {
      startTime: "06:00",
      endTime: "07:00",
      titleName: "The Amazing Spiderman"
    }}
    component = shallow(<ScheduleVisualizerItem {...props} />);
  })
  afterEach(() => {
    component = null;
    props = null;
  })
  
  it('should render ScheduleVisualizerItem component properly using snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  
})
