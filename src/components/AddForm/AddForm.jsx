export default function AddForm() {
  return (
    <div className="bg-white py-3 px-5 rounded-md">
      <form className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            className="bg-white text-gray-900 text-sm lg:py-2 py-1 px-3 block w-full  focus:outline-none "
            placeholder="Create new Todo item..."
            required
          />
        </div>
        <button className="bg-[#3a7cfd] hover:bg-[#366fe1] inline-flex items-center py-2.5  px-3.5 lg:px-7 ml-2 text-xs font-medium text-white rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
}
