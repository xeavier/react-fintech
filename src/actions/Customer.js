import { SAVE_CUSTOMER_DETAILS} from "../constants/Customer";

const saveCutomerD = (data) => (dispatch) => {
  dispatch({ type: SAVE_CUSTOMER_DETAILS, payload: data });
}

export { saveCutomerD }