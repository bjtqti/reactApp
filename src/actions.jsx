const ADD_TODO = 'ADD_TODO';


export function addTodo(param){
    return {
        type: ADD_TODO,
		text: 'Build my first Redux app'
    }
}
 