import { createStore, applyMiddleware, compose, combineReducers  } from 'redux'
import rootReducer from '../reducers'
//import DevTools from "../client/containers/DevTools";
import thunk from 'redux-thunk';


//пробник :)
function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    console.log('state after dispatch', getState())
    return returnValue
  }
}


//middlewares (TODO может стоит вынести в middlewares/index.js ?)
const enhancer = compose(
  applyMiddleware(thunk),    // для асинхронных action (возвращающих функцию)
  applyMiddleware(logger)   // лог для отладки

  // если установлен плагин для хрома, тогда юзается расширение (уточнить что с изоморфностью, window то нет)
  //window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  //(global && global.document) ? window.devToolsExtension():f=>f // TODO ненадёжная проверка
);


export default function configureStore({ injectReducer, state}) {
  //встраивает в цепочку reducer'ов переданный reducer,
  var reducer= injectReducer ? (state, action) => injectReducer( rootReducer( state, action ), action ) : rootReducer;

  const store = createStore(reducer, state, enhancer);

  //подменяет на лету reducer'ы если те были изменены
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}