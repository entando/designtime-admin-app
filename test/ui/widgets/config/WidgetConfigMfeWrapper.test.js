import React from 'react';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import WidgetConfigMfeWrapper from 'ui/widgets/config/WidgetConfigMfeWrapper';
import useScript from 'helpers/useScript';

const renderWithReactIntl = component => render(<IntlProvider locale="en">{component}</IntlProvider>);

const widgetConfig = { name: 'John' };

const onSubmit = jest.fn();

jest.mock('helpers/useScript');

jest.mock('helpers/microfrontends', () => ({
  getFilePath: () => '',

  getMfe: () => ({
    config: { name: 'John' },
  }),

  renderMfe: () => (<div id="sample-widget-config">Sample Widget Config</div>),
}));

const sampleWidget = {
  code: 'sample',
  used: 0,
  titles: {
    en: 'Sample Widget',
    it: 'Widget di esempio',
  },
  group: null,
  pluginCode: null,
  pluginDesc: null,
  guiFragments: [],
  hasConfig: true,
  bundleId: 'sample-bundle',
  configUi: {
    customElement: 'sample-widget',
    resources: [
      'runtime.js',
      'vendor.js',
      'main.js',
    ],
  },
};


describe('WidgetConfigMfeWrapper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows microfrontend', () => {
    useScript.mockImplementation(() => [true, false]);
    const { getByText, queryByText } = renderWithReactIntl(<WidgetConfigMfeWrapper onSubmit={onSubmit} widget={sampleWidget} widgetConfig={widgetConfig} />);
    expect(getByText('Sample Widget Config')).toBeInTheDocument();
    expect(queryByText('widget.page.config.error')).not.toBeInTheDocument();
  });

  it('shows config error if scripts are not loaded', () => {
    useScript.mockImplementation(() => [false, false]);
    const { getByText, queryByText } = renderWithReactIntl(<WidgetConfigMfeWrapper onSubmit={onSubmit} widget={sampleWidget} widgetConfig={widgetConfig} />);
    expect(queryByText('Sample Widget Config')).not.toBeInTheDocument();
    expect(getByText('widget.page.config.error')).toBeInTheDocument();
  });

  it('shows config error if scripts are loaded with error', () => {
    useScript.mockImplementation(() => [true, true]);
    const { getByText, queryByText } = renderWithReactIntl(<WidgetConfigMfeWrapper onSubmit={onSubmit} widget={sampleWidget} widgetConfig={widgetConfig} />);
    expect(queryByText('Sample Widget Config')).not.toBeInTheDocument();
    expect(getByText('widget.page.config.error')).toBeInTheDocument();
  });

  it('does not show anything if widget is not provided', () => {
    useScript.mockImplementation(() => [true, false]);
    const { queryByText } = renderWithReactIntl(<WidgetConfigMfeWrapper onSubmit={onSubmit} widgetConfig={widgetConfig} />);
    expect(queryByText('Sample Widget Config')).not.toBeInTheDocument();
    expect(queryByText('widget.page.config.error')).not.toBeInTheDocument();
  });

  it('calls onSubmit if user clicks on save button', () => {
    useScript.mockImplementation(() => [true, false]);
    const { getByText } = renderWithReactIntl(<WidgetConfigMfeWrapper onSubmit={onSubmit} widget={sampleWidget} widgetConfig={widgetConfig} />);
    const saveButton = getByText('app.save');
    fireEvent.click(saveButton);
    expect(onSubmit).toHaveBeenCalledWith(widgetConfig);
  });
});