import { makeMockRequest, METHODS } from 'api/apiManager';
import { LIST_GROUPS_OK, GROUPS_NORMALIZED, BODY_OK, PAGE_REFERENCES } from 'test/mocks/groups';

const getErrors = groupname => (
  GROUPS_NORMALIZED.groups.map[groupname] ? [] :
    [{ code: 1, message: 'invalid group name' }]
);

const getErrorsPageReferences = groupname => (
  PAGE_REFERENCES[groupname] ? [] :
    [{ code: 1, message: 'invalid group name' }]
);
export const getGroups = (page = { page: 1, pageSize: 10 }, params = '') => (
  makeMockRequest(
    {
      uri: `/api/groups${params}`,
      method: METHODS.GET,
      mockResponse: LIST_GROUPS_OK,
      useAuthentication: true,
    },
    page,
  )
);

export const postGroup = groupObject => (
  makeMockRequest({
    uri: '/api/groups',
    method: METHODS.POST,
    mockResponse: BODY_OK,
    body: groupObject,
    useAuthentication: true,
  })
);

export const getGroup = groupname => makeMockRequest({
  uri: `/api/groups/${groupname}`,
  method: METHODS.GET,
  mockResponse: GROUPS_NORMALIZED.groups.map[groupname] || {},
  errors: () => getErrors(groupname),
});

export const getPageReferences = (page = { page: 1, pageSize: 10 }, groupname) =>
  makeMockRequest(
    {
      uri: `/groups/${groupname}/references/Pages`,
      method: METHODS.GET,
      mockResponse: PAGE_REFERENCES[groupname],
      errors: () => getErrorsPageReferences(groupname),
    },
    page,
  );

export default getGroups;
