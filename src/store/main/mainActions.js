export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_STATE_CHECKBOX = 'CHANGE_SERVER_CHECKBOX';
export const SHOW_SELECT_BLOCK = 'SHOW_SELECT_BLOCK';
export const CHANGE_AUTO_UPDATE = 'IS_AUTO_UPDATE';
export const CHANGE_IS_TOAST = 'CHANGE_IS_TOAST';
export const CHANGE_TOAST_DATA = 'CHANGE_TOAST_DATA';

export const setValue = ({ target: { value } }) => ({
  type: CHANGE_VALUE,
  payload: value
});

export const resetValue = () => ({
  type: CHANGE_VALUE,
  payload: ''
});

export const setShowSelectBlock = () => ({
  type: SHOW_SELECT_BLOCK
});

export const setIsAutoUpdate = isAutoUpdate => ({
  type: CHANGE_AUTO_UPDATE,
  payload: isAutoUpdate
});

export const setIsToast = bool => ({
  type: CHANGE_IS_TOAST,
  payload: bool
});

export const setToastData = data => ({
  type: CHANGE_TOAST_DATA,
  payload: data
});
