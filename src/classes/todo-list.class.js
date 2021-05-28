import { Todo } from '.';

export class TodoList {

    constructor() {
        //this.todos = [];
        this.loadTodosFromLS();
    }

    newTodo( todo ) {
        this.todos.push( todo );

        this.saveTodosToLS();
    }
    // elimina el completado pasado por id [Pulsando X]
    delTodo( id ) {
        /**
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
         * filter: devuelve un array quitando el id que recibe
         * la funcion 
         */
        this.todos = this.todos.filter( todo =>  todo.id != id );

        this.saveTodosToLS();
    }

    completeTodo( id ) {

        for ( const todo of this.todos ) {
            
            if(todo.id == id ){
                // marcamos la tarea como completada 
                todo.completed = !todo.completed;

                this.saveTodosToLS();
                break;
            }
        }
    }
    // elimina de la lista todos los marcados como completados
    clearCompleted() {
        // se eliminan todos los marcados como completados
        // this.todos = this.todos.filter( todo =>  todo.completed != true );
        this.todos = this.todos.filter( todo =>  !todo.completed );

        this.saveTodosToLS();
    }

    // guardamos todos en el localStorage
    saveTodosToLS( ) {

        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );
    }

    loadTodosFromLS() {

        this.todos = ( localStorage.getItem( 'todo' ) ) 
            ? JSON.parse( localStorage.getItem( 'todo' ))
            : [];
        
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map#compat-desktop
        // pasamos de obj JSON a obj tipo todo
        // this.todos = this.todos.map( obj => Todo.fromJSON( obj ) );
        // simplificado
        this.todos = this.todos.map( Todo.fromJSON );
    }

    pendingTodoQuantity() {
        let quantity = 0;
        for ( const todo of this.todos ) {
            if( !todo.completed ){
                quantity ++;
            }
        }
        return quantity;
    }
    
}