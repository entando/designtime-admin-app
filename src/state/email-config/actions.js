import { initialize } from 'redux-form';
import { addToast, addErrors, TOAST_ERROR, TOAST_SUCCESS } from '@entando/messages';

import {
  getSMTPServerSettings,
  putSMTPServerSettings,
  postTestEmailConfig,
  postSendTestEmail,
  getEmailSenders,
} from 'api/emailConfig';
import { SET_EMAIL_SENDERS } from 'state/email-config/types';

export const setEmailSenders = emailSenders => ({
  type: SET_EMAIL_SENDERS,
  payload: emailSenders,
});

export const fetchSMTPServerSettings = () => async (dispatch) => {
  try {
    const response = await getSMTPServerSettings();
    const json = await response.json();
    if (response.ok) {
      const smtpServerSettings = json.payload;
      dispatch(initialize('emailConfig', smtpServerSettings));
    } else {
      dispatch(addErrors(json.errors.map(e => e.message)));
      json.errors.forEach(err => dispatch(addToast(err.message, TOAST_ERROR)));
    }
  } catch (e) {
    // do nothing
  }
};

export const saveEmailConfig = emailConfig => async (dispatch) => {
  try {
    const response = await putSMTPServerSettings(emailConfig);
    const json = await response.json();
    if (response.ok) {
      dispatch(initialize('emailConfig', emailConfig));
    } else {
      dispatch(addErrors(json.errors.map(e => e.message)));
      json.errors.forEach(err => dispatch(addToast(err.message, TOAST_ERROR)));
    }
  } catch (e) {
    // do nothing
  }
};

export const testEmailConfig = emailConfig => async (dispatch) => {
  try {
    const response = await postTestEmailConfig(emailConfig);
    const json = await response.json();
    if (response.ok) {
      dispatch(addToast({ id: 'emailConfig.valid' }, TOAST_SUCCESS));
    } else {
      dispatch(addErrors(json.errors.map(e => e.message)));
      json.errors.forEach(err => dispatch(addToast(err.message, TOAST_ERROR)));
    }
  } catch (e) {
    // do nothing
  }
};

export const sendTestEmail = () => async (dispatch) => {
  try {
    const response = await postSendTestEmail();
    const json = await response.json();
    if (response.ok) {
      dispatch(addToast({ id: 'emailConfig.sendTestSuccess' }, TOAST_SUCCESS));
    } else {
      dispatch(addErrors(json.errors.map(e => e.message)));
      json.errors.forEach(err => dispatch(addToast(err.message, TOAST_ERROR)));
    }
  } catch (e) {
    // do nothing
  }
};

export const fetchEmailSenders = () => async (dispatch) => {
  try {
    const response = await getEmailSenders();
    const json = await response.json();
    if (response.ok) {
      dispatch(setEmailSenders(json.payload));
    } else {
      dispatch(addErrors(json.errors.map(e => e.message)));
      json.errors.forEach(err => dispatch(addToast(err.message, TOAST_ERROR)));
    }
  } catch (e) {
    // do nothing
  }
};
