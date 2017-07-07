import { SET_ZIP, SET_FORECAST } from '../actions/Type';

let initState = {
  zip: '0',
  main: 'clouds',
  descriptions: 'few clouds',
  temp: 0,
};

export const WeatherReducer = (state = initState, action)=>{
  switch (action.type) {
    case SET_ZIP:
      return {
        zip: action.zip,
        main: state.main,
        descriptions: state.descriptions,
        temp: state.temp,
      };
    case SET_FORECAST:
      return {
        zip: state.zip,
        main: action.main,
        descriptions: action.descriptions,
        temp: action.temp,
      };
    default:
      return state;
  }
};
