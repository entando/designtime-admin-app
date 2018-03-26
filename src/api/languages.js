
import { makeRequest, METHODS } from 'api/apiManager';
import { LANGUAGES_LIST } from 'test/mocks/languages';

export const getLanguages = (page = { page: 1, pageSize: 10 }, params = '') => (
  makeRequest(
    {
      uri: `/languages${params}`,
      method: METHODS.GET,
      mockResponse: LANGUAGES_LIST,
      useAuthentication: true,
    },
    page,
  )
);

export const putLanguage = languageObj => (
  makeRequest({
    uri: `/languages/${languageObj.code}`,
    method: METHODS.PUT,
    body: languageObj,
    mockResponse: [],
    useAuthentication: true,
  })
);
