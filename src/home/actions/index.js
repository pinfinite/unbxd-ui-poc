import appConstants from '../constants';
import axios from 'axios';


export function getProductsData(data){
  return{
      type:appConstants.GET_PRODUCT_DATA,
      payload:axios.get(appConstants.PROD_REQ_URL+data)
  }
}