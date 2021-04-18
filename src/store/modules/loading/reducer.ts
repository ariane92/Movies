import { Reducer } from "redux";

const INITIAL_STATE = false

export const loader: Reducer<Boolean> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SHOW_LOADER': {
      const { loader } = action.payload

      return {
        ...state, loader: true
      }

    }

    case 'HIDE_LOADER': {
      const { loader } = action.payload

      return {
        ...state, loader: false
      }

    }
    default: {
      return state;
    }
  }
}

export default loader

