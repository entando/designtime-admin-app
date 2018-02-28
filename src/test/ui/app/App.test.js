
import React from 'react';

import 'test/enzyme-init';
import { shallow } from 'enzyme';
import App from 'ui/app/App';
import DashboardPage from 'ui/dashboard/DashboardPage';
import WidgetPage from 'ui/app-pages/WidgetPage';
import AddFragmentPage from 'ui/fragments/add/AddFragmentPage';
import EditFragmentPageContainer from 'ui/fragments/edit/EditFragmentPageContainer';
import WidgetEditPageContainer from 'ui/widgets/WidgetEditPageContainer';
import PageTreePageContainer from 'ui/page-tree-page/PageTreePageContainer';
import WidgetListPageContainer from 'ui/widget-list-page/WidgetListPageContainer';
import { NotFoundPage } from 'frontend-common-components';

import {
  ROUTE_HOME,
  ROUTE_DASHBOARD,
  ROUTE_PAGE_TREE,
  ROUTE_WIDGET_LIST,
  ROUTE_WIDGET_ADD,
  ROUTE_WIDGET_EDIT,
  ROUTE_FRAGMENT_ADD,
  ROUTE_FRAGMENT_EDIT,
} from 'app-init/router';

it('renders without crashing', () => {
  const component = shallow(<App route={ROUTE_HOME} />);
  expect(component.exists()).toEqual(true);
});

it('route to dashboard', () => {
  const component = shallow(<App route={ROUTE_DASHBOARD} />);
  expect(component.contains(<DashboardPage />)).toEqual(true);
});

it('route to page tree page', () => {
  const component = shallow(<App route={ROUTE_PAGE_TREE} />);
  expect(component.contains(<PageTreePageContainer />)).toEqual(true);
});

it('route to widget list page', () => {
  const component = shallow(<App route={ROUTE_WIDGET_LIST} />);
  expect(component.contains(<WidgetListPageContainer />)).toEqual(true);
});

it('route to widget entry page', () => {
  const component = shallow(<App route={ROUTE_WIDGET_ADD} />);
  expect(component.contains(<WidgetPage />)).toEqual(true);
});

it('route to widget edit page', () => {
  const component = shallow(<App route={ROUTE_WIDGET_EDIT} />);
  expect(component.contains(<WidgetEditPageContainer />)).toEqual(true);
});

it('route to add fragment page', () => {
  const component = shallow(<App route={ROUTE_FRAGMENT_ADD} />);
  expect(component.contains(<AddFragmentPage />)).toEqual(true);
});

it('route to edit fragment page', () => {
  const component = shallow(<App route={ROUTE_FRAGMENT_EDIT} />);
  expect(component.contains(<EditFragmentPageContainer />)).toEqual(true);
});

it('default route', () => {
  const component = shallow(<App route="test" />);
  expect(component.contains(<NotFoundPage />)).toEqual(true);
});
