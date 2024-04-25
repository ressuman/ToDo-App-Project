import { useContext, useState } from "react";
import { ThemeContext } from "../../context/Theme/themeContext";
import PropTypes from "prop-types";

export default function AddForm({ addTodo }) {
  const { darkTheme } = useContext(ThemeContext);

  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(item);
    setItem("");
  };

  return (
    <div
      className={`${
        darkTheme ? "bg-[#25273d]" : "bg-white"
      } py-3 px-5 rounded-md`}
    >
      <form className="flex items-center" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <input
            type="text"
            className={`${
              darkTheme
                ? "bg-[#25273d] focus:bg-[#2f314c] focus:text-white"
                : "bg-white "
            } text-gray-900 text-sm lg:py-2 py-1 px-3 block w-full focus:outline-none `}
            placeholder="Create new Todo item..."
            required
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`${
            darkTheme
              ? "bg-[#444767] hover:bg-[#55597f]"
              : " bg-[#3a7cfd] hover:bg-[#366fe1]"
          } inline-flex items-center py-2.5 px-3.5 lg:px-7 ml-2 text-xs font-medium text-white rounded-lg`}
        >
          Add
        </button>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
