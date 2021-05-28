import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHTML } from './js/components';

export const todoList = new TodoList();


// todoList.todos.forEach( todo => createTodoHTML( todo ) );
// simplificado (solo recibe un argumento)
todoList.todos.forEach( createTodoHTML );


/** Una vez cargado el Local Storage y si no está 
 *  vacío vemos que los todos guardados en formato JSON
 *  se han convertido en objetos tipo Todo 
 */ 
console.info('%cVerificación de conversión de JSON a Todo', 
    'color:lightblue');
console.info( 'Todos tipo Todo :', todoList.todos );
console.info('%cUsando el map tenemos acceso de nuevo a los métodos', 
    'color:lightblue');
//todoList.todos[0].printClass();

// const td = new Todo('Aprender JS');
// todoList.newTodo( td );
// // td.completed = true;
// console.log( todoList );
// createTodoHTML( td );

/**
 * Sesion storage
 */

/*
localStorage.setItem('my-key', 'ABC123');

setTimeout( () => {
    localStorage.removeItem('my-key');
}, 2000);

*/