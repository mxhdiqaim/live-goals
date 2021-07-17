import {
  STANDINGS,
  LINE_UPS,
  COUNTRIES,
  TEAMS,
  PLAYERS,
  EVENTS,
  LEAGUES,
} from './types';

const footballReducer = (state, action) => {
  switch (action.type) {
    case STANDINGS:
      return { ...state };
  }
};
