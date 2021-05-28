import { Todo } from '../classes';
import { todoList } from '../index';

// HTML Refs
const wrapperTodoList   = document.querySelector('.todo-list');
const inputTodo         = document.querySelector('.create-new-todo');
const clearCompleted    = document.querySelector('.clear-completed');
const ulFilters         = document.querySelector('.filters');
const anchorFilters     = document.querySelectorAll('.filter');

const todoCount         = document.querySelector('.todo-count');

export const  createTodoHTML = ( td ) => {

    const htmlTodo = `
    <li class="${ td.completed ? 'completed': '' }" data-id="${ td.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ td.completed ? 'checked': ''}>
            <label>${ td.todo }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    wrapperTodoList.append( div.firstElementChild );
    todoCount.firstChild.innerHTML = todoList.pendingTodoQuantity();

    /**
     * Probar si funca este código si hay más de un todo
     * wrapperTodoList.innerHTML = htmlTodo;
     * return htmlTodo;
     */
    return wrapperTodoList.firstElementChild;
}

// Events
/**
 * Listener de inserción de todos
 * tecla intro: se inserta si no está vacío
 */
inputTodo.addEventListener('keyup', (ev) => {
    // Si se pulsa enter y hay algo escrito
    if ( ev.keyCode == 13 && inputTodo.value.length > 0 ) {
        // Creamos el todo
        const newTodo = new Todo( inputTodo.value );
        // Lo agregamos a la lista
        todoList.newTodo( newTodo );
        // Creamos el nodo 
        createTodoHTML( newTodo );
        // Vaciamos el input
        inputTodo.value = '';
        // console.log(todoList);
        // console.log( todoList.pendingTodoQuantity() );
        todoCount.firstChild.innerHTML = todoList.pendingTodoQuantity();
    }
});

wrapperTodoList.addEventListener('click', (ev) => {

    // input, button, label
    const elName = ev.target.localName; 
    const elTodo = ev.target.parentElement.parentElement;
    const todoId = elTodo.getAttribute('data-id');

    // console.log(elTodo);
    // console.log(todoId);
    // verificamos si se ha pulsado el checkbox 
    if (elName.includes('input') ) {

        todoList.completeTodo( todoId );
        elTodo.classList.toggle('completed');
    } else if (elName.includes('button')) {
        
        todoList.delTodo( todoId );
        wrapperTodoList.removeChild( elTodo );
    }
    // console.log( todoList );
    // console.log( todoList.pendingTodoQuantity() );
    todoCount.firstChild.innerHTML = todoList.pendingTodoQuantity();
});

clearCompleted.addEventListener('click', () => {

    todoList.clearCompleted();
    // se eliminan de abajo a arriba para no perder el indice
    for( let i = wrapperTodoList.children.length - 1; i >=0; i-- ) {
        
        const el = wrapperTodoList.children[i];
        // si el elemento tiene la clase completed, lo borramos del HTML
        if( el.classList.contains('completed' ) ) {
            wrapperTodoList.removeChild( el );
        }
    }
});

ulFilters.addEventListener('click', (ev) => {

    const filter = ev.target.text;
    // console.log(filter);
    if( !filter ){
        return;
    }

    anchorFilters.forEach( el => {
        el.classList.remove('selected');
    });

    ev.target.classList.add('selected');
    
    for ( const el of wrapperTodoList.children ) {
        // removemos todos lo ocultos | restablecemos
        el.classList.remove( 'hidden' );
        // buscamos los completados
        const completed = el.classList.contains( 'completed' );
        // filtramos por el texto del "btn" pulsado
        switch( filter ) {

            case 'Pendientes':
                // si tiene la clase completed se oculta
                if ( completed ) {
                    el.classList.add( 'hidden' );
                }
            break;

            case 'Completados':
                // si no tiene completed se la quitamos
                if ( !completed ) {
                    el.classList.add( 'hidden' );
                }
            break;
        }
    }
});
