import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { getParams } from '@entando/router';
import { METHODS } from '@entando/apimanager';

import { setVisibleModal, setInfo } from 'state/modal/actions';
import { MODAL_ID } from 'ui/data-types/attributes/DeleteAttributeModal';

import EditAttributeForm from 'ui/common/form/EditAttributeForm';
import {
  fetchAttributeFromDataType,
  handlerAttributeFromDataType,
  fetchDataTypeAttributes,
  fetchDataTypeAttribute,
} from 'state/data-types/actions';

import {
  getSelectedAttributeType,
  getDataTypeAttributesIdList,
  getDataTypeSelectedAttributeAllowedRoles,
  getSelectedCompositeAttributes,
  getActionModeDataTypeSelectedAttribute,
} from 'state/data-types/selectors';

import { ROUTE_DATA_TYPE_ATTRIBUTE_ADD } from 'app-init/router';
import { TYPE_COMPOSITE } from 'state/data-types/const';

export const mapStateToProps = state => ({
  mode: getActionModeDataTypeSelectedAttribute(state) || 'edit',
  attributeCode: getParams(state).attributeCode,
  dataTypeAttributeCode: getParams(state).entityCode,
  joinAllowedOptions:
    formValueSelector('attribute')(state, 'joinRoles') ||
    formValueSelector('attribute')(state, 'joinAllowedOptions') || [],
  selectedAttributeType: getSelectedAttributeType(state),
  attributesList: getDataTypeAttributesIdList(state),
  allowedRoles: getDataTypeSelectedAttributeAllowedRoles(state),
  attributes: getSelectedCompositeAttributes(state),
});

export const mapDispatchToProps = dispatch => ({
  onWillMount: ({ dataTypeAttributeCode, attributeCode }) => {
    dispatch(fetchAttributeFromDataType('attribute', dataTypeAttributeCode, attributeCode));
    dispatch(fetchDataTypeAttributes());
  },
  onSubmit: (values, allowedRoles, mode) => {
    dispatch(handlerAttributeFromDataType(METHODS.PUT, values, allowedRoles, mode));
  },
  onAddAttribute: ({ attributeCode, entityCode, selectedAttributeType }) => {
    console.log('EditFormContainer - onAddAttribute [attributeCode]', attributeCode, ' entityCode ', entityCode, ' selectedAttributeType ', selectedAttributeType);
    if (selectedAttributeType !== TYPE_COMPOSITE) {
      dispatch(fetchDataTypeAttribute(
        attributeCode,
        {
          route: ROUTE_DATA_TYPE_ATTRIBUTE_ADD,
          params: { entityCode },
        },
        selectedAttributeType,
        'attribute',
      ));
    }
  },
  onClickDelete: (code) => {
    console.log('Delete', code);
    dispatch(setVisibleModal(MODAL_ID));
    dispatch(setInfo({ type: 'attribute', code }));
  },
});

const EditFormContainer =
connect(mapStateToProps, mapDispatchToProps)(EditAttributeForm);
export default EditFormContainer;
