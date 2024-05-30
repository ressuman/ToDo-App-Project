import { useContext, useState } from "react";
import "./App.css";
import MoonIcon from "./assets/Images/icon-moon.svg";
import SunIcon from "./assets/Images/icon-sun.svg";
import AddForm from "./components/AddForm/AddForm";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { ThemeContext } from "./context/Theme/themeContext";
import { Item } from "./components/Item/Item";

function App() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const newTodo = {
      id: Date.now(),
      text: text
        .split(" ")
        .map((word) => capitalizeFirstLetter(word))
        .join(" "),
      complete: false,
    };

    setTodos([...todos, newTodo]);
  };

  function removeTodoById(id) {
    const todosItems = todos.filter((todo) => todo.id !== id);
    setTodos(todosItems);
  }

  function toggleTodoComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  }

  function setFilterValue(value) {
    setFilter(value);
  }

  function getTodoCount(filter) {
    if (filter === "all") {
      return todos.length;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.complete).length;
    } else if (filter === "complete") {
      return todos.filter((todo) => todo.complete).length;
    }
  }

  function clearCompletedTodos() {
    const todosItems = todos.filter((todo) => !todo.complete);
    setTodos(todosItems);
  }

  function renderTodos() {
    let filteredTodos = todos;

    if (filter === "active") {
      filteredTodos = todos.filter((todo) => !todo.complete);
    } else if (filter === "complete") {
      filteredTodos = todos.filter((todo) => todo.complete);
    }

    return filteredTodos.map((todo) => (
      <Item
        key={todo.id}
        itemData={todo}
        deleteItem={removeTodoById}
        statusUpdate={toggleTodoComplete}
      />
    ));
  }

  return (
    <div
      className={`${
        darkTheme ? "bg-slate-900" : "bg-[#f2f2f2]"
      } min-h-screen pb-20 relative`}
    >
      {/* Header Section */}
      <div className="bg-[./public/bg-mobile-light.jpg] lg:bg-[./public/bg-desktop-light.jpg] bg-no-repeat bg-cover h-52 px-5 lg:px-0 pt-10">
        <div className="flex justify-between lg:w-5/6 lg:mx-auto">
          <p className="text-3xl font-semibold text-white tracking-[6px]">
            TODO
          </p>
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="h-5 cursor-pointer border-none bg-transparent p-0"
          >
            <img
              src={darkTheme ? SunIcon : MoonIcon}
              alt="icon"
              className="h-full"
            />
          </button>
        </div>
        {/* Add Todo Form */}
        <div className="mt-8 lg:w-4/6 lg:mx-auto ">
          <AddForm addTodo={addTodo} />
        </div>
      </div>
      {/* Todo List Section */}
      <div
        className={`${
          darkTheme ? "bg-[#25273d] " : "bg-white"
        } lg:w-4/6 lg:mx-auto  mx-5 relative -top-7 rounded-md`}
      >
        <BottomNav filterType={setFilterValue} />
        {renderTodos()}
        {/* Footer Section */}
        <div className="flex justify-between items-center px-5 h-14 text-sm lg:text-[16px] text-[#9495a5]">
          <p className="mr-2">
            {todos.length > 0
              ? `${getTodoCount(filter)} Items left`
              : "Add new Todo Item !!!"}
          </p>
          {todos.length > 0 && (
            <button
              className="focus:font-bold"
              type="button"
              onClick={clearCompletedTodos}
            >
              Clear Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
