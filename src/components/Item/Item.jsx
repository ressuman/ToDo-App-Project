import { MdCancel, MdCheck, MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
import { ThemeContext } from "../../context/Theme/themeContext";
import { useContext } from "react";

export const Item = ({ itemData, deleteItem, statusUpdate }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* Todo Item */}
      <div
        className={`${
          darkTheme ? "text-[#c3c5e0]" : "text-[#494c6b]"
        } flex justify-between h-14 items-center px-5 text-xs `}
      >
        <div className="flex items-center">
          {/* Complete Icon */}
          {itemData.complete ? (
            <MdCheck
              onClick={() => statusUpdate(itemData.id)}
              className={`${
                darkTheme ? "text-[#494c6b]" : "text-[#3a7cfd]"
              }  h-4 w-4 mr-3 cursor-pointer`}
            />
          ) : (
            <MdCancel
              onClick={() => statusUpdate(itemData.id)}
              className={`${
                darkTheme ? "text-[#494c6b]" : "text-[#3a7cfd]"
              }  h-4 w-4 mr-3 cursor-pointer`}
            />
          )}
          <p className="lg:text-[14px]">{itemData.text}</p>
        </div>
        {/* Delete Icon */}
        <MdDeleteForever
          className={`${
            darkTheme ? "text-[#494c6b]" : "text-red-300"
          }  h-5 w-5 cursor-pointer`}
          onClick={() => deleteItem(itemData.id)}
        />
      </div>
      {/* Separator */}
      <div className="bg-[#e3e4f1]"></div>
    </div>
  );
};

Item.propTypes = {
  itemData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  statusUpdate: PropTypes.func.isRequired,
};
