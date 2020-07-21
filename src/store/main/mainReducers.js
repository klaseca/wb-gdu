import {
  CHANGE_VALUE,
  SHOW_SELECT_BLOCK,
  CHANGE_AUTO_UPDATE,
  CHANGE_IS_TOAST,
  CHANGE_TOAST_DATA,
  CHANGE_IS_UPDATING,
  CHANGE_IS_UPDATED,
  CHANGE_UPDATE_RESULT,
} from './mainActions';

const defaultState = {
  value: '',
  showBlock: true,
  isAutoUpdate: true,
  isUpdating: false,
  isUpdated: false,
  successResult: [],
  failResult: [],
  isToast: false,
  toastData: {
    text: '',
    severity: '',
  },
};

const handlers = {
  [CHANGE_VALUE](state, value) {
    return {
      ...state,
      value,
    };
  },
  [SHOW_SELECT_BLOCK](state) {
    return {
      ...state,
      showBlock: !state.showBlock,
    };
  },
  [CHANGE_AUTO_UPDATE](state, isAutoUpdate) {
    return {
      ...state,
      isAutoUpdate,
    };
  },
  [CHANGE_IS_TOAST](state, isToast) {
    return {
      ...state,
      isToast,
    };
  },
  [CHANGE_TOAST_DATA](state, toastData) {
    return {
      ...state,
      toastData,
    };
  },
  [CHANGE_IS_UPDATING](state, isUpdating) {
    return {
      ...state,
      isUpdating,
    };
  },
  [CHANGE_IS_UPDATED](state, isUpdated) {
    return {
      ...state,
      isUpdated,
    };
  },
  [CHANGE_UPDATE_RESULT](state, payload) {
    return {
      ...state,
      ...payload,
    };
  },
};

export const mainReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  const handler = handlers[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};
