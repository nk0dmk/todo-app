export class Todo {

    // recuperar objetos desde Local Storage type JSON
    // recibe el objeto todo desestructurado
    static fromJSON({ id, todo, completed, created }) {

        const tempTodo = new Todo( todo );

        tempTodo.id         = id;
        tempTodo.completed  = completed;
        tempTodo.created    = created;
        // retornamos el obj todo para volver a tener acceso
        // a los métodos
        return tempTodo;
    }

    constructor( todo ) {
        
        this.todo = todo;
        // id basado en el tiempo
        this.id = new Date().getTime();
        this.completed = false;
        this.created   = new Date();
    }

    printClass() {
        console.log(`${ this.todo } - ${ this.id }`);
    }
}