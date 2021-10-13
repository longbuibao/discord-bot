import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((res) => {
  // const todo = res.data as Todo
  const todo: Todo = res.data
  logTodo(todo.id, todo.title, todo.completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(id, title, completed)
}
