import axios from 'axios';

export const loadSchedules = (channel, scheduleDate) => {
	return axios.get( `http://localhost:3001/schedule-repo/api/v1/schedule?channel=${channel}&date=${scheduleDate}`, {});
}
