import { combineReducers} from 'redux'

export default function userstate(state = initialState, action) {
  //console.log(action);
      return {
        ...state
      };
}


/*combineReducers({
  routing: routerReducer //ненужен на сервере
})*/