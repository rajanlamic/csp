import React from 'react';
import DatePicker from 'react-datepicker';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import channelOptions from 'Shared/channels';

const ScheduleVisualizerForm = props => {

    const dropDownHandler = e => {
        props.onUpdateChannel(e.target.value || e.target.textContent);
    }

    const datePickerHandler = date => {
        props.onUpdateSchedulDate(date);
    }

    const submitHandler = () =>{
        props.onSubmitToView(props.channel, props.scheduleDate);
    }

    return (
    <Form>
        <Form.Field>
            <label>Channel</label>
            <Dropdown onChange={dropDownHandler}
                placeholder='Select a channel' search selection options={channelOptions} />
        </Form.Field>
        <Form.Field>
            <label>Schedule Date</label>
            <DatePicker onChange={datePickerHandler}
                dateFormat="DD/MM/YYYY"
                customInput= {
                    <InputMask mask="99/99/9999"/>
                }
            />
        </Form.Field>
        {
            props.error && (<div class="error">{props.error}</div>)
        }
        <Button type='submit' onClick={submitHandler}>View Schedule</Button>
    </Form>);
}

export default ScheduleVisualizerForm;