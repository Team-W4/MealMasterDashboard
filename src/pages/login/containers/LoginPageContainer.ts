import { bindActionCreators } from 'redux';
import { userActions } from '../../../actions';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onLogin: userActions.login,
      onRegister: userActions.register,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
