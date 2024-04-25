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

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.toUpperCase(),
      complete: false,
    };

    setTodos([...todos, newTodo]);
  };

  const renderTodos = () => {
    return todos.map((todo, index) => <Item key={index} itemData={todo} />);
  };

  return (
    <div
      className={`${
        darkTheme ? "bg-slate-900" : "bg-[#f2f2f2]"
      } min-h-screen pb-20 relative`}
    >
      {/* Header Section */}
      <div className="bg-light_header_image_mobile lg:bg-light_header_image bg-no-repeat bg-cover h-52 px-5 lg:px-0 pt-10">
        <div className="flex justify-between lg:w-5/6 lg:mx-auto">
          <p className="text-3xl font-semibold text-white tracking-[6px]">
            TODO
          </p>
          {/* Theme Toggle */}
          <img
            src={darkTheme ? SunIcon : MoonIcon}
            onClick={toggleTheme}
            alt="icon"
            className="h-5 cursor-pointer "
          />
        </div>
        {/* Add Todo Form */}
        <div className="mt-8 lg:w-4/6 lg:mx-auto ">
          <AddForm addTodo={addTodo} />
        </div>
      </div>
      {/* Todo List Section */}
      <div
        className={`${
          darkTheme ? "bg-[#25273d]" : "bg-white"
        } lg:w-4/6 lg:mx-auto  mx-5 relative -top-7 rounded-md`}
      >
        <BottomNav />
        {renderTodos()}
        {/* Footer Section */}
        <div className="flex justify-between items-center px-5 h-14 text-sm lg:text-[16px] text-[#9495a5]">
          Add new Todo Item !!!
          <button className="focus:font-bold" type="button">
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
