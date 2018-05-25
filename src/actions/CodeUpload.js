import {CODE_UPLOAD_ON_CHANGE, CODE_UPLOAD_ON_SUBMIT} from './index'

export const uploadFormChange = (key, value) => {
  return {
    type: CODE_UPLOAD_ON_CHANGE,
    key,
    value
  }
}


export const uploadFormSubmit = () => {
  return {
    type: CODE_UPLOAD_ON_SUBMIT,
  }
}
