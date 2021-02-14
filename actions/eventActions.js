import axios from 'axios';

export const fetchEventAction = () => async (dispatch) => {
  try {
    console.log('FETCHING THEM HERE');
    const { data } = await axios.get('https://www.thecultor.com/api/event');
    dispatch({
      type: 'EVENTS',
      payload: data,
    });
  } catch (error) {
    console.log('UNABLE TO FETCH EVENTS FROM THE API');
  }
};
