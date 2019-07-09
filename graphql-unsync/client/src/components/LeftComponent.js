import React from 'react';
import {
  compose, graphql,
} from 'react-apollo';
import TITLE from './queries/title';
import FOOD_ENTRIES from './queries/foodEntries';

const LeftComponent = ({
  titleData,
  foodEntriesData,
}) => {
  return (
    <div className="Box">
      {titleData.title && (
        <div>
          {titleData.title}
        </div>
      )}
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
  graphql(TITLE, {
    name: 'titleData',
  }),
  graphql(FOOD_ENTRIES, {
    name: 'foodEntriesData',
  }),
)(LeftComponent);
