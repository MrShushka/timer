import React from 'react';
import { createStore } from 'redux'

const initialState = {
    time: 0,
    isOn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
        case 'START':
            return {
                ...state,
                isOn: true,
            }
        case 'STOP':
            return {
                ...state,
                time: 0,
                isOn: false,
            }
        case 'WAIT':
            return {
                ...state,
                isOn: false,
            }
        case 'INCRIMENT':
            return {
                ...state,
                time: state.time + 1,
            }
        default: return state;
  }


};

const store = createStore(reducer);
export default store;