import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper"></div>
      {filteredTodos.map((todo) => {
        // 배열에 담긴 데이터를 리스트 형태로 만들수있음
        return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />; // map콜백함수에선 HTML태그나 컴포넌트를 리턴함
      })}
    </div>
  );
};

export default List;
