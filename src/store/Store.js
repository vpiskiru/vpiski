import { createStore } from 'redux'
import rootReducer from '../reducers'  
  
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

export default function configureStore() {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}