import { WIDGETTABLEROW } from 'test/mocks/widgetList';

// eslint-disable-next-line
export const getApiWidgetList = () => (
  new Promise((resolve) => {
    // console.log(WIDGETTABLEROW);
    resolve(WIDGETTABLEROW);
  })
);
