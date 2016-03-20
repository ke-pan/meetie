import EventList from '../components/eventList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    data: state.events,
  }
}

export default connect(mapStateToProps, null)(EventList)
