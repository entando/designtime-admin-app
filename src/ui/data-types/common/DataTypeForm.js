import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { InputGroup, Button, Row, Col } from 'patternfly-react';

import { required, maxLength } from '@entando/utils';
import RenderTextInput from 'ui/common/form/RenderTextInput';
import RenderSelectInput from 'ui/common/form/RenderSelectInput';
import FormLabel from 'ui/common/form/FormLabel';
import AttributeListTable from 'ui/common/attributes/AttributeListTable';

export class DataTypeFormBody extends Component {
  componentWillMount() {
    this.props.onWillMount(this.props);
  }

  render() {
    const {
      attributesType, mode, handleSubmit, onSubmit, onAddAttribute,
    } = this.props;
    const isEdit = mode === 'edit';
    const selectOptions = attributesType.map(item => ({
      value: item,
      text: item,
    }));

    const renderAttributeTable = () => {
      if (isEdit) {
        return (
          <Col xs={12}>
            <AttributeListTable {...this.props} />
          </Col>
        );
      }
      return '';
    };

    const renderSelectOption = () => {
      if (isEdit) {
        return (
          <div>
            <legend>
              <FormattedMessage id="app.attributes" />
            </legend>
            <InputGroup>
              <RenderSelectInput
                options={selectOptions}
                defaultOptionId="app.chooseAnOption"
                labelId="DataType.type"
                fieldName="type"
                mandatory
              />
              <span className="input-group-btn">
                <Button
                  type="button"
                  className="pull-right DataTypeForm__add"
                  bsStyle="primary"
                  onClick={() => onAddAttribute(this.props)}
                >
                  <FormattedMessage
                    id="app.add"
                  />
                </Button>
              </span>
            </InputGroup>
          </div>
        );
      }
      return '';
    };

    return (
      <form onSubmit={handleSubmit(onSubmit.bind(this))} className="form-horizontal">
        <Row>
          <Col xs={12}>
            <fieldset className="no-padding">
              <legend>
                <FormattedMessage id="app.info" />
                <div className="DataTypeForm__required-fields text-right">
                   * <FormattedMessage id="app.fieldsRequired" />
                </div>
              </legend>
              <Field
                component={RenderTextInput}
                name="code"
                label={
                  <FormLabel labelId="app.code" helpId="app.help.code" required />
                 }
                validate={[required, maxLength(255)]}
                disabled={isEdit}
              />
              <Field
                component={RenderTextInput}
                name="name"
                label={
                  <FormLabel labelId="app.name" helpId="app.help.name" required />
                 }
                validate={[required, maxLength(50)]}
              />
              {renderSelectOption()}
              {renderAttributeTable()}
            </fieldset>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Button
              className="pull-right DataTypeFormBody__save--btn"
              type="submit"
              bsStyle="primary"
              disabled={this.props.invalid || this.props.submitting}
            >
              <FormattedMessage id="app.save" />
            </Button>
          </Col>
        </Row>
      </form>

    );
  }
}

DataTypeFormBody.propTypes = {
  onWillMount: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onAddAttribute: PropTypes.func,
  attributesType: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  mode: PropTypes.string,
};

DataTypeFormBody.defaultProps = {
  onWillMount: () => {},
  invalid: false,
  submitting: false,
  mode: 'add',
  onAddAttribute: () => {},
};

const DataTypeForm = reduxForm({
  form: 'DataType',
})(DataTypeFormBody);

export default DataTypeForm;
