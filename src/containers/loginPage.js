import Login from '../components/login';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch({
        type: 'LOG_IN',
      });
      browserHistory.push('/');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
