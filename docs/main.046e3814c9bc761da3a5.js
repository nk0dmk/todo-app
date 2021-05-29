(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.d({},{L:()=>g});var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.todo=t,this.id=(new Date).getTime(),this.completed=!1,this.created=(new Date).toLocaleDateString()}var o,n,r;return o=e,r=[{key:"fromJSON",value:function(t){var o=t.id,n=t.todo,r=t.completed,i=t.created,a=new e(n);return a.id=o,a.completed=r,a.created=i,a}}],(n=[{key:"printClass",value:function(){console.log("".concat(this.todo," - ").concat(this.id))}}])&&t(o.prototype,n),r&&t(o,r),e}();function n(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadTodosFromLS()}var t,r,a;return t=e,(r=[{key:"newTodo",value:function(e){this.todos.push(e),this.saveTodosToLS()}},{key:"delTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveTodosToLS()}},{key:"completeTodo",value:function(e){var t,o=n(this.todos);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(r.id==e){r.completed=!r.completed,this.saveTodosToLS();break}}}catch(e){o.e(e)}finally{o.f()}}},{key:"clearCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.saveTodosToLS()}},{key:"saveTodosToLS",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadTodosFromLS",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(o.fromJSON)}},{key:"pendingTodoQuantity",value:function(){var e,t=0,o=n(this.todos);try{for(o.s();!(e=o.n()).done;)e.value.completed||t++}catch(e){o.e(e)}finally{o.f()}return t}}])&&i(t.prototype,r),a&&i(t,a),e}();function l(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==o.return||o.return()}finally{if(l)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var s=document.querySelector(".todo-list"),d=document.querySelector(".create-new-todo"),u=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),v=document.querySelectorAll(".filter"),m=document.querySelector(".todo-count"),h=document.querySelector("#toggle-all"),y=function(e){var t='\n    <li class="'.concat(e.completed?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completed?"checked":"",">\n            <label>").concat(e.todo,'</label>\n            <span class="todo-created">Creado el: ').concat(e.created,'</span>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),o=document.createElement("div");return o.innerHTML=t,s.append(o.firstElementChild),m.firstChild.innerHTML=g.pendingTodoQuantity(),s.firstElementChild};d.addEventListener("keyup",(function(e){if(13==e.keyCode&&d.value.length>0){var t=new o(d.value);g.newTodo(t),y(t),d.value="",m.firstChild.innerHTML=g.pendingTodoQuantity(),p()}})),s.addEventListener("click",(function(e){var t=e.target.localName,o=e.target.parentElement.parentElement,n=o.getAttribute("data-id");t.includes("input")?(g.completeTodo(n),o.classList.toggle("completed")):t.includes("button")&&(g.delTodo(n),s.removeChild(o)),m.firstChild.innerHTML=g.pendingTodoQuantity(),p()})),u.addEventListener("click",(function(){g.clearCompleted();for(var e=s.children.length-1;e>=0;e--){var t=s.children[e];t.classList.contains("completed")&&s.removeChild(t)}p()})),f.addEventListener("click",(function(e){var t=e.target.text;if(t){v.forEach((function(e){e.classList.remove("selected")})),e.target.classList.add("selected");var o,n=l(s.children);try{for(n.s();!(o=n.n()).done;){var r=o.value;r.classList.remove("hidden");var i=r.classList.contains("completed");switch(t){case"Pendientes":i&&r.classList.add("hidden");break;case"Completados":i||r.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}p()}})),h.addEventListener("click",(function(){s.classList.toggle("hidden")}));var p=function(){console.log(s.style.visibility),s.classList.contains("hidden")&&s.classList.remove("hidden")},g=new a;g.todos.forEach(y),console.info("%cVerificación de conversión de JSON a Todo","color:lightblue"),console.info("Todos tipo Todo :",g.todos),console.info("%cUsando el map tenemos acceso de nuevo a los métodos","color:lightblue")})();