import { SET_GROUPS, SET_SELECTED_GROUP } from 'state/groups/types';
import { getGroups, getGroup, postGroup } from 'api/groups';
import { setPage } from 'state/pagination/actions';
import { addErrors } from 'state/errors/actions';
import { getParams, gotoRoute } from 'frontend-common-components';

import { ROUTE_GROUP_LIST } from 'app-init/router';

export const setGroups = groups => ({
  type: SET_GROUPS,
  payload: {
    groups,
  },
});

export const setSelectedGroup = group => ({
  type: SET_SELECTED_GROUP,
  payload: {
    group,
  },
});

// thunk
export const fetchGroups = (page = { page: 1, pageSize: 10 }, params = '') => dispatch =>
  new Promise((resolve) => {
    getGroups(page, params).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch(setGroups(data.payload));
          dispatch(setPage(data.metaData));
          resolve();
        });
      } else {
        resolve();
      }
    });
  });

export const fetchCurrentPageGroupDetail = () => (dispatch, getState) =>
  new Promise((resolve) => {
    const { groupname } = getParams(getState());
    getGroup(groupname).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(setSelectedGroup(json.payload));
          resolve();
        });
      } else {
        resolve();
      }
    });
  });


export const sendPostGroup = groupData => dispatch =>
  new Promise((resolve) => {
    postGroup(groupData).then((response) => {
      response.json().then((data) => {
        if (response.ok) {
          dispatch(setGroups([data]));
          gotoRoute(ROUTE_GROUP_LIST);
          resolve();
        } else {
          dispatch(addErrors(data.errors.map(err => err.message)));
          resolve();
        }
      });
    });
  });

// export const fetchCurrentReferencePages = groupname => dispatch =>
//  new Promise((resolve) =>{
//      get
//  });
