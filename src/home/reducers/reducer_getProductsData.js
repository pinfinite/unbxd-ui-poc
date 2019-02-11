import appConstants from '../constants';
export default function(state=null,action){
  if(action.type === appConstants.GET_PRODUCT_DATA){
     return action.payload;
  }

  return state;
}