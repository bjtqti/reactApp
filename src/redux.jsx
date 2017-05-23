import {
	createStore
} from 'redux';

function counter(state = {}, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return Object.assign({},{text:action.text})
		case 'DECREMENT':
			return state
		default:
			return state
	}
}

let store = createStore(counter);

store.subscribe(() =>
	console.log(store.getState())
);



export default store;