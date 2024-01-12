import formReducer from "./reducers";
import { createStore } from 'redux';

const store = createStore(formReducer);

export default store;