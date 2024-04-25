import { MdCancel, MdCheck, MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

export const Item = ({ itemData }) => {
  return (
    <div>
      {/* Todo Item */}
      <div className="flex justify-between h-14 items-center px-5 text-xs text-[#494c6b]">
        <div className="flex items-center">
          {/* Complete Icon */}
          <MdCheck className="text-[#3a7cfd] h-4 w-4 mr-3 cursor-pointer" />
          <p className="lg:text-[14px]">{itemData.text}</p>
        </div>
        {/* Delete Icon */}
        <MdDeleteForever className="text-red-300 h-5 w-5 cursor-pointer" />
      </div>
      {/* Separator */}
      <div className="bg-[#e3e4f1]"></div>
      {/* Cancel Icon */}
      {/* <MdCancel className="text-[#cccccc] h-5 w-5" /> */}
    </div>
  );
};

Item.propTypes = {
  itemData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
};
