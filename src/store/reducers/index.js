import { combineReducers } from 'redux';
import supplierReducer from './supplier'

const rootReducer = combineReducers({
  supplier: supplierReducer
});

export default rootReducer;
