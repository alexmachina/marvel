import { fetchComics, fetchComicCharacters } from '../api/comics';

export const FETCH_COMICS_START = 'COMICS/FETCH_COMICS_START';
export const FETCH_COMICS_SUCCESS = 'COMICS/FETCH_COMICS_SUCCESS';
export const FETCH_COMICS_ERROR = 'COMICS/FETCH_COMICS_ERROR';

export const FETCH_COMIC_CHARACTERS_START = 'COMIC/FETCH_COMIC_CHARACTERS_START';
export const FETCH_COMIC_CHARACTERS_SUCCESS = 'COMIC/FETCH_COMIC_CHARACTERS_SUCCESS';
export const FETCH_COMIC_CHARACTERS_ERROR = 'COMIC/FETCH_COMIC_CHARACTERS_ERROR';

export const getComics = params => async (dispatch) => {
  dispatch({ type: FETCH_COMICS_START });
  try {
    const data = await fetchComics(params);
    dispatch({ type: FETCH_COMICS_SUCCESS, data });
  } catch (error) {
    console.error(error);
    dispatch({ type: FETCH_COMICS_ERROR, error });
  }
};

export const getComicCharacters = params => async (dispatch) => {
  dispatch({ type: FETCH_COMIC_CHARACTERS_START, ...params });
  try {
    const data = await fetchComicCharacters(params);
    dispatch({ type: FETCH_COMIC_CHARACTERS_SUCCESS, data, ...params });
  } catch (error) {
    console.error(error);
    dispatch({ type: FETCH_COMIC_CHARACTERS_ERROR, error });
  }
};

export const UPDATE_APP_STATE = 'COMICS/UPDATE_APP_STATE';

export const updateAppState = nextAppState => dispatch =>
  dispatch({ type: UPDATE_APP_STATE, nextAppState });

