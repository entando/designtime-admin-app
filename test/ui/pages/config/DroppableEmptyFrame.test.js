import { mapDispatchToProps } from 'ui/pages/config/DroppableEmptyFrame';

import { updatePageWidget } from 'state/page-config/actions';

jest.mock('ui/pages/config/frameDragSource', () => jest.fn().mockImplementation(arg => arg));
jest.mock('ui/pages/config/frameDropTarget', () => jest.fn().mockImplementation(arg => arg));
jest.mock('ui/pages/config/WidgetFrame', () => () => 'span');
jest.mock('state/page-config/actions', () => ({
  updatePageWidget: jest.fn().mockReturnValue('updatePageWidget__result'),
}));

const SOURCE_WIDGET_ID = 'widget_code';

const SOURCE_FRAME_ID = 1;
const TARGET_FRAME_ID = 2;

describe('ui/pages/config/DraggableWidgetFrame', () => {
  beforeEach(jest.clearAllMocks);
  describe('mapDispatchToProps', () => {
    const dispatchMock = jest.fn();
    let props;
    beforeEach(() => {
      props = mapDispatchToProps(dispatchMock);
    });

    it('onDrop will dispatch "updatePageWidget" action', () => {
      props.onDrop({
        sourceWidgetId: SOURCE_WIDGET_ID,
        sourceFrameId: SOURCE_FRAME_ID,
        targetFrameId: TARGET_FRAME_ID,
      });
      expect(updatePageWidget)
        .toHaveBeenCalledWith(SOURCE_WIDGET_ID, SOURCE_FRAME_ID, TARGET_FRAME_ID);
      expect(dispatchMock).toHaveBeenCalledWith('updatePageWidget__result');
    });
  });
});
