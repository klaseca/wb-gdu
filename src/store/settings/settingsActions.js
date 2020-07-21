export const INIT_SETTINGS = 'INIT_SETTINGS';
export const CHANGE_PATH = 'CHANGE_PATH';
export const SHOW_MULTI_BLOCK = 'SHOW_MULTI_BLOCK';
export const IS_SINGLE_PATHS = 'IS_SINGLE_PATHS';
export const CHANGE_AUTO_UPDATE_TYPE = 'CHANGE_AUTO_UPDATE_TYPE';
export const CHANGE_MANUAL_UPDATE_SERVER = 'CHANGE_MANUAL_UPDATE_SERVER';
export const ADD_PATH = 'ADD_PATH';
export const REMOVE_PATH = 'REMOVE_PATH';
export const CHANGE_STATE_CHECKBOX = 'CHANGE_SERVER_CHECKBOX';

export const initSettings = (payload) => ({
  type: INIT_SETTINGS,
  payload,
});

export const setPath = ({ target: { value } }) => ({
  type: CHANGE_PATH,
  payload: value,
});

export const resetPath = () => ({
  type: CHANGE_PATH,
  payload: '',
});

export const setAutoUpdateType = (value) => ({
  type: CHANGE_AUTO_UPDATE_TYPE,
  payload: value,
});

export const setManualUpdateServer = (value) => ({
  type: CHANGE_MANUAL_UPDATE_SERVER,
  payload: value,
});

export const setShowSelectBlock = () => ({
  type: SHOW_MULTI_BLOCK,
});

export const setIsSinglePaths = (bool) => ({
  type: IS_SINGLE_PATHS,
  payload: bool,
});

export const addPath = (payload) => ({
  type: ADD_PATH,
  payload,
});

export const removePath = (id) => ({
  type: REMOVE_PATH,
  payload: id,
});

export const setStateCheckbox = (id) => ({
  type: CHANGE_STATE_CHECKBOX,
  payload: id,
});
