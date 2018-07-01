import React from 'react';
import DatePicker from 'react-datepicker';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import channelOptions from 'Shared/channels';

const ScheduleVisualizerForm = () => (
    <Form>
        <Form.Field>
            <label>Channel</label>
            <Dropdown placeholder='Select a channel' search selection options={channelOptions} />
        </Form.Field>
        <Form.Field>
            <label>Schedule Date</label>
            <DatePicker
                dateFormat="DD/MM/YYYY"
                customInput= {
                    <InputMask mask="99/99/9999"/>
                }
            />
        </Form.Field>
        <Button type='submit'>View Schedule</Button>
    </Form>
);

export default ScheduleVisualizerForm;