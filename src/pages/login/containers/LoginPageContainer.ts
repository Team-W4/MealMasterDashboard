import { bindActionCreators } from 'redux';
import { userActions } from '../../../actions';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onLogin: userActions.logIn,
      onRegister: userActions.register,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
