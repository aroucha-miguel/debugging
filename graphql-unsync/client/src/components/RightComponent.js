import React from 'react';
import {
  compose, graphql,
} from 'react-apollo';
import TITLE from './queries/title';
import FOOD_ENTRIES from './queries/foodEntries';
import SET_TITLE from './mutations/setTitle';
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

  changeTitle = () => {
    const {
      titleData,
      SetTitle,
    } = this.props;
    let title = 'hello there';
    if (titleData.title === 'hello there') {
      title = 'general kenobi';
    }
    SetTitle({
      variables: {
        title,
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
      <div>
        <button
          onClick={this.changeTitle}
        >
          Change Title
        </button>
      </div>
      </div>
    );
  }
}

export default compose(
  graphql(TITLE, {
    name: 'titleData',
  }),
  graphql(FOOD_ENTRIES, {
    name: 'foodEntriesData',
  }),
  graphql(SET_TITLE, {
    name: 'SetTitle',
  }),
  graphql(CHECK_FOOD_ENTRY, {
    name: 'CheckFoodEntry',
  }),
)(RightComponent);
