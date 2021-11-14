import { ASC, DESC, MAYOR, MINOR, RESET } from "../constantes/constantes";
import axios from "axios";

export const GET_ERROR = "GET_ERROR";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_GENRES = "GET_GENRES";
export const GET_FAVORITES = "GET_FAVORITES";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const SORT_GAMES = "SORT_GAMES";
export const ALL_FILTERS = "ALL_FILTERS";
export const RESET_FILTERS = "RESET_FILTERS";

export const getGenres = () => {
  return function (dispatch) {
    axios.get(`http://127.0.0.1:3001/api/genres`)
      .then((genres) => {
        dispatch({
          type: GET_GENRES,
          payload: genres.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getPlatforms = () => {
  return function (dispatch) {
    axios.get(`http://127.0.0.1:3001/api/platforms`)
      .then((platforms) => {
        dispatch({
          type: GET_PLATFORMS,
          payload: platforms.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getVideogames = () => {
  return function (dispatch) {
    axios.get(`http://127.0.0.1:3001/api/videogames`)
      .then((videogames) => {
        console.log(videogames)
        videogames.error
        ? dispatch({
          type: GET_ERROR,
          payload: videogames,
        })
        : dispatch({
          type: GET_VIDEOGAMES,
          payload: videogames.data,
        });
      })
      .catch((error) => {
        console.error("SOY EL ERRROOOOOOORRRR",error);
      });
  };
};
export const getFavorites = () => {
  return function (dispatch) {
    axios.get(`http://127.0.0.1:3001/api/videogames`)
      .then((favorites) => {
        favorites.error
        ? dispatch({
          type: GET_ERROR,
          payload: favorites,
        })
        : dispatch({
          type: GET_FAVORITES,
          payload: favorites,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const searchVideogames = (search) => {
  return function (dispatch) {
    axios.get(`http://127.0.0.1:3001/api/videogames?name=${search}`)
       .then((videogames) => {
        dispatch({
          type: SEARCH_VIDEOGAMES,
          payload: videogames,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const sortGames = (data) => {
  let sort = data.value;
  let by = "";
  if (sort === ASC || sort === DESC) by = "name";
  if (sort === MINOR || sort === MAYOR) by = "rating";
  return {
    type: SORT_GAMES,
    payload: { sort, by },
  };
};

export const allFilters = (data) => {
  if (data.name === RESET) return { type: RESET_FILTERS, payload: data };
  return {
    type: ALL_FILTERS,
    payload: data,
  };
};
