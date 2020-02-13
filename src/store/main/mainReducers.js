import {
  CHANGE_VALUE,
  SHOW_SELECT_BLOCK,
  CHANGE_AUTO_UPDATE,
  CHANGE_IS_TOAST,
  CHANGE_TOAST_DATA
} from './mainActions';

const defaultState = {
  value: '',
  showBlock: true,
  isAutoUpdate: true,
  isToast: false,
  toastData: {
    text: '',
    severity: ''
  }
};

const handlers = {
  [CHANGE_VALUE](state, value) {
    return {
      ...state,
      value
    };
  },
  [SHOW_SELECT_BLOCK](state) {
    return {
      ...state,
      showBlock: !state.showBlock
    };
  },
  [CHANGE_AUTO_UPDATE](state, isAutoUpdate) {
    return {
      ...state,
      isAutoUpdate
    }
  },
  [CHANGE_IS_TOAST](state, isToast) {
    return {
      ...state,
      isToast
    }
  },
  [CHANGE_TOAST_DATA](state, toastData) {
    return {
      ...state,
      toastData
    }
  }
};

export const mainReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  const handler = handlers[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};
