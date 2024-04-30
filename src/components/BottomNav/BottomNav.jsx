import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/themeContext";
import PropTypes from "prop-types";

export const BottomNav = ({ filterType }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkTheme ? "text-[#e2e3ef]" : "text-[#494c6b]"
      }  border-[#494c6b] lg:text-[15px] border-b-[0.5px] flex justify-center items-center gap-8 text-sm font-light h-16 rounded-tl-md rounded-tr-md`}
    >
      <button
        onClick={() => filterType("all")}
        type="button"
        className="focus:font-bold"
      >
        All
      </button>
      <button
        onClick={() => filterType("active")}
        type="button"
        className="focus:font-bold"
      >
        Active
      </button>
      <button
        onClick={() => filterType("complete")}
        type="button"
        className="focus:font-bold"
      >
        Completed
      </button>
    </div>
  );
};

BottomNav.propTypes = {
  filterType: PropTypes.func.isRequired,
};
