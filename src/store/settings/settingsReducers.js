import {
  IS_SINGLE_PATHS,
  SHOW_MULTI_BLOCK,
  CHANGE_PATH,
  CHANGE_AUTO_UPDATE_TYPE,
  CHANGE_MANUAL_UPDATE_SERVER,
  CHANGE_PATHS,
  ADD_PATH,
  CHANGE_STATE_CHECKBOX,
  ENABLE_CHECKBOX
} from './settingsActions';

const defaultState = {
  pathValue: '',
  showBlock: true,
  isSinglePaths: true,
  defaultUpdateType: 'none',
  manualUpdateServer: 'ru-alpha',
  paths: [],
  servers: [
    {
      id: 1,
      name: 'ru-alpha',
      checked: false
    },
    {
      id: 2,
      name: 'ru-bravo',
      checked: false
    },
    {
      id: 3,
      name: 'ru-charlie',
      checked: false
    }
  ]
};

const handlers = {
  [CHANGE_PATH](state, pathValue) {
    return {
      ...state,
      pathValue
    };
  },
  [SHOW_MULTI_BLOCK](state) {
    return {
      ...state,
      showBlock: !state.showBlock
    };
  },
  [IS_SINGLE_PATHS](state, isSinglePaths) {
    return {
      ...state,
      isSinglePaths
    };
  },
  [CHANGE_AUTO_UPDATE_TYPE](state, defaultUpdateType) {
    return {
      ...state,
      defaultUpdateType
    };
  },
  [CHANGE_MANUAL_UPDATE_SERVER](state, manualUpdateServer) {
    return {
      ...state,
      manualUpdateServer
    };
  },
  [CHANGE_PATHS](state, paths) {
    return {
      ...state,
      paths
    };
  },
  [ADD_PATH](state, path) {
    const newPaths = [...state.paths, path];

    return {
      ...state,
      paths: newPaths
    };
  },
  [CHANGE_STATE_CHECKBOX](state, id) {
    const newServers = state.servers.map(server => {
      if (server.id === id) server.checked = !server.checked;
      return server;
    });

    return {
      ...state,
      servers: newServers
    };
  },
  [ENABLE_CHECKBOX](state, id) {
    const newServers = state.servers.map(server => {
      if (server.id === id) server.checked = true;
      return server;
    });

    return {
      ...state,
      servers: newServers
    };
  }
};

export const settingsReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  const handler = handlers[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};
