import React from 'react';
import {
  compose, graphql,
} from 'react-apollo';
import FOOD_ENTRIES from './queries/foodEntries';

const LeftComponent = ({
  foodEntriesData
}) => {
  return (
    <div className="Box">
      {foodEntriesData.foodEntries && foodEntriesData.foodEntries.map(
        ({ id, name, isEnabled }) => {
          if (isEnabled) {
            return (
              <div key={id}>
                {name}
              </div>
            )
          }
          return null;
        }
      )}
    </div>
  );
}

export default compose(
  // graphql(LOCALE, {
  //   name: 'localeData',
  // }),
  graphql(FOOD_ENTRIES, {
    name: 'foodEntriesData',
  }),
)(LeftComponent);
