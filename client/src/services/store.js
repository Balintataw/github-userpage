import {createStore, combineReducers} from 'redux'

// import reducers here
import githubReducer from '../reducers/githubReducer'

const rootReducer = combineReducers(
  { 
    'githubReducer': githubReducer
    // namespace your reducers here
  }
)

export default createStore(rootReducer)