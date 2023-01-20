const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const del = document.createElement('button')
        const lete = 'delete'
        del.innerText = lete
        const edit = document.createElement('button')
        const edit2 = 'edit'
        edit.innerText = edit2

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        del.setAttribute('class', 'delete_button')
        edit.setAttribute('class', 'edit_button')

        text.innerText = input.value

        div.append(text)
        div.append(del)
        div.append(edit)
        todoList.prepend(div)
        del.addEventListener('click', () => {
            div.remove()
        })
        edit.addEventListener('click', () => {
            const edit3 = prompt('впишите текст для изменения')
            text.innerText = edit3
        })
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)