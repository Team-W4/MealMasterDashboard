
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../../actions';
import UserEditPage from '../components/UserEditPage';

const mapStateToProps = (state: any) => ({
  profile: state.user.profile,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      updateProfile: userActions.updateProfile,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEditPage);
