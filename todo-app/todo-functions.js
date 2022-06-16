//Read existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(todo => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(todo => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    if (todoIndex > -1) {
        return todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // setup todo checkbox
    
    checkbox.setAttribute('type', 'checkbox')
    todoEl.append(checkbox)

    // setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
    
    
    // setup the remove button
    removeButton.textContent = 'x'    
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos)  => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}