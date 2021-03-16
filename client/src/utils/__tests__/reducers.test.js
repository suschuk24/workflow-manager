// import our actions
import {
    UPDATE_REPAIRS,
    UPDATE_USERS
  } from '../utils/actions';

  import { reducer } from '../utils/reducers'
  
  // create a sample of what our global state will look like
  const initialState = {
    repairs: []
  };

  test('UPDATE_REPAIRS', () => {
      let newState = reducer(initialState, {
          type: UPDATE_REPAIRS,
          repairs: [{},{}]
      })

      expect(newState.repairs.length).toBe(2)
      expect(initialState.repairs.length).toBe(0)
  })