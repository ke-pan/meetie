import EventForm from '../components/eventForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
  return {
    data: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event) => {
      dispatch({
        type: 'ADD_EVENT',
        event
      });
      browserHistory.push('/');
    }
  }
}

export default connect(null, mapDispatchToProps)(EventForm)
