import { connect } from 'react-redux';

import frameDragSource from 'ui/pages/config/frameDragSource';
import frameDropTarget from 'ui/pages/config/frameDropTarget';
import WidgetFrame from 'ui/pages/config/WidgetFrame';
import { updatePageWidget, removePageWidget } from 'state/page-config/actions';


export const mapDispatchToProps = dispatch => ({
  onDrop: ({ sourceWidget, sourceFrame, targetFrame }) =>
    dispatch(updatePageWidget(sourceWidget, targetFrame.pos, sourceFrame.pos)),
  onClickDelete: frameId => dispatch(removePageWidget(frameId)),
});


export default connect(null, mapDispatchToProps)(frameDropTarget(frameDragSource(WidgetFrame)));
