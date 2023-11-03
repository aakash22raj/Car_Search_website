// createStore => Credate Redux store
// combineReducers => is used to combine multiple reducer functions into a single reducer
import { createStore, combineReducers } from 'redux';
// Imports the reducer function
import carReducer from './reducers/carReducer';

// rootReducer is the main reducer that will manage the state for the entire application
const rootReducer = combineReducers({
  car: carReducer,
});
// Passing the argument
const store = createStore(rootReducer);

export default store;
