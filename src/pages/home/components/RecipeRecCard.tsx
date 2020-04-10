import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { Box, Grid, Row } from '../../../components/Containers';
import { Card } from '../../../components/Cards';
import { Heading, Subtitle, Text } from '../../../components/Texts';
import Rating from '../../../components/Rating';
import { ClockIcon, QuantityIcon, UtensilsIcon } from '../../../components/Icons';
import { Recipe } from '../../../constants/dataTypes';
import { recipeActions } from '../../../actions';

const RecipeRecImage = styled.Image`
  width: 350px;
  height: 450px;
  border-radius: 10px;
`;

export type Props = {
    recipeId: number;
    data: Recipe;
    getRecipeById: (id: number) => void;
}

class RecipeRecCard extends React.Component<Props> {
    public componentDidMount(): void {
        const { recipeId, getRecipeById } = this.props;
        getRecipeById(recipeId);
    }

    public render(): JSX.Element {
        const { data } = this.props;

        return (
          <Box>
            <RecipeRecImage
              source={{
                  uri: data && data.image,
                }}
            />
            <Box width="100%" height="100px" alignItems="center">
              <Box position="absolute" top="-80px" width="320px">
                <Card p="m">
                  <Heading mb="s">{titleHelper(data && data.name)}</Heading>
                  <Grid mb="m" alignItems="center">
                    <Row>
                      <Rating value={ (data && data.likes) || 5 } />
                    </Row>
                    <Row justifyContent="flex-end">
                      <Text variant="warning">670 kcal / serving</Text>
                    </Row>
                  </Grid>
                  <Grid>
                    <Row>
                      <ClockIcon mr="xs" size="small" variant="tertiary" />
                      <Subtitle>
                        {`${1 || 0} min${
                            Number(1) > 1 ? 's' : ''
                          }`}
                      </Subtitle>
                    </Row>
                    <Row>
                      <QuantityIcon mr="xs" size="small" variant="tertiary" />
                      <Subtitle>Easy</Subtitle>
                    </Row>
                    <Row>
                      <UtensilsIcon mr="xs" size="small" variant="tertiary" />
                      <Subtitle>
                        {`${3 || 0} serving${
                            Number(3) > 1 ? 's' : ''
                          }`}
                      </Subtitle>
                    </Row>
                  </Grid>
                </Card>
              </Box>
            </Box>
          </Box>
          );
    }
}

const mapStateToProps = (state: any) => ({
    data: state.recipe.recipeDetails,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getRecipeById: recipeActions.getRecipeById,
    },
    dispatch,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RecipeRecCard);
