export const CHANGE_PATH = 'CHANGE_PATH';
export const SHOW_MULTI_BLOCK = 'SHOW_MULTI_BLOCK';
export const IS_SINGLE_PATHS = 'IS_SINGLE_PATHS';
export const CHANGE_AUTO_UPDATE_TYPE = 'CHANGE_AUTO_UPDATE_TYPE';
export const CHANGE_MANUAL_UPDATE_SERVER = 'CHANGE_MANUAL_UPDATE_SERVER';
export const CHANGE_PATHS = 'CHANGE_PATHS';
export const ADD_PATH = 'ADD_PATH';
export const REMOVE_PATH = 'REMOVE_PATH';
export const CHANGE_STATE_CHECKBOX = 'CHANGE_SERVER_CHECKBOX';
export const ENABLE_CHECKBOX = 'ENABLE_CHECKBOX';

export const setPath = ({ target: { value } }) => ({
  type: CHANGE_PATH,
  payload: value
});

export const resetPath = () => ({
  type: CHANGE_PATH,
  payload: ''
});

export const setAutoUpdateType = value => ({
  type: CHANGE_AUTO_UPDATE_TYPE,
  payload: value
});

export const setManualUpdateServer = value => ({
  type: CHANGE_MANUAL_UPDATE_SERVER,
  payload: value
});

export const setShowSelectBlock = () => ({
  type: SHOW_MULTI_BLOCK
});

export const setIsSinglePaths = bool => ({
  type: IS_SINGLE_PATHS,
  payload: bool
});

export const setPaths = paths => ({
  type: CHANGE_PATHS,
  payload: paths
});

export const addPath = path => ({
  type: ADD_PATH,
  payload: path
});

export const setStateCheckbox = id => ({
  type: CHANGE_STATE_CHECKBOX,
  payload: id
});

export const enableCheckbox = id => ({
  type: ENABLE_CHECKBOX,
  payload: id
});
