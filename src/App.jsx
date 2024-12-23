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
      <h1>TO DO LIST</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

//리스트를 추가하기 & 리스트 삭제하기
function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        className='originInput'
        placeholder='할 일을 입력하세요'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className='addBtn'
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
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  console.log(todo.content, inputValue);
  return (
    <li>
      {todo.content}
      <input
        className='reInput'
        placeholder='할 일을 입력하세요'
        style={{ display: isEditing ? 'block' : 'none' }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className='reBtn'
        onClick={() => {
          if (isEditing) {
            setTodoList((prev) => {
              return prev.map((el) =>
                el.id === todo.id ? { ...el, content: inputValue } : el
              );
            });
          }
          setIsEditing((prev) => !prev);
        }}
      >
        {isEditing ? '저장' : '수정'}
      </button>
      <button
        className='delBtn'
        onClick={() => {
          setTodoList((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        삭제
      </button>
      <label>
        <input className="Complete" type='checkbox' /> 완료
      </label>
    </li>
  );
}
export default App;
