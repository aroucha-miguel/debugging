import React from 'react';
import {
  compose, graphql,
} from 'react-apollo';
import FOOD_ENTRIES from './queries/foodEntries';
import CHECK_FOOD_ENTRY from './mutations/checkFoodEntry';

class RightComponent extends React.Component {
  checkFood = (id, isEnabled) => {
    const {
      CheckFoodEntry,
    } = this.props;
    CheckFoodEntry({
      variables: {
        id,
        isEnabled
      },
    });
  }

  render() {
    const {
      foodEntriesData,
    } = this.props;
    return (
      <div className="Box">
      {foodEntriesData.foodEntries && foodEntriesData.foodEntries.map(
        ({ id, name, isEnabled }) => {
          return (
            <div key={id}>
              <button
                onClick={() => this.checkFood(id, !isEnabled)}
              >
                {name}
              </button>
            </div>
          );
        }
      )}
      </div>
    );
  }
}

export default compose(
  // graphql(LOCALE, {
  //   name: 'localeData',
  // }),
  graphql(FOOD_ENTRIES, {
    name: 'foodEntriesData',
  }),
  graphql(CHECK_FOOD_ENTRY, {
    name: 'CheckFoodEntry',
  }),
)(RightComponent);
