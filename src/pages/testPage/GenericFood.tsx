import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recipeActions } from '../../../actions';

export type Props = {
  foodId: number;
  getGenericFoodById: (id: number) => void;
};

class GenericFood extends React.Component<Props> {
  public componentDidMount(): void {
    const { foodId, getGenericFoodById } = this.props;
    getGenericFoodById(foodId);
  }

  public render(): JSX.Element {

    return (
      <h1> We got this </h1>
        )
    );
  }
}

const mapStateToProps = (state: any) => ({
  userId: state.user.profile.id,
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        getGenericFoodById : recipeActions.getGenericFoodById;
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(testPage); // ask sean and daniel to make this work
