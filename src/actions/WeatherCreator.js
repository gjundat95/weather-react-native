import { SET_ZIP, SET_FORECAST } from './Type';

export const setZip = (zip)=>{
  return {
    type: SET_ZIP,
    zip: zip,
  };
};
export const setForecast = (main, descriptions, temp)=>{
  return {
    type: SET_FORECAST,
    main: main,
    descriptions: descriptions,
    temp: temp,
  };
};
