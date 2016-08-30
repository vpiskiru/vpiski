import { createStore, applyMiddleware, compose  } from 'redux'
import rootReducer from '../reducers'
import DevTools from "../containers/DevTools";


  
var initialState  ={  
  user: 'Unknown User 2',
  events:[
    {
      userId:12,
      userName:"Гиви",
      descriptor:"Девчёнки, давайте бухать.",
      avatar:"1.jpg"
    },
    {
      userId:12,
      userName:"Армен",
      descriptor:"Девчёнки, давайте бухать.",
      avatar:"1.jpg"
    },
    {
      userId:12,
      userName:"Ашот",
      descriptor:"Девчёнки, давайте бухать.",
      avatar:"1.jpg"
    }
 
  ]
}

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    console.log('state after dispatch', getState())
    return returnValue
  }
}

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(logger),

  // если установлен плагин для хрома, тогда юзается расширение (уточнить что с изоморфностью, window то нет)
  //window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()

  window?window.devToolsExtension():f=>f
);

export default function configureStore() {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}