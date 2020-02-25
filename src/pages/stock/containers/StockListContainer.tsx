import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { stockActions } from '../../../actions';
import Box from '../../../components/Containers/Box';
import StockListCard from '../components/StockListCard';
import ScrollList from '../../../components/ScrollList';

export type Props = {
  navigation: any;
  userId: number;
  stocks: Array<any>;
  getStockByUserId: (id: number) => void;
};

class StockListPage extends React.Component<Props> {
  public componentDidMount(): void {
    const { userId } = this.props;
    this.props.getStockByUserId(userId);
  }

  public render(): JSX.Element {
    const { stocks, navigation } = this.props;

    return (
      <ScrollList>
        {(stocks || []).map((item, index) => (
          <Box key={index} mb="xl">
            <
              title={item.name}
              tag={item.tags[0].name}
              // TODO: Adds image & difficulty
              imageURI="https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg"
              duration={item.cookTime}
              difficulty="Easy"
              quantity={item.yield}
              onPress={() =>
                navigation.navigate('RecipeDetails', { id: item.id })
              }
            />
          </Box>
        ))}
      </ScrollList>
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
      getRecipesByUser: recipeActions.getRecipesByUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeListPage);
