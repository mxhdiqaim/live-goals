import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import FootballContext from './footballContext';
import FootballReducer from './footballReducer';

import {
  STANDINGS,
  LINE_UPS,
  COUNTRIES,
  TEAMS,
  PLAYERS,
  EVENTS,
  LEAGUES,
} from './types';

const FootballState = {children} => {
  const initialState = {
    countries: [],
    country: {},
  };
  const [state, dispatch] = useReducer(FootballReducer, initialState);

  return (
    <FootballContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
      }}>
      {children}
    </FootballContext.Provider>
  );
};
