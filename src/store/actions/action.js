
export function loadImg(img) {
  return async dispatch => {
    try {
      dispatch({ type: 'SET_IMG', img })
    }
    catch (err) {
      console.log('err in loadImg', err);
    }

  }
}

export function loadRotationDegrees(degrees) {
  return async dispatch => {
    try {
      dispatch({ type: 'SET_DEGREES', degrees })
    }
    catch (err) {
      console.log('err in loadRotationDegreess', err);
    }
  }
}




