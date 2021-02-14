import React from 'react';
import { connect } from 'react-redux';
import { fetchEventAction } from '../actions/eventActions';

const Events = (props) => {
  console.log('PROPS ====', props.events);
  return <h1>Events</h1>;
};

Events.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchEventAction());
  return {};
};

const mapStateToProps = ({ events }) => {
  return { events };
};

export default connect(mapStateToProps)(Events);
