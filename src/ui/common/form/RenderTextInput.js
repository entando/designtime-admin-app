import React from 'react';
import PropTypes from 'prop-types';
import { Col, ControlLabel } from 'patternfly-react';

const RenderTextInput = ({
  input, label, labelSize, placeholder, meta: { touched, error }, help, disabled, type,
}) => (
  <div className={(touched && error) ? 'form-group has-error' : 'form-group'}>
    <Col xs={labelSize}>
      <ControlLabel htmlFor={input.name}>
        {label} {help}
      </ControlLabel>
    </Col>
    <Col xs={12 - labelSize}>
      <input
        {...input}
        type={type}
        id={input.name}
        placeholder={placeholder}
        className="form-control"
        disabled={disabled}
      />
      {touched && ((error && <span className="help-block">{error}</span>))}
    </Col>
  </div>

);

RenderTextInput.propTypes = {
  input: PropTypes.shape({}),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({}),
  help: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  labelSize: PropTypes.number,
};

RenderTextInput.defaultProps = {
  input: {},
  label: '',
  placeholder: '',
  meta: {},
  help: null,
  disabled: false,
  type: 'text',
  labelSize: 2,
};
export default RenderTextInput;
