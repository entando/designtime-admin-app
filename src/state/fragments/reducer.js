
import { combineReducers } from 'redux';
import { SET_SELECTED, SET_FRAGMENTS, SET_WIDGET_TYPES, SET_PLUGINS, REMOVE_FRAGMENT } from 'state/fragments/types';

const selected = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_SELECTED: {
      return action.payload.fragment;
    }
    default: return state;
  }
};

const list = (state = [], action = {}) => {
  switch (action.type) {
    case SET_FRAGMENTS: {
      return action.payload.fragments;
    }
    case REMOVE_FRAGMENT: {
      const { fragmentCode } = action.payload;
      return state.filter(f => f !== fragmentCode);
    }
    default: return state;
  }
};

const widgetTypes = (state = [], action = {}) => {
  switch (action.type) {
    case SET_WIDGET_TYPES: {
      return action.payload.widgetTypes;
    }
    default: return state;
  }
};

const plugins = (state = [], action = {}) => {
  switch (action.type) {
    case SET_PLUGINS: {
      return action.payload.plugins;
    }
    default: return state;
  }
};


export default combineReducers({
  selected,
  list,
  widgetTypes,
  plugins,
});
