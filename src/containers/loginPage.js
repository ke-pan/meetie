import Login from '../components/login';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

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

export default connect(null, mapDispatchToProps)(Login)
