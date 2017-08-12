import { handleActions } from 'redux-actions';
import {
  TEAM_STANDINGS_REQUESTED,
  TEAM_STANDINGS_ERROR,
  TEAM_STANDINGS_RECEIVED,
  BRACKETS_REQUESTED,
  BRACKETS_RECEIVED,
  BRACKETS_ERROR,
} from './actions';

const initialState = {
  requestingTeamStandings: false,
  allTeamStats: [],
  brackets: [],
};

export default handleActions({
  [TEAM_STANDINGS_REQUESTED]: (state, action) => ({
    ...state,
    requestingTeamStandings: true,
  }),
  [TEAM_STANDINGS_RECEIVED]: (state, action) => ({
    ...state,
    allTeamStats: action.allTeamStats,
    requestingTeamStandings: false,
  }),
  [TEAM_STANDINGS_ERROR]: (state, action) => ({
    ...state,
    requestingTeamStandings: false,
  }),
  [BRACKETS_RECEIVED]: (state, action) => ({
    ...state,
    brackets: action.brackets,
    requestingBrackets: false,
  }),
  [BRACKETS_REQUESTED]: (state, action) => ({
    ...state,
    requestingBrackets: true,
  }),
  [BRACKETS_ERROR]: (state, action) => ({
    ...state,
    requestingBrackets: false,
  }),
}, initialState);
