import React from 'react';

import 'test/enzyme-init';
import { shallow } from 'enzyme';
import { PagesEditPageBody } from 'ui/pages/edit/PagesEditPage';


describe('PagesEditPage', () => {
  beforeEach(jest.clearAllMocks);

  let component;
  beforeEach(() => {
    component = shallow(<PagesEditPageBody />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toBe(true);
  });

  it('is an InternalPage', () => {
    expect(component.is('InternalPage')).toBe(true);
  });

  it('has the PagesEditPage class', () => {
    expect(component.hasClass('PagesEditPage')).toBe(true);
  });

  it('will call onWillMount on componentWillMount', () => {
    const onWillMount = jest.fn();
    shallow(<PagesEditPageBody onWillMount={onWillMount} />);
    expect(onWillMount).toHaveBeenCalled();
  });
});
