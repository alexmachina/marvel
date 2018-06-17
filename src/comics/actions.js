import { fetchComics } from '../api/comics';

export const FETCH_COMICS_START = 'COMICS/FETCH_COMICS_START';
export const FETCH_COMICS_SUCCESS = 'COMICS/FETCH_COMICS_SUCCESS';
export const FETCH_COMICS_ERROR = 'COMICS/FETCH_COMICS_ERROR';

export const getComics = params => async (dispatch) => {
  dispatch({ type: FETCH_COMICS_START });
  try {
    const data = fetchComics(params);
    dispatch({ type: FETCH_COMICS_SUCCESS, data });
  } catch (error) {
    console.error(error);
    dispatch({ type: FETCH_COMICS_ERROR, error });
  }
};

export const UPDATE_APP_STATE = 'COMICS/UPDATE_APP_STATE';

export const updateAppState = nextAppState => dispatch =>
  dispatch({ type: UPDATE_APP_STATE, nextAppState });

