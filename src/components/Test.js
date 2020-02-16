import React from 'react';
import { recipeActions } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImageCard from '../components/Cards/ImageCard';

class Test extends React.Component {
  componentDidMount() {
    this.props.actions.getRecipeById(3);
  }

  render() {
    const { recipe } = this.props;
    return (
      <ImageCard
        title={recipe.name}
        tag={recipe.tags ? recipe.tags[0].name : 'Healthy!'}
        duration={5}
        difficulty={'easy'}
        quantity={recipe.yield}
      />
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.recipes,
  recipe: state.recipe.recipe,
  isFetching: state.recipe.isFetching,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(recipeActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
