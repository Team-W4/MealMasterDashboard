
import { connect } from 'react-redux';
import UserProfilePage from '../components/UserDetailsPage';

const mapStateToProps = (state: any) => ({
  profile: state.user.profile,
});

export default connect(
  mapStateToProps,
  null,
)(UserProfilePage);
