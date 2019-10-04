import { LOGIN} from '../types'

const initialState = {
  data: {
  }
}
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case LOGIN:
      return {
        ...state.data,
        data: payload,

      };
    default:
      return state;
  }
};


