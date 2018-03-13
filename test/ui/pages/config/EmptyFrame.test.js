import React from 'react';

import 'test/enzyme-init';
import { shallow } from 'enzyme';
import EmptyFrame from 'ui/pages/config/EmptyFrame';

const FRAME = {
  pos: 1,
  descr: 'The frame descr',
};

const connectDropTargetMock = jest.fn().mockImplementation(arg => arg);

describe('EmptyFrame (basic rendering)', () => {
  let component;
  beforeEach(() => {
    component = shallow((
      <EmptyFrame frame={FRAME} />
    ));
  });

  it('has the EmptyFrame class', () => {
    expect(component.hasClass('EmptyFrame')).toBe(true);
  });

  it('does not have the EmptyFrame--drag-hover class', () => {
    expect(component.hasClass('EmptyFrame--drag-hover')).toBe(false);
  });

  it('renders the frame descr', () => {
    expect(component.contains(FRAME.descr)).toBe(true);
  });
});

describe('EmptyFrame (droppable, not hovered)', () => {
  let component;
  beforeEach(() => {
    component = shallow((
      <EmptyFrame frame={FRAME} connectDropTarget={connectDropTargetMock} />
    ));
  });

  it('has the EmptyFrame class', () => {
    expect(component.hasClass('EmptyFrame')).toBe(true);
  });

  it('does not have the EmptyFrame--drag-hover class', () => {
    expect(component.hasClass('EmptyFrame--drag-hover')).toBe(false);
  });

  it('calls the connectDropTarget function', () => {
    expect(connectDropTargetMock).toHaveBeenCalled();
  });
});

describe('EmptyFrame (droppable, hovered)', () => {
  let component;
  beforeEach(() => {
    component = shallow((
      <EmptyFrame frame={FRAME} connectDropTarget={connectDropTargetMock} isOver />
    ));
  });

  it('has the EmptyFrame class', () => {
    expect(component.hasClass('EmptyFrame')).toBe(true);
  });

  it('has the EmptyFrame--drag-hover class', () => {
    expect(component.hasClass('EmptyFrame--drag-hover')).toBe(true);
  });

  it('calls the connectDropTarget function', () => {
    expect(connectDropTargetMock).toHaveBeenCalled();
  });
});
