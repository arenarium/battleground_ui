import {CODE_UPLOAD_ON_CHANGE, CODE_UPLOAD_START, CODE_UPLOAD_FAIL, CODE_UPLOAD_SUCCESS} from './index'

export const codeUploadFail = errors => {
  return {
    type: CODE_UPLOAD_FAIL,
    errors
  }
}


export const uploadFormChange = (target) => {
  // console.log(target);
  if (target){
  const name = target.name
  const inputType = target.type
  var value = target.value
  if (inputType === 'file'){
    return function (dispatch) {
      var selectedFile = target.files[0]
      var reader = new FileReader();
      //reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.onload = (data) => {
        dispatch({type: CODE_UPLOAD_ON_CHANGE,
          name,
          value: data.target.result})
        }

        reader.readAsText(selectedFile);
      }
    }
    else{
      value = target.value
      return {
        type: CODE_UPLOAD_ON_CHANGE,
        name,
        value
      }
    }
  }else{
    return {type: null}
  }
  }


  export const uploadFormSubmit = (formData) => {
    return function (dispatch) {
      dispatch({type: CODE_UPLOAD_START})
      if (!('owner' in formData)){
        formData['owner'] = 'Web'
      }
      return fetch('/api/upload/', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(formData)
      })
      .then(
        response => response.json(),
        error => {
          dispatch({type: CODE_UPLOAD_FAIL, error:error})
          console.log('An error occured.', error)
        }
      )
      .then(json =>{
        console.log(json);
        dispatch({type: CODE_UPLOAD_SUCCESS, agentID: json.agent_id})
      }
    )
  }
}
