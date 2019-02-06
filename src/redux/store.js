import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunkMiddleWare from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const loggerMiddleware = createLogger()



export default createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleWare,
      loggerMiddleware)
    )
  );