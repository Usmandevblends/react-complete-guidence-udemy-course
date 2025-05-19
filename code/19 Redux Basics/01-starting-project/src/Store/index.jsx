import { createStore } from 'redux';

const counterReducer = (state = { counter: 100 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'increaseby5')  {
        return {
            counter: state.counter + 5
        };
    }


    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter > 0 ? 0 : state.counter
        };
    }
    return state;
}

const store = createStore(counterReducer);

export default store;