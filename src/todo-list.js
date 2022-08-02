import { LitElement, html, css } from 'lit';

export class TodoList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            todos: { type: Array },
            todo:{type:String}
        };
    }
    constructor() {
        super()
        this.todos = [{ texto: 'Hacer la tarea' }, { texto: 'Aprender Js' }]
    }

    render() {
        return html`
        TODO-LIST
        <p>Agrega una tarea</p>
        <input type='text' placeholder="Ej. Hacer la tarea" @keyup="${this.addTodo}" id='input'>
        <button @click='${this.addTodos}'>Agregar</button>
        <ul>
            ${this.todos.map(todo=>
                html`<li>${todo.texto}</li>`)}
        </ul>
        `;
    }
    addTodo(e){
        if(e.key==='Enter'&&e.target.value!==''){
            this.todo=e.target.value
            console.log(this.todo);
            this.todos=[...this.todos,{texto:this.todo}]
            e.target.value=''
            console.log('todos',this.todos);
        }
    }
    addTodos(){
        let input = this.renderRoot.querySelector('#input')
        console.log(input.value);
        this.todos=[...this.todos,{texto:input.value}]
        input.value=''
    }
}
customElements.define('todo-list', TodoList);
