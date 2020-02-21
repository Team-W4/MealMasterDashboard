import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { genericFoodActions } from '../../actions';

class GenericFood extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getGenericFoodById(42);
    actions.searchGenericFood('a');
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log(this.props);
    }
  }

  render() {
    return <h1> We got this </h1>;
  }
}

const mapStateToProps = state => ({
  foodDetails: state.food.foodDetails,
  foods: state.food.foods,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(genericFoodActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenericFood); // ask sean and daniel to make this work
