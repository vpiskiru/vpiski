const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCES = 'LOGIN_SUCCES'
const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin() {

  return function(dispatch) {

    dispatch({
      type: LOGIN_REQUEST
    })

    VK.Auth.login((r) => { // eslint-disable-line no-undef
      if (r.session) {
        let username = r.session.user.first_name;

        dispatch({
          type: LOGIN_SUCCES,
          payload: username
        })

      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    },4); // запрос прав на доступ к photo
  }

}