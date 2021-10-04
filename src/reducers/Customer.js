import { SAVE_CUSTOMER_DETAILS} from "../constants/Customer";

function customerReducer(state = { shipping:{} }, action) {
  switch (action.type) {
    case SAVE_CUSTOMER_DETAILS:
      return { ...state, shipping: action.payload  };
    default:
      return state
  }
}
export { customerReducer }