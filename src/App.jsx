import { useState } from 'react';
import './App.css';

// 리스트를 불러오기, 리스트를 추가하기, 리스트를 삭제하기, 리스트를 수정하기

// 리스트를 추가하기

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: '졸려' },
    { id: 1, content: '맛있어' },
    { id: 2, content: '맛없어' },
  ]);

  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

//리스트를 추가하기 
function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        placeholder='할 일을 입력하세요'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue('');
        }}
      >
        추가하기
      </button>
    </>
  );
}

// 리스트를 불러오기

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />;
      })}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  return <li>{todo.content}</li>;
}
export default App;
