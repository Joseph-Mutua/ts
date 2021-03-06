import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean
}

axios.get(url).then((res) => {
  // const todo = res.data as Todo;

const todo: Todo = res.data;

  const id = todo.id  
  const title = todo.title
  const completed = todo.completed

  logToDo(id, title, completed)

});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID : ${id}
  Has a title of : ${title}
  Is it completed? : ${completed}
  `)
}
