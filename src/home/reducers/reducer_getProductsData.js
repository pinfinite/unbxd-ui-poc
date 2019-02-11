import appConstants from '../constants';
export default function (state = [], action) {
  if (action.type === appConstants.GET_PRODUCT_DATA) {
    if (state.length != 0) state = state.redProd;
    state = state.concat(action.payload.data.productsData);
    return { redProd: state, count: action.payload.data.count };
  }

  return state;
}