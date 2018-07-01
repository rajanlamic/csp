import * as React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ScheduleVisualizerForm from '../ScheduleVisualizerForm';
import { Form, Dropdown, Button } from 'semantic-ui-react';

describe('ScheduleVisualizerForm', () => {
  let component, props;
  
  beforeEach(() => {
    props = {
      channel: 'Sky Heart', 
      scheduleDate: '2018-02-02',
      onUpdateSchedulDate: jest.fn(),
      onUpdateChannel: jest.fn(),
      onSubmitToView: jest.fn(),
      submitHandler: jest.fn()
    }
    component = shallow(<ScheduleVisualizerForm />);
  })
  afterEach(() => {
    component = null;
    props = null;
  })
  
  it('should render ScheduleVisualizerForm component properly using snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  
})
