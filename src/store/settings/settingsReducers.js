import {
  INIT_SETTINGS,
  IS_SINGLE_PATHS,
  SHOW_MULTI_BLOCK,
  CHANGE_PATH,
  CHANGE_AUTO_UPDATE_TYPE,
  CHANGE_MANUAL_UPDATE_SERVER,
  ADD_PATH,
  REMOVE_PATH,
  CHANGE_STATE_CHECKBOX,
} from './settingsActions';

const defaultState = {
  pathValue: '',
  showBlock: true,
  isSinglePaths: true,
  defaultUpdateType: 'none',
  manualUpdateServer: 'ru-alpha',
  singlePaths: [],
  multiPaths: [],
  servers: [
    {
      id: 1,
      name: 'ru-alpha',
      checked: false,
    },
    {
      id: 2,
      name: 'ru-bravo',
      checked: false,
    },
    {
      id: 3,
      name: 'ru-charlie',
      checked: false,
    },
  ],
};

const handlers = {
  [INIT_SETTINGS](state, payload) {
    return {
      ...state,
      ...payload,
    };
  },
  [CHANGE_PATH](state, pathValue) {
    return {
      ...state,
      pathValue,
    };
  },
  [SHOW_MULTI_BLOCK](state) {
    return {
      ...state,
      showBlock: !state.showBlock,
    };
  },
  [IS_SINGLE_PATHS](state, isSinglePaths) {
    return {
      ...state,
      isSinglePaths,
    };
  },
  [CHANGE_AUTO_UPDATE_TYPE](state, defaultUpdateType) {
    return {
      ...state,
      defaultUpdateType,
    };
  },
  [CHANGE_MANUAL_UPDATE_SERVER](state, manualUpdateServer) {
    return {
      ...state,
      manualUpdateServer,
    };
  },
  [ADD_PATH](state, payload) {
    const paths = state.isSinglePaths
      ? { singlePaths: [...state.singlePaths, payload] }
      : { multiPaths: [...state.multiPaths, payload] };

    return {
      ...state,
      ...paths,
    };
  },
  [REMOVE_PATH](state, id) {
    const pathsInState = state.isSinglePaths
      ? [...state.singlePaths]
      : [...state.multiPaths];

    const newPaths = pathsInState.filter(path => path.id !== id);

    const paths = state.isSinglePaths
      ? { singlePaths: newPaths }
      : { multiPaths: newPaths };

    return {
      ...state,
      ...paths,
    }
  },
  [CHANGE_STATE_CHECKBOX](state, id) {
    const servers = state.servers.map((server) => {
      if (server.id === id) server.checked = !server.checked;
      return server;
    });

    return {
      ...state,
      servers,
    };
  },
};

export const settingsReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  const handler = handlers[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};
