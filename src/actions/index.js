import md5 from 'js-md5'

const KEYS = {
  PUBLIC: '1234',
  PRIVATE: 'abc'
}

const timeStamp = Date.now()
const hash = md5(timeStamp + KEYS.PRIVATE + KEYS.PUBLIC)
//Example of request to the API
//gateway.marvel.com/v1/public/characters?ts=aaa&apikey=b0f0187cf35355f54cd5b7cc5ba641ee&hash=91b8839fac2dad4e59a7bdcdf8ef3557
const URL = "http://gateway.marvel.com/v1/public/characters?ts="+ timeStamp + "&apikey=" + KEYS.PUBLIC + "&hash=" + hash;

export const executeSomething = data => {
  return {
    type: 'DO_SOMETHING',
    data: data
  }
}

export const getLink = () => {
    return async dispatch => {
        function onSuccess(success) {
            console.log(success)
            dispatch({
                type: 'GET_SUCCESS_LINK',
                payload: success
            });
            return success;
        }
        function onError(error) {
            console.log(error)
            dispatch({
                type: 'GET_ERROR_USER',
                error
            });
            return error;
        }
        try {
            const response = await fetch(URL);
            const data = await response.json();
            
            return onSuccess(data);
        } catch(e) {
            return onError(e);
        }
    }
}