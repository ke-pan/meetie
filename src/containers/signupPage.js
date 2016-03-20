import Signup from '../components/signup';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => {
      dispatch({
        type: 'SIGN_UP',
        user
      });
      browserHistory.push('login');
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup)
