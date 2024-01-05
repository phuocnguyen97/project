let input = document.querySelector('input');
let button = document.querySelector('button');
let form = document.querySelector('form');
let todos = document.querySelector('.todos');


// thêm nhiệm vụ

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let val = input.value.trim();
    if(val) {
        addTodoElement({
            text: val,
            // status: 'completed'
        })
    } else {
        alert('Vui lòng nhập thông tin')
    }
    input.value = ''
});

function addTodoElement(todo) {
    let li = document.createElement('li')
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fa-solid fa-trash"></i>
    `
    if(todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }
// ẩn và hiện task

    li.addEventListener('click', function(){
        // console.log(this);
        this.classList.toggle('completed');
    })
// xoá task

    li.querySelector('i').addEventListener('click', function(){
        // console.log(this);
        this.parentElement.remove();
    })
        

    todos.appendChild(li)
}
