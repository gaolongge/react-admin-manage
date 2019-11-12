import { TOGGLEMENU } from '../../actionTypes'
const initialState = {
  collapsed: false
};
export default (state = initialState, action) => {  
  switch(action.type) {
    case TOGGLEMENU:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    default:
      return state;
  }
}