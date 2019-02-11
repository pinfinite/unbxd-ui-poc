import {combineReducers} from 'redux';
import homeGetProductsData from '../home/reducers/reducer_getProductsData'
const rootReducer = combineReducers({
   getProductsData:homeGetProductsData
});

export default rootReducer;