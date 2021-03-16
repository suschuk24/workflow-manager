import {
    UPDATE_REPAIRS,
    UPDATE_USERS
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_REPAIRS:
            return {
                ... state,
                repairs: [...action.repairs],
            };

            default: 
              return state
    }
}
